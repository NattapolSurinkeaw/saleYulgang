@extends('frontOffice.layouts.main')
@section('styles')
@vite('public/css/modal.css')
@endsection

@section('content')
<div>
  <h1>Hello world</h1>
  <button id="openModal" class="w-20 h-10 bg-red-500 text-white rounded-md">กด Modal</button>

  <button class="w-20 h-10 bg-red-500 text-white rounded-md" id="openM">New</button>
</div>
@endsection

@section('scripts')
@vite('public/js/main.js')
@endsection