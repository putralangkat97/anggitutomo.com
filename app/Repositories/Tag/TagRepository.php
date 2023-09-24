<?php

namespace App\Repositories\Tag;

use App\Interfaces\Tag\TagInterface;
use App\Models\Tag;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Throwable;

class TagRepository implements TagInterface
{
    public function getAllTags()
    {
        return [
            'tags' => Tag::paginate(10),
        ];
    }

    public function storeTag(Request $request)
    {
        $validated = $request->validate([
            'name' => 'unique:tags,name'
        ]);

        DB::beginTransaction();
        try {
            Tag::create($validated);
            DB::commit();

            return true;
        } catch (Throwable $t) {
            DB::rollBack();
            Log::error('create-tag', $t->getMessage());
            return false;
        }
    }

    public function editTag($tag_id)
    {
        return [
            'tag' => Tag::findOrFail($tag_id),
            'tags' => Tag::all(),
        ];
    }

    public function updateTag(Request $request, $tag_id)
    {
        $validated = $request->validate([
            'name' => 'unique:tags,name,' . $tag_id,
            'is_active' => 'nullable'
        ]);

        DB::beginTransaction();
        try {
            Tag::where('id', $tag_id)->update($validated);
            DB::commit();

            return true;
        } catch (Throwable $t) {
            DB::rollBack();
            Log::error('update-tag', $t->getMessage());
            return false;
        }
    }

    public function hideTag($tag_id)
    {
        return Tag::where('id', $tag_id)->update([
            'is_active' => 0
        ]) ? true : false;
    }

    public function showTag($tag_id)
    {
        return Tag::where('id', $tag_id)->update([
            'is_active' => 1
        ]) ? true : false;
    }
}
