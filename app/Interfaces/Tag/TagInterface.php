<?php

namespace App\Interfaces\Tag;

use App\Http\Requests\TagRequest;

interface TagInterface
{
    /**
     * Get all tags
     *
     * @method GET /backend/tag
     * @return Array
     */
    public function getAllTags();

    /**
     * Save tag
     *
     * @param TagRequest $request
     * @method POST /backend/tag/new
     * @return Boolean
     */
    public function storeTag(TagRequest $request);

    /**
     * Edit tag
     *
     * @param int $tag_id
     * @method GET /backend/tag/$tag_id/edit
     * @return Array
     */
    public function editTag($tag_id);

    /**
     * Update tag
     *
     * @param TagRequest $request
     * @param int $tag_id
     * @method PATCH /backend/tag/$tag_id/edit
     * @return Boolean
     */
    public function updateTag(TagRequest $request, $tag_id);

    /**
     * Hide tag
     *
     * @param int $tag_id
     * @method PATCH /backend/tag/$tag_id/hide
     * @return Boolean
     */
    public function hideTag($tag_id);

    /**
     * Hide tag
     *
     * @param int $tag_id
     * @method PATCH /backend/tag/$tag_id/show
     * @return Boolean
     */
    public function showTag($tag_id);
}
