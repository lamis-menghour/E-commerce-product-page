var productGallery = document.getElementById("productGallery");
var mainImage = document.querySelector(".mainImage img");
var Gallery = document.getElementById("Gallery");
var mainSlide = document.querySelector(".mainSlide img");
var imagesContainer = document.querySelectorAll(".image");
var images = document.querySelectorAll(".image img");
var slidesContainer = document.querySelectorAll(".slide");
var slides = document.querySelectorAll(".slide img");
var closeGallery = document.querySelector(".closeGallery i");
var left = document.querySelector(".left i");
var right = document.querySelector(".right i");

var productTitle = document.querySelector(".productTitle");

function Selected(index) {
  for (let i = 0; i < images.length; i++) {
    if (i == index) {
      mainImage.src = `${images[index].src}`;
      mainSlide.src = `${slides[index].src}`;
      imagesContainer[index].classList.add("selected");
      slidesContainer[index].classList.add("selected");
      images[index].style.filter = "opacity(0.2)";
      slides[index].style.filter = "opacity(0.2)";
    } else {
      imagesContainer[i].classList.remove("selected");
      slidesContainer[i].classList.remove("selected");
      images[i].style.filter = "opacity(1)";
      slides[i].style.filter = "opacity(1)";
    }
  }
}
// -----------------------------------------------------------------------------

// Create a localStorage variable
localStorage.slideIndex = 0;
var slideINDEX = localStorage.slideIndex;
Selected(slideINDEX);

// Open or Show the Gallery Full Screen
productGallery.addEventListener("click", () => {
  Gallery.style.display = "flex";
});

// -----------------------------------------------------------------------------

images.forEach((image) => {
  image.addEventListener("click", () => {
    Gallery.style.display = "flex";
    var imagesList = Array.from(images);
    var imageIndex = imagesList.indexOf(image);
    slideINDEX = imageIndex;
    Selected(slideINDEX);
  });

  // Hover on an image
  image.addEventListener("mouseover", () => {
    image.style.filter = "opacity(0.2)";
  });
  image.addEventListener("mouseout", () => {
    Selected(slideINDEX);
  });
});

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    var slidesList = Array.from(slides);
    var slideIndex = slidesList.indexOf(slide);
    slideINDEX = slideIndex;
    Selected(slideINDEX);
  });
  // Hover on a slide
  slide.addEventListener("mouseover", () => {
    slide.style.filter = "opacity(0.2)";
  });
  slide.addEventListener("mouseout", () => {
    Selected(slideINDEX);
  });
});

// -----------------------------------------------------------------------------

left.addEventListener("click", () => {
  if (slideINDEX <= 0) {
    slideINDEX = slides.length - 1;
  } else {
    slideINDEX--;
  }
  Selected(slideINDEX);
});

right.addEventListener("click", () => {
  if (slideINDEX == slides.length - 1) {
    slideINDEX = 0;
  } else {
    slideINDEX++;
  }
  Selected(slideINDEX);
});

// -----------------------------------------------------------------------------

// Close or Hide the Gallery Full Screen
closeGallery.addEventListener("click", () => {
  Gallery.style.display = "none";
});

document.addEventListener("keyup", function () {
  evt = window.event;
  if (evt.key === "Escape") {
    Gallery.style.display = "none";
  }
});

// -----------------------------------------------------------------------------

// Menu icon & navigation bar
var menuIcon = document.querySelector(".menuIcon");
var navListBackground = document.querySelector(".navListBackground");
var navList = document.querySelector(".navList");
var closeMenu = document.querySelector(".closeMenu i");

function disableScorlling() {
  document.body.classList.add("stop-scrolling");
}

function enableScrolling() {
  document.body.classList.remove("stop-scrolling");
}

menuIcon.addEventListener("click", () => {
  navListBackground.style.display = "flex";
  disableScorlling();
});

closeMenu.addEventListener("click", () => {
  navListBackground.style.display = "none";
  enableScrolling();
});

// -----------------------------------------------------------------------------

var minus = document.querySelector(".minus");
var plus = document.querySelector(".plus");
var number = document.querySelector(".number");
var newPrice = document.querySelector(".newPrice");
var oldPrice = document.querySelector(".oldPrice");
var discount = document.querySelector(".discount");
var discountNumber = discount.innerHTML.split("%");
var price = oldPrice.innerHTML.split("$");
var discountedPrice = (price[1] * discountNumber[0]) / 100;

