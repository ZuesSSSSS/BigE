<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$api_base = '/api';

$router->get(sprintf('%s/', $api_base), function () use ($router) {
    return phpinfo();
});

$router->get(sprintf('%s/products', $api_base), 'ProductController@index');
