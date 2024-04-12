<?php

use App\Models\User;
use App\Providers\RouteServiceProvider;

test('login screen can be rendered', function () {
    $response = $this->get('authenticated-user/login');

    if (config('feature.feature.blog') === true) {
        $response->assertStatus(200);
    } else {
        $response->assertStatus(404);
    }
});

test('users can authenticate using the login screen', function () {
    $user = User::factory()->create();

    $response = $this->post('authenticated-user/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);

    if (config('feature.feature.blog') === true) {
        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    } else {
        $response->assertStatus(404);
    }
});

test('users can not authenticate with invalid password', function () {
    $user = User::factory()->create();

    $this->post('authenticated-user/login', [
        'email' => $user->email,
        'password' => 'wrong-password',
    ]);

    if (config('feature.feature.blog') === true) {
        $this->assertGuest();
    } else {
        $this->assertSame(config('feature.feature.blog'), false);
    }
});
