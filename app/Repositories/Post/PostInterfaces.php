<?

namespace App\Repositories\Post;

use App\Http\Requests\PostRequest;

interface PostInterfaces
{
    /**
     * Get all posts
     *
     * @param bool $home
     * @method GET /backend/post
     */
    public function getAllPosts($home = false);

    /**
     * Get post by id
     *
     * @param int $post_id
     * @param string $slug
     * @method GET /backend/post/$post_id
     */
    public function getPostById($post_id, $slug = null);

    /**
     * Crate post
     *
     * @method GET /backend/post/new
     */
    public function createPost();

    /**
     * Save post
     *
     * @param PostRequest $request
     * @method POST /backend/post/new
     */
    public function storePost(PostRequest $request);

    /**
     * Edit post
     *
     * @param int $post_id
     * @method GET /backend/post/$post_id/edit
     */
    public function editPost($post_id);

    /**
     * Update post
     *
     * @param PostRequest $request
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/edit
     */
    public function updatePost(PostRequest $request, $post_id);

    /**
     * Published a post
     *
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/published
     */
    public function publishPost($post_id);

    /**
     * Drafted a post
     *
     * @param int $post_id
     * @method PATCH /backend/post/$post_id/drafted
     */
    public function draftPost($post_id);
}
