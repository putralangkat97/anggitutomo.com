<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $this->app->bind(
            'App\Interfaces\Post\PostInterface',
            'App\Repositories\Post\PostRepository'
        );

        $this->app->bind(
            'App\Interfaces\Tag\TagInterface',
            'App\Repositories\Tag\TagRepository'
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
