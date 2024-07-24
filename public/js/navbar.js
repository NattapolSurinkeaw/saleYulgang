// console.log(product)

const defaultSearch = document.querySelector('#default-search');
const boxProduct = document.querySelectorAll('#box-product');
defaultSearch.addEventListener("input", () => {
  const valueSearch = defaultSearch.value
  filterSearch(valueSearch)
})

const filterSearch = (valueSearch) => {
  // กรองผลิตภัณฑ์ตามค่าค้นหา
  const filteredProducts = product.filter((item) => 
    item.title.toLowerCase().includes(valueSearch.toLowerCase())
  );

  // วนลูปผ่าน boxProduct
  boxProduct.forEach(element => {
    const boxId = element.getAttribute("data-id");

    // ตรวจสอบว่า boxId ตรงกับ id ของ filteredProducts หรือไม่
    const isMatch = filteredProducts.some(product => product.id == boxId);

    // เพิ่มหรือลบคลาส "hidden" ตามเงื่อนไข
    if (isMatch) {
      element.classList.remove("hidden");
    } else {
      element.classList.add("hidden");
    }
  });
};



