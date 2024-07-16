console.log("gogog")

const viewImage = document.querySelectorAll('#viewImage');
const btnBuyProduct = document.querySelector('#btnBuyProduct');

viewImage.forEach(element => {
  element.addEventListener('click', () => {
    const indexImage = element.getAttribute("index");
    console.log(indexImage)
  })
});

btnBuyProduct.addEventListener("click", () => {
  // console.log(btnBuyProduct);
  location.href = "https://www.facebook.com/profile.php?id=100002573821911";
})