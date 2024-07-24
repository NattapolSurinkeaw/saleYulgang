<div>
    <!-- Well begun is half done. - Aristotle -->
    <div class="flex flex-wrap max-sm:justify-center gap-4">
        @foreach($products as $product)
        @php 
          $image = explode(",", $product->images);
        @endphp
        <div class="border rounded-lg p-2" id="box-product" data-id="{{$product->id}}">
          <img class="w-80 h-[200px] rounded-lg" src="{{url($image[0])}}" alt="">
          <div class="mt-2">
            <p class="text-xl">{{$product->title}}</p>
            @if ($product->status_display == 1)
              <p class='text-green-500'>ยังไม่ขาย</p>
            @else
              <p class='text-red-500'>ขายแล้ว</p>
            @endif
            <div class="flex justify-between items-center">
              <p>ราคา  <strong class="text-lg">{{$product->price}}</strong>  บาท</p>
              <button id="btndetail" data-id="{{$product->id}}" class="mt-2 bg-blue-600 text-white p-1 rounded-lg cursor-pointer">รายละเอียด</button>
            </div>
          </div>
        </div>
        @endforeach
      </div>
</div>

@section('scripts')
<script>
  const product = @json($products)
</script>
@endsection