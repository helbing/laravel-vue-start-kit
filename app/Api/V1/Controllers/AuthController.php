<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests;
use Illuminate\Support\Facades\Validator;
use App\Api\V1\Controllers\BaseController;
use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;

class AuthController extends BaseController
{
    public function me()
    {
        return JWTAuth::parseToken()->authenticate();
    }

    public function login(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only('email', 'password');

        try {
            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        $where = [
            'email' => $credentials['email']
        ];

        $name = User::where($where)->value('name');

        // all good so return the token and name
        return response()->json(compact('token', 'name'));
    }

    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|unique:user',
            'email' => 'required|email|unique:user',
            'password' => 'required|confirmed|alpha_dash|between:6,10',
            'password_confirmation' => 'required'
        ];

        // validata
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            // return the error msg
            throw new StoreResourceFailedException('Could not create new user.', $validator->errors());
        }

        $newUser = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ];

        $user = User::create($newUser);
        $token = JWTAuth::fromUser($user);

        $name = $newUser['name'];

        // all good so return the token and name
        return response()->json(compact('token', 'name'));
    }
}