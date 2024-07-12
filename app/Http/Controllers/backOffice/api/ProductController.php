<?php

namespace App\Http\Controllers\backoffice\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\CateProduct;

class ProductController extends Controller
{
    //
    public function responseData($data) {
        if(!$data) {
            return response()->json([
                'status' => 'success',
                'message' => 'data not found'
            ], 404);
        }
        return response()->json([
            'status' => 'success',
            'data' => $data
        ], 200);
    }

    public function getCateAll() {
        $cate = CateProduct::all();

        return $this->responseData($cate);
    }

    public function getAllProduct() {
        $product = Product::where('status_display', 1)->get();

        return $this->responseData($product);
    }
}
