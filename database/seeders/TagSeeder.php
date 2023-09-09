<?php

namespace Database\Seeders;

use App\Models\Tag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = [
            'laravel',
            'livewire',
            'php',
            'vue',
            'react',
            'inertia'
        ];

        $form = [];
        foreach ($tags as $tag) {
            $form[] = [
                'name' => $tag,
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        Tag::insert($form);
    }
}
