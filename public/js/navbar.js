console.log(product)

const defaultSearch = document.querySelectorAll('#default-search');
const boxProduct = document.querySelectorAll('#box-product');
defaultSearch.forEach(element => {
  element.addEventListener("input", () => {
    const valueSearch = element.value
    console.log(valueSearch)
    filterSearch(valueSearch)
  })
});


const filterSearch = (valueSearch) => {
  // กรองผลิตภัณฑ์ตามค่าค้นหา
  const filteredProducts = product.filter((item) => 
    item.title.toLowerCase().includes(valueSearch.toLowerCase())
  );
  console.log(filteredProducts)
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



