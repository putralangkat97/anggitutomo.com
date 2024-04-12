<?php

use App\Providers\RouteServiceProvider;

test('registration screen can be rendered', function () {
    $response = $this->get('authenticated-user/register');

    if (config('feature.feature.blog') == true) {
        $response->assertStatus(200);
    } else {
        $response->assertStatus(404);
    }
});

test('new users can register', function () {
    $response = $this->post('authenticated-user/register', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    if (config('feature.feature.blog') == true) {
        $this->assertAuthenticated();
        $response->assertRedirect(RouteServiceProvider::HOME);
    } else {
        $response->assertStatus(404);
    }
});
