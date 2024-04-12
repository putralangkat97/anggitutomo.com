<?php

use App\Models\User;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Support\Facades\Notification;

test('reset password link screen can be rendered', function () {
    $response = $this->get('authenticated-user/forgot-password');

    if (config('feature.feature.blog') == true) {
        $response->assertStatus(200);
    } else {
        $response->assertStatus(404);
    }
});

test('reset password link can be requested', function () {
    Notification::fake();

    $user = User::factory()->create();

    if (config('feature.feature.blog') == true) {
        $this->post('authenticated-user/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class);
    } else {
        $this->assertSame(config('feature.feature.blog'), false);
    }
});

test('reset password screen can be rendered', function () {
    Notification::fake();

    $user = User::factory()->create();

    if (config('feature.feature.blog') == true) {
        $this->post('authenticated-user/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
            $response = $this->get('authenticated-user/reset-password/' . $notification->token);

            $response->assertStatus(200);

            return true;
        });
    } else {
        $this->assertSame(config('feature.feature.blog'), false);
    }
});

test('password can be reset with valid token', function () {
    Notification::fake();

    $user = User::factory()->create();

    if (config('feature.feature.blog') == true) {
        $this->post('authenticated-user/forgot-password', ['email' => $user->email]);

        Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
            $response = $this->post('authenticated-user/reset-password', [
                'token' => $notification->token,
                'email' => $user->email,
                'password' => 'password',
                'password_confirmation' => 'password',
            ]);

            $response->assertSessionHasNoErrors();

            return true;
        });
    } else {
        $this->assertSame(config('feature.feature.blog'), false);
    }
});
