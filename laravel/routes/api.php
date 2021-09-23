<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Question;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });


// Route::middleware('auth:api')->get('/questions_test', function(Request $request) {
//     return "hello sdf";
//     //return Question::all();
// });

Route::get('/teams', 'App\Http\Controllers\TeamController@index');
Route::get('/teams/{id}', 'App\Http\Controllers\TeamController@show');
#Route::post('/teams', 'TeamController@store');
