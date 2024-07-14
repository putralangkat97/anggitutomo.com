<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use App\Repositories\Post\PostRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function __construct(
        protected PostRepository $postRepository,
    ) {
    }

    public function index()
    {
        $data = [];
        if (config('feature.feature.blog')) {
            $data = $this->postRepository->getAllPosts(true);
        }
        $data['feature_blog'] = config('feature.feature.blog');
        return Inertia::render('Home/Index', $data);
    }

    public function blog()
    {
        $data = [];
        if (config('feature.feature.blog')) {
            $data = $this->postRepository->getAllPosts(true);
        }
        return Inertia::render('Home/Blog', $data);
    }

    public function show($slug)
    {
        $data = [];
        if (config('feature.feature.blog')) {
            $data = $this->postRepository->getPostById(slug: $slug);
        }
        return Inertia::render('Home/View', $data);
    }

    public function showByTag($tag)
    {
        $data = [];
        if (config('feature.feature.blog')) {
            $post_tag = $this->postRepository->showPostByTag($tag);
        }
        return Inertia::render('Home/PostTag', $post_tag);
    }
}
