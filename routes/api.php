<?php

use App\Http\Controllers\LotController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get  ('/lots',        [LotController::class, 'index']);
Route::post ('/lots',        [LotController::class, 'store']);
Route::put  ('/lots/{id}',   [LotController::class, 'update']);
Route::delete('/lots/{id}',   [LotController::class, 'destroy']);
