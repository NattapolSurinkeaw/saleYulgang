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
                <p class="text-2xl">{{$product->title}}</p>
            </div>
            <div class="px-4 text-xl">
                {!! $product->description !!}
            </div>
    
        </div>

        <div class="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
            @foreach(explode(",", $product->images) as $image)
            <div>
                <img class="h-auto w-full rounded-lg" src="/{{$image}}" alt="">
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection

{{-- @section('scripts')
@vite('public/js/main.js')
@endsection --}}