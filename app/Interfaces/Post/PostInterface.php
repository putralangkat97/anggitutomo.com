<?php

namespace App\Interfaces\Post;

use App\Http\Requests\PostRequest;
use phpDocumentor\Reflection\Types\Boolean;

interface PostInterface
{
    /**
     * Get all posts
     *
     * @param bool $home
     * @method GET /backend/post
     * @return Array
     */
    public function getAllPosts($home = false);

    /**
     * Get post by id
     *
     * @param int $post_id
     * @param string $slug
     * @method GET /backend/post/$post_id
     * @return Array
     */
    public function getPostById($post_id, $slug = null);

    /**
     * Crate post
     *
     * @method GET /backend/post/new
     * @return Array
     */
    public function createPost();

    /**
     * Save post
     *
     * @param PostRequest $request
     * @method POST /backend/post/new
     * @return Boolean
     */
    public function storePost(PostRequest $request);

    /**
     * Edit post
     *
     * @param int $post_id
     * @method GET /backend/post/$post_id/edit
     * @return Array
     */
    public function editPost($post_id);

    /**
     * Update post
     *
     * @param PostRequest $request
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/edit
     * @return Boolean
     */
    public function updatePost(PostRequest $request, $post_id);

    /**
     * Published a post
     *
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/published
     * @return Boolean
     */
    public function publishPost($post_id);

    /**
     * Drafted a post
     *
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/drafted
     * @return Boolean
     */
    public function draftPost($post_id);

    /**
     * Show post by tag/label
     *
     * @param string $tag
     * @method GET /blog/$tag
     * @return Array
     */
    public function showPostByTag($tag);
}
