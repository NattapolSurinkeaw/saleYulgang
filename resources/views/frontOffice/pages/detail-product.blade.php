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
          <div class="px-4 flex max-sm:flex-col gap-2">
            <p class="w-[105px]">รายละเอียด : </p>
            <div id="content-ck" class="text-xl max-w-[] w-full font-semibold">
              {!! $product->description !!}
            </div>
          </div>
          <div class="px-4 flex gap-2">
            <p>ราคา : </p>
            <div class="text-xl font-semibold">
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

<div id="modalContainer" class="w-full h-full fixed top-0 left-0 flex justify-center items-center hidden" style="background: rgba(0, 0, 0, 0.5);">
  <div id="modalContent" class="w-96 h-96 2xl:w-[1000px] 2xl:h-[600px] lg:w-[750px] lg:h-[500px] md:w-[600px] md:h-[500px] relative">
    <h1 id="closeModal" class="absolute top-0 right-0 w-8 h-8 bg-red-600 font-bold flex justify-center items-center text-white rounded-full text-2xl">&times;</h1>
    <img src="" class="w-full h-full object-contain" id="showImage" alt="">
  </div>
</div>

@endsection

@section('scripts')
<script>
  const dataImage = @json($product->images);
  // console.log(dataImage);
</script>
  @vite('public/js/detailProduct.js')
@endsection