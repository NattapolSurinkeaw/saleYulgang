<?php

namespace App\Http\Controllers\frontOffice;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CateProduct;
use App\Models\Product;

class PagesController extends Controller
{
    //
    public function index() {
        // $cate = CateProduct::all();
        $product = Product::all();

        return view('frontOffice.pages.home', compact('product'));
    }
}
