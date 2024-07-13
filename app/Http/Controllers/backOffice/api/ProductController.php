<?php

namespace App\Http\Controllers\backoffice\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\CateProduct;

class ProductController extends Controller
{
    //

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
            'status_display' => ($params['status_display'] == 'true')? 1 : 0,
            'priority' => $params['priority']
        ]);

        return $this->responseData($product);
    }

    public function getProductById($id) {
        $product = Product::find($id);
        return $this->responseData($product);
    }

    public function editProduct(Request $request, $id) {
        $params = $request->all();
        $files = $request->file('images');

        $product = Product::find($id);

        if($files) {
            $pathImages = explode(",", $product->images);
            foreach($pathImages as $path) {
                $this->deleteFile($path);
            }

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
        }
        
        $product->update([
            'title' => $params['title'],
            'cate_id' => $params['cate_id'],
            'description' => $params['description'],
            'images' => (isset($allPath)) ? $allPath : $product->images,
            'status_display' => ($params['status_display'] == 'true') ? 1 : 0,
            'priority' => $params['priority']
        ]);

        return $this->responseData($product);
    }

    public function delProduct($id) {
        $product = Product::find($id);
        $pathImages = explode(",", $product->images);
        foreach($pathImages as $path) {
            $this->deleteFile($path);
        }
        $product->delete();

        return $this->responseMessage("Product deleted successfully");
    }
}
