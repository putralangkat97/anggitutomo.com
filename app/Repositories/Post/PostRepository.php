<?php

namespace App\Repositories\Post;

use App\Http\Requests\PostRequest;
use App\Models\Post;
use App\Models\Tag;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class PostRepository implements PostInterfaces
{
    public function getAllPosts($home = false)
    {
        $posts = Post::query();
        if ($home == true) {
            $posts = $posts->where('status', 'published')
                ->take(6)->get();
        } else {
            $posts = $posts->select(['id', 'title', 'status', 'updated_at'])
                ->paginate(10);
        }

        return [
            'posts' => $posts,
        ];
    }

    public function getPostById($post_id = null, $slug = null)
    {
        $post = Post::query()->with('tags');
        if ($post_id) {
            $post = $post->where('id', $post_id)->first();
        }
        if ($slug) {
            $post = $post->where('slug', $slug)->first();
        }

        return [
            'post' => $post,
        ];
    }

    public function createPost()
    {
        $tags = Tag::select(['id', 'name'])->get();
        $tags = $tags->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name == 'php' ? strtoupper($item->name) : ucfirst($item->name),
            ];
        });

        return ['tags' => $tags];
    }

    public function storePost(PostRequest $request)
    {
        $validated = $request->validated();

        $validated['slug'] = $request->input('slug');
        $validated['tag'] = $request->input('tag');
        $validated['status'] = 'draft';

        $tags = [];
        foreach ($validated['tag'] as $tag) {
            $tags[] = $tag['value'];
        }

        DB::beginTransaction();
        try {
            $post = Post::create([
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'content' => $validated['content'],
                'user_id' => Auth::user()->id,
                'status' => $validated['status'],
            ]);
            $post->tags()->attach($tags);
            DB::commit();

            return true;
        } catch (Throwable $t) {
            DB::rollBack();
            Log::error('create-post', $t->getMessage());
            return false;
        }
    }

    public function editPost($post_id)
    {
        $tags = Tag::select(['id', 'name'])->get();
        $tags = $tags->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name == 'php' ? strtoupper($item->name) : ucfirst($item->name),
            ];
        });
        $post = Post::findOrFail($post_id);
        $post_tag = $post->tags()->get();
        $post_tag = $post_tag->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name == 'php' ? strtoupper($item->name) : ucfirst($item->name),
            ];
        });

        return [
            'post' => $post,
            'tags' => $tags,
            'postTag' => $post_tag
        ];
    }

    public function updatePost(PostRequest $request, $post_id)
    {
        $validated = $request->validated();

        $validated['slug'] = $request->input('slug');
        $validated['tag'] = $request->input('tag');
        $validated['status'] = 'draft';

        $tags = [];
        foreach ($validated['tag'] as $tag) {
            $tags[] = $tag['value'];
        }

        DB::beginTransaction();
        try {
            $post = Post::where('id', $post_id);
            $post = $post->update([
                'title' => $validated['title'],
                'slug' => $validated['slug'],
                'content' => $validated['content'],
                'user_id' => Auth::user()->id,
                'status' => $validated['status'],
            ]);

            $pivot = Post::find($post_id);
            $pivot->tags()->sync($tags);
            DB::commit();

            return true;
        } catch (Throwable $t) {
            DB::rollBack();
            Log::error('create-post', $t->getMessage());
            return false;
        }
    }

    public function publishPost($post_id)
    {
        return Post::where('id', $post_id)->update([
            'status' => 'published'
        ]) ? true : false;
    }

    public function draftPost($post_id)
    {
        return Post::where('id', $post_id)->update([
            'status' => 'draft'
        ]) ? true : false;
    }
}
