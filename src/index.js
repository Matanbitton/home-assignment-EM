import "./styles.css";
import Icon from "./tv.jpg";

const component = (() => {
  const tvImg = new Image();
  tvImg.src = Icon;
  const tvHtml = document.querySelector(".tv-icon");
  tvHtml.append(tvImg);
})();
