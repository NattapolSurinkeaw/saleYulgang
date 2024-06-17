<?php

namespace App\Http\Controllers\backOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PagesController extends Controller
{
    //
    public function index() {
        return Inertia::render('HomePage');
    }
}
