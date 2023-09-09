<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Post;
use App\Models\Tag;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;
use stdClass;
use Throwable;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Admin/Post/Index', ['posts' => $posts]);
    }

    public function create()
    {
        $tags = Tag::select(['id', 'name'])->get();
        $tags = $tags->map(function ($item) {
            return [
                'value' => $item->id,
                'label' => $item->name == 'php' ? strtoupper($item->name) : ucfirst($item->name),
            ];
        });

        return Inertia::render('Admin/Post/Create', ['tags' => $tags]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|min:2|max:255',
            'content' => 'required|min:10',
        ]);

        $validated['slug'] = $request->input('slug');
        $validated['tag'] = $request->input('tag');
        $validated['user_id'] = Auth::user()->id;
        $validated['status'] = 'pending';

        $tags = [];
        foreach ($validated['tag'] as $tag) {
            $tags[] = $tag['value'];
        }

        DB::beginTransaction();
        try {
            $post = Post::create($validated);
            $post->tags()->attach($tags);
            DB::commit();

            return redirect()->route('admin.post.index');
        } catch (Throwable $t) {
            DB::rollBack();
            Log::error('create-post', $t->getMessage());
        }
    }
}
