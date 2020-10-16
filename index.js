// Import stylesheets
import "./style.css";
document.cookie = "username=John Doe";
const button = document.querySelector("button");
const div = document.querySelector("div.cookie");
// const divM = document.querySelector("div.monster");
const storage = localStorage;
console.log(button, div);

const checkCookies = () => {
  if (storage.getItem("cookie")) {
    div.style.display = "none";
    // divM.style.display = "none";
  }
};
button.addEventListener("click", () => {
  storage.setItem("cookie", true);
  checkCookies();
});
checkCookies();
