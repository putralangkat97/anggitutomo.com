<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class IndexController extends Controller
{
    public function index()
    {
        return Inertia::render('Home/Index');
    }

    public function blog()
    {
        return Inertia::render('Home/Blog');
    }

    public function show($slug)
    {
        return Inertia::render('Home/View');
    }
}
