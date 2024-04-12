<?php

use App\Models\User;

test('confirm password screen can be rendered', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('authenticated-user/confirm-password');

    if (config('feature.feature.blog') === true) {
        $response->assertStatus(200);
    } else {
        $response->assertStatus(404);
    }
});

test('password can be confirmed', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('authenticated-user/confirm-password', [
        'password' => 'password',
    ]);

    if (config('feature.feature.blog') === true) {
        $response->assertRedirect();
        $response->assertSessionHasNoErrors();
    } else {
        $response->assertStatus(404);
    }
});

test('password is not confirmed with invalid password', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('authenticated-user/confirm-password', [
        'password' => 'wrong-password',
    ]);

    if (config('feature.feature.blog') === true) {
        $response->assertSessionHasErrors();
    } else {
        $response->assertStatus(404);
    }
});
