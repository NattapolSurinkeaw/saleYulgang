
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  @vite('resources/css/app.css')
  @yield('styles')
</head>
<body>
  @include('frontOffice.layouts.navbar')
  <div class=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    @yield('content')
  </div>

  <div class="bg-gray-200 text-center p-4 text-xl">
    ติดต่อ FB : 
    <a class="text-blue-500 underline" href="https://www.facebook.com/profile.php?id=100002573821911">Nattapol Surinkeaw</a>
  </div>

  {{-- <div id="modalContainer" class="w-full h-full fixed top-0 left-0 flex justify-center items-center hidden" style="background: rgba(0, 0, 0, 0.5);">
    <div id="modalContent" class="bg-white w-96 h-40 relative">
      <h1 id="closeModal" class="absolute top-0 right-0 w-6 h-6 bg-red-400 font-bold flex justify-center items-center text-white rounded-full text-2xl">&times;</h1>
      <h1>555</h1>
    </div>
  </div>


  <div class="popup" id="popup-1">
    <div class="overlay"></div>
    <div class="content" id="contentM">
      <div class="close-btn" id="closeM">&times;</div>
      <h1>Title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nostrum quaerat, error animi voluptatum aperiam voluptate ad dicta optio dolor dolorum deserunt praesentium, adipisci magnam dignissimos ab maiores accusantium eveniet?</p>
    </div>
  </div> --}}



  @yield('scripts')
  <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
  <script>
    const navbar_default = document.querySelector('#navbar-default');
    const btn_show = document.querySelector('#btn_show');
    btn_show.addEventListener('click', () => {
      if(navbar_default.classList.contains('max-lg:hidden')) {
        navbar_default.classList.remove('max-lg:hidden')
      } else {
        navbar_default.classList.add('max-lg:hidden')
      }
    })

    const btndetail = document.querySelectorAll('#btndetail');
    btndetail.forEach(element => {
      element.addEventListener("click", () => {
        const id = element.getAttribute("data-id");
        location.href = `/รายละเอียด/${id}`;
        console.log(element)
      })
    });
  </script>
</body>
</html>