import "./styles.css";
import Icon from "./tv.jpg";

const component = (() => {
  const tvImg = new Image();
  tvImg.src = Icon;
  const tvHtml = document.querySelector(".tv-icon");
  tvHtml.append(tvImg);

  /* const tvDescription = document.querySelector(".product-description");
  const productRating = document.querySelector(".product-rating");
  const productContainer = document.querySelector(".product-container");

  console.log(tvDescription, productRating, productContainer);

  let productContainerArr = Array.from(productContainer);
  console.log(productContainerArr);

  console.log(productContainer.style.width);

  productContainer.removeChild(productRating);
  productContainerArr = productContainerArr.filter(
    (child) => !child.classList.includes("product-rating")
  );

  console.log(productContainerArr); */
})();
