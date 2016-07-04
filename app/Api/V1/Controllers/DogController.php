<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Api\BaseController;
use Illuminate\Support\Facades\Validator;
use Dingo\Api\Exception\StoreResourceFailedException;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use App\Dog;

class DogController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Dog::all();
    }

    /**
     * Create a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $rules = [
            'name' => 'required|unique:dog',
            'age' => 'required|integer',
        ];

        // validata
        $validator = Validator::make($request->only(['name', 'age']), $rules);

        if ($validator->fails()) {
            // return the error msg
            throw new StoreResourceFailedException('Could not create dog.', $validator->errors());
        }

        Dog::create($request->only(['name', 'age']));

        return response()->json(['msg'=> 'success']);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Dog::findOrFail($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $dog = Dog::findOrFail($id);
        $dog->update($request->only(['name', 'age']));
        return $dog;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Dog::destroy($id);
    }
}
