<?php

use App\Http\Controllers\backOffice\PagesController as BackOfficePagesController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\frontOffice\PagesController as FrontOfficePagesController;

Route::get('/', [FrontOfficePagesController::class, 'index']);

// Route::get('/backoffice', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });


Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/backoffice', [BackOfficePagesController::class, 'index']);
    // Route::get('/dashboard', function () {
    //     return Inertia::render('Dashboard');
    // })->name('dashboard');
    Route::get('backoffice/dashboard', [BackOfficePagesController::class, 'index'])->name('dashboard');
    Route::get('backoffice/home', [BackOfficePagesController::class, 'home']);
    Route::get('backoffice/test', [BackOfficePagesController::class, 'test'])->name("test");
    Route::get('backoffice/page', [BackOfficePagesController::class, 'managePage']);
    Route::get('backoffice/profile', [BackOfficePagesController::class, 'manageProfile']);
    Route::get('backoffice/category', [BackOfficePagesController::class, 'manageCategory']);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/editprofile', [ProfileController::class, 'editProfile']);
});

require __DIR__.'/auth.php';
