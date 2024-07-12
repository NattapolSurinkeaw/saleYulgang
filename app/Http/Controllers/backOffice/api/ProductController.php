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
        $product = Product::all();

        return $this->responseData($product);
    }

    public function createProduct(Request $request) {
        $params = $request->all();
        $files = $request->file('images');
        $images[] = array();
        foreach ($files as $file) {
            $newFolder = "upload/" . date('Y') . "/" . date('m') . "/" . date('d') . "/";
            $pathImage = (isset($file)) ? $this->uploadImage($newFolder, $file, "", "", time()) : "";
            $images[] = $pathImage;
        }
        $images = array_filter($images, function($value) {
            return !empty($value);
        });
        $allPath = implode(",", $images);

        $product = Product::create([
            'title' => $params['title'],
            'cate_id' => $params['cate_id'],
            'description' => $params['description'],
            'images' => $allPath,
            'status_display' => ($params['status_display'] == 1)? true : false,
            'priority' => $params['priority']
        ]);

        return $this->responseData($product);
    }
}
