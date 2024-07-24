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
        $products = Product::all();

        return view('frontOffice.pages.home', compact('products'));
    }

    public function filterPage($path) {
        $filterCate = CateProduct::where('title', $path)->get();

        $products = Product::where('cate_id', $filterCate[0]->id)->get();
        
        return view('frontOffice.pages.productFilter', compact('filterCate', 'products'));
    }

    public function detailProduct($id) {
        $product = Product::find($id);

        return view('frontOffice.pages.detail-product', compact('product'));
    }
}