minus.onclick = () => {
  if (number.innerHTML > 1) {
    number.innerHTML--;
  }
  oldPrice.innerHTML = `$${price[1] * number.innerHTML}.00`;
  newPrice.innerHTML = `$${discountedPrice * number.innerHTML}.00`;
};

plus.onclick = () => {
  if (number.innerHTML < 5) {
    number.innerHTML++;
  }
  oldPrice.innerHTML = `$${price[1] * number.innerHTML}.00`;
  newPrice.innerHTML = `$${discountedPrice * number.innerHTML}.00`;
};

// -----------------------------------------------------------------------------

var cart = document.querySelector(".cart i");
var basket = document.querySelector(".basket");
var itemsInBasket = document.querySelector(".itemsInBasket");
var emptyBasket = document.querySelector(".emptyBasket");
var items = document.querySelector(".items");
var checkout = document.querySelector(".checkout");
var addToCart = document.querySelector(".addToCart");

cart.addEventListener("click", () => {
  var basketDisplay = window.getComputedStyle(basket).display;
  if (basketDisplay == "none") {
    basket.style.display = "flex";
  } else {
    basket.style.display = "none";
  }
});
// -------------------------------------------

addToCart.addEventListener("click", () => {
  emptyBasket.style.display = "none";
  checkout.style.display = "flex";
  items.style.minHeight = "50px";
  // basket.style.display = "flex";

  // create an item and add it to the basket
  var item = document.createElement("div");
  item.classList.add("item");

  var itemImage = document.createElement("div");
  itemImage.classList.add("itemImage");

  var img = document.createElement("img");
  img.src = "images/image-product-1.jpg";
  itemImage.appendChild(img);

  var itemDetail = document.createElement("div");
  itemDetail.classList.add("itemDetail");

  var itemTitle = document.createElement("div");
  itemTitle.classList.add("itemTitle");
  var title = document.createTextNode(`${productTitle.innerHTML}`);
  itemTitle.appendChild(title);
  itemDetail.appendChild(itemTitle);

  var price = document.createElement("div");
  price.classList.add("price");

  var itemPrice = document.createElement("div");
  itemPrice.classList.add("itemPrice");
  var itemPriceText = document.createTextNode(`$${discountedPrice}.00`);
  itemPrice.appendChild(itemPriceText);
  price.appendChild(itemPrice);

  var operation = document.createElement("div");
  operation.classList.add("operation");
  var operationText = document.createTextNode("x");
  operation.appendChild(operationText);
  price.appendChild(operation);

  var itemQuantity = document.createElement("div");
  itemQuantity.classList.add("itemQuantity");
  var itemQuantityText = document.createTextNode(`${number.innerHTML}`);
  itemQuantity.appendChild(itemQuantityText);
  price.appendChild(itemQuantity);

  var totalPrice = document.createElement("div");
  totalPrice.classList.add("totalPrice");
  var totalPriceText = document.createTextNode(`${newPrice.innerHTML}`);
  totalPrice.appendChild(totalPriceText);
  price.appendChild(totalPrice);
  itemDetail.appendChild(price);

  var deleteItem = document.createElement("div");
  deleteItem.classList.add("deleteItem");

  var deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa");
  deleteIcon.classList.add("fa-trash");
  deleteItem.appendChild(deleteIcon);

  item.appendChild(itemImage);
  item.appendChild(itemDetail);
  item.appendChild(deleteItem);

  items.appendChild(item);

  // -------------------------------------

  // Delete an item from the basket
  deleteItem.addEventListener("click", () => {
    item.remove();
    var itemesLenght = document.querySelectorAll(".item").length;
    itemsInBasket.innerHTML = itemesLenght;
    if (itemesLenght == 0) {
      itemsInBasket.style.display = "none";
      checkout.style.display = "none";
      emptyBasket.style.display = "flex";
      items.style.minHeight = "120px";
    }
  });

  // show the number of items in the basket
  var itemesLenght = document.querySelectorAll(".item").length;
  itemsInBasket.style.display = "flex";
  itemsInBasket.innerHTML = itemesLenght;
});

checkout.addEventListener("click", () => {
  basket.style.display = "none";
});

// -------------------------- End of the code ---------------------------------------------------