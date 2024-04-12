<?php

use App\Models\User;

test('profile page is displayed', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->get('/backend/profile');

    if (config('feature.feature.blog') === true) {
        $response->assertOk();
    } else {
        $response->assertStatus(404);
    }
});

test('profile information can be updated', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->patch('/backend/profile', [
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

    if (config('feature.feature.blog') === true) {
        $response->assertSessionHasNoErrors()
            ->assertRedirect('/backend/profile');

        $user->refresh();

        $this->assertSame('Test User', $user->name);
        $this->assertSame('test@example.com', $user->email);
        $this->assertNull($user->email_verified_at);
    } else {
        $response->assertStatus(404);
    }
});

test('email verification status is unchanged when the email address is unchanged', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->patch('/backend/profile', [
            'name' => 'Test User',
            'email' => $user->email,
        ]);

    if (config('feature.feature.blog') === true) {
        $response->assertSessionHasNoErrors()
            ->assertRedirect('/backend/profile');

        $this->assertNotNull($user->refresh()->email_verified_at);
    } else {
        $response->assertStatus(404);
    }
});

test('user can delete their account', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->delete('/backend/profile', [
            'password' => 'password',
        ]);

    if (config('feature.feature.blog') === true) {
        $response->assertSessionHasNoErrors()
            ->assertRedirect('/');

        $this->assertGuest();
        $this->assertNull($user->fresh());
    } else {
        $response->assertStatus(404);
    }
});

test('correct password must be provided to delete account', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)
        ->from('/backend/profile')
        ->delete('/backend/profile', [
            'password' => 'wrong-password',
        ]);

    if (config('feature.feature.blog') === true) {
        $response->assertSessionHasErrors('password')
            ->assertRedirect('/backend/profile');

        $this->assertNotNull($user->fresh());
    } else {
        $response->assertStatus(404);
    }
});
