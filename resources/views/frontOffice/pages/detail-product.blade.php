@extends('frontOffice.layouts.main')
@section('styles')
@vite('public/css/modal.css')
@endsection

@section('content')
<div>
    {{-- @dd($product) --}}

    <div class="mt-4 flex max-md:flex-col gap-4">
        <div class="w-full border rounded-lg">
          <div class="bg-gradient-to-r from-[#EC1F25] via-[#C2198D] to-[#00ADEF]  rounded-t p-4 text-white">
              <p class="text-2xl">สินค้า : {{$product->title}}</p>
          </div>
          <div class="px-4 flex gap-2">
            <p>รายละเอียด : </p>
            <div class="text-xl">
              {!! $product->description !!}
            </div>
          </div>
          <div class="px-4 flex gap-2">
            <p>ราคา : </p>
            <div class="text-xl">
              {{$product->price}} บาท
            </div>
          </div>
          <div class="px-4">
            @if ($product->status_display == 1)
            <p class='text-green-500'>ยังไม่ขาย</p>
            @else
              <p class='text-red-500'>ขายแล้ว</p>
            @endif
          </div>
          <div class="px-4 pb-4">
            <button 
              id="btnBuyProduct"
              class="p-1 mt-4 hover:bg-blue-500 bg-blue-600 text-white rounded-lg">ติดต่อซื้อ</button>
          </div>
        </div>

        <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          @foreach(explode(",", $product->images) as $index => $image)
          <div>
              <img id="viewImage" index={{$index}} class="h-auto w-full rounded-lg" src="/{{$image}}" alt="">
          </div>
          @endforeach
        </div>
    </div>
</div>

<div class="popup" id="popup-1">
  <div class="overlay"></div>
  <div class="content" id="contentM">
    <div class="close-btn" id="closeM">&times;</div>
    <h1>Title</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum quaerat, error animi voluptatum aperiam voluptate ad dicta optio dolor dolorum deserunt praesentium, adipisci magnam dignissimos ab maiores accusantium eveniet?</p>
  </div>
</div>
@endsection

@section('scripts')
@vite('public/js/detailProduct.js')
@endsection