<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Repositories\Post\PostRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class PostController extends Controller
{
    public function __construct(
        protected PostRepository $postRepository
    ) {
    }

    public function index()
    {
        $data = $this->postRepository->getAllPosts();
        return Inertia::render('Admin/Post/Index', $data);
    }

    public function create()
    {
        $data = $this->postRepository->createPost();
        return Inertia::render('Admin/Post/Create', $data);
    }

    public function store(PostRequest $request)
    {
        if ($this->postRepository->storePost($request)) {
            return Redirect::route('admin.post.index');
        }
    }

    public function show($id)
    {
        $data = $this->postRepository->getPostById($id);
        return Inertia::render('Admin/Post/View', $data);
    }

    public function edit($id)
    {
        $data = $this->postRepository->editPost($id);
        return Inertia::render('Admin/Post/Edit', $data);
    }

    public function update(PostRequest $request, $id)
    {
        if ($this->postRepository->updatePost($request, $id)) {
            return Redirect::route('admin.post.index');
        }
    }

    public function published($id)
    {
        if ($this->postRepository->publishPost($id)) {
            return Redirect::route('admin.post.index');
        }
    }

    public function drafted($id)
    {
        if ($this->postRepository->draftPost($id)) {
            return Redirect::route('admin.post.index');
        }
    }
}
