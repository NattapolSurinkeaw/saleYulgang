@extends('frontOffice.layouts.main')
@section('styles')
@vite('public/css/modal.css')
@endsection

@section('content')
<div>
  <h1 class="text-2xl mb-4">สินค้า {{$filterCate[0]->title}}</h1>
  
  <x-component-product :products="$products"/>
</div>
@endsection