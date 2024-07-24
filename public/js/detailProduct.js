console.log("gogog")

const viewImage = document.querySelectorAll('#viewImage');
const btnBuyProduct = document.querySelector('#btnBuyProduct');
const modalContainer = document.querySelector('#modalContainer');


const openM = document.querySelector('#openM');
const closeM = document.querySelector('#closeM');
const content = document.querySelector('#contentM');
const overlay = document.querySelector('.overlay');

const showImage = document.querySelector('#showImage');
const closeModal = document.querySelector('#closeModal');

const imageArray = dataImage.split(',')
console.log(imageArray);
viewImage.forEach(element => {
  element.addEventListener('click', () => {
    const indexImage = element.getAttribute("index");
    modalContainer.classList.remove('hidden');
    console.log(imageArray[indexImage])
    showImage.src = `/${imageArray[indexImage]}`
  })
});


closeModal.addEventListener('click', () => {
  modalContainer.classList.add('hidden');
})

btnBuyProduct.addEventListener("click", () => {
  // console.log(btnBuyProduct);
  location.href = "https://www.facebook.com/profile.php?id=100002573821911";
})
