<?php

use App\Http\Controllers\Api\BlogController;
use App\Http\Controllers\Api\BookingController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\ExperienceController;
use Illuminate\Support\Facades\Route;

Route::get('/experiences', [ExperienceController::class, 'index']);
Route::get('/experiences/{slug}', [ExperienceController::class, 'show']);
Route::post('/bookings', [BookingController::class, 'store']);
Route::get('/blog', [BlogController::class, 'index']);
Route::post('/contact', [ContactController::class, 'store']);
