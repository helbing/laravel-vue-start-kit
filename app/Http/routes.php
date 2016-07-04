<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'IndexController@index');

/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------
*/

$api->version('v1', function ($api) {

    $api->group([
        'namespace' => 'App\Api\V1\Controllers'
    ], function ($api) {
        $api->post('/login', 'AuthController@login');
        $api->post('/register', 'AuthController@register');
    });

    $api->group([
        'namespace' => 'App\Api\V1\Controllers',
        'middleware' => 'jwt.auth'
    ], function ($api) {
        $api->get('/me', 'AuthController@me');

        $api->group([
            'prefix' => 'dog'
        ], function ($api) {
            $api->get('/', 'DogController@index');
            $api->get('/{id}', 'DogController@show');
            $api->post('/', 'DogController@create');
            $api->put('/edit/{id}', 'DogController@edit');
            $api->delete('/{id}', 'DogController@destroy');
        });
    });
});