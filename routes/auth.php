<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {
    Route::get('authenticated-user/register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('authenticated-user/register', [RegisteredUserController::class, 'store']);

    Route::get('authenticated-user/login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('authenticated-user/login', [AuthenticatedSessionController::class, 'store']);

    Route::get('authenticated-user/forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('authenticated-user/forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('authenticated-user/reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('authenticated-user/reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth')->group(function () {
    Route::get('authenticated-user/verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('authenticated-user/verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('authenticated-user/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('authenticated-user/confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('authenticated-user/confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('authenticated-user/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});
