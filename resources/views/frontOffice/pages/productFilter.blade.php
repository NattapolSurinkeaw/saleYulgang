@extends('frontOffice.layouts.main')
@section('styles')
@vite('public/css/modal.css')
@endsection

@section('content')
<div>
  <h1 class="text-2xl mb-4">สินค้า {{$filterCate[0]->title}}</h1>
  
  <div class="flex flex-wrap max-sm:justify-center gap-4">
    @foreach($products as $product)
    @php 
      $image = explode(",", $product->images);
    @endphp
    <div class="border rounded-lg p-2">
      <img class="w-80 rounded-lg" src="{{url($image[0])}}" alt="">
      <div class="mt-2">
        <p class="text-xl">{{$product->title}}</p>
        @if ($product->status_display == 1)
          <p class='text-green-500'>ยังไม่ขาย</p>
        @else
          <p class='text-red-500'>ขายแล้ว</p>
        @endif
        <div>
          <p>ราคา  <strong class="text-lg">{{$product->price}}</strong>  บาท</p>
          <button id="btndetail" data-id="{{$product->id}}" class="mt-2 bg-blue-600 text-white p-1 rounded-lg cursor-pointer">รายละเอียด</button>
        </div>
      </div>
    </div>
    @endforeach
  </div>
</div>
@endsection