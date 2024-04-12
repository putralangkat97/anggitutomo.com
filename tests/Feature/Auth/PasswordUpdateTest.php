<?php

use App\Models\User;
use Illuminate\Support\Facades\Hash;

test('password can be updated', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->from('/backend/profile')
        ->put('/password', [
            'current_password' => 'password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);

    if (config('feature.feature.blog') == true) {
        $response
            ->assertSessionHasNoErrors()
            ->assertRedirect('/backend/profile');

        $this->assertTrue(Hash::check('new-password', $user->refresh()->password));
    } else {
        $response->assertStatus(404);
    }
});

test('correct password must be provided to update password', function () {
    $user = User::factory()->create();

    $response = $this
        ->actingAs($user)
        ->from('/backend/profile')
        ->put('/password', [
            'current_password' => 'wrong-password',
            'password' => 'new-password',
            'password_confirmation' => 'new-password',
        ]);

    if (config('feature.feature.blog') == true) {
        $response
            ->assertSessionHasErrors('current_password')
            ->assertRedirect('/backend/profile');
    } else {
        $response->assertStatus(404);
    }
});
