<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\TagRequest;
use App\Repositories\Tag\TagRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class TagController extends Controller
{
    public function __construct(
        protected TagRepository $tagRepository
    ) {
    }

    public function index()
    {
        $data = $this->tagRepository->getAllTags();
        return Inertia::render('Admin/Tag/Index', $data);
    }

    public function create()
    {
        return Inertia::render('Admin/Tag/Create');
    }

    public function store(TagRequest $request)
    {
        if ($this->tagRepository->storeTag($request)) {
            return Redirect::route('admin.tag.index');
        }
    }

    public function edit($id)
    {
        $data = $this->tagRepository->editTag($id);
        return Inertia::render('Admin/Tag/Edit', $data);
    }

    public function update(TagRequest $request, $id)
    {
        if ($this->tagRepository->updateTag($request, $id)) {
            return Redirect::route('admin.tag.index');
        };
    }

    public function hide($id)
    {
        if ($this->tagRepository->hideTag($id)) {
            return Redirect::route('admin.tag.index');
        };
    }

    public function show($id)
    {
        if ($this->tagRepository->showTag($id)) {
            return Redirect::route('admin.tag.index');
        };
    }
}
