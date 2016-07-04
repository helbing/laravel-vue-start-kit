<?php

namespace App\Api\V1\Controllers;

use App\Api\BaseController;

class TestController extends BaseController
{
    public function index() 
    {
        return 'this is test for V1';
    }
}
