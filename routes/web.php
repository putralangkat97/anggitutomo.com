<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PostController;
use App\Http\Controllers\Home\IndexController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return redirect()->route('admin.dashboard');
    });

    Route::prefix('/backend')->name('admin.')
        ->group(function () {
            Route::controller(DashboardController::class)
                ->group(function () {
                    Route::get('/dashboard', 'dashboard')->name('dashboard');
                });

            Route::controller(PostController::class)
                ->name('post.')
                ->group(function () {
                    Route::get('/post', 'index')->name('index');
                    Route::get('/post/new', 'create')->name('create');
                    Route::post('/post/new', 'store')->name('store');
                    Route::get('/post/{id}/show', 'show')->name('show');
                    Route::get('/post/{id}/edit', 'edit')->name('edit');
                    Route::patch('/post/{id}/edit', 'update')->name('update');
                    Route::patch('/post/{id}/publish', 'published')->name('publish');
                    Route::patch('/post/{id}/draft', 'drafted')->name('draft');
                });

            Route::controller(ProfileController::class)
                ->name('profile.')
                ->group(function () {
                    Route::get('/profile', 'edit')->name('edit');
                    Route::patch('/profile', 'update')->name('update');
                    Route::delete('/profile', 'destroy')->name('destroy');
                });
        });
});


Route::name('post.')->controller(IndexController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/blog', 'blog')->name('blog');
    Route::get('/blog/{slug}', 'show')->name('show');
    Route::get('/blog/tag/{tag}', 'showByTag')->name('tag');
});
