const signBtn = document.querySelector(".fa-user");
const loginInPage = document.querySelector(".login");

signBtn.addEventListener("click", function () {
  loginInPage.classList.toggle("loginShow");
});
