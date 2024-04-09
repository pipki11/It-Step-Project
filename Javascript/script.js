const userBtn = document.querySelector(".fa-user");
const loginInPage = document.querySelector(".login");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");

userBtn.addEventListener("click", function () {
  loginInPage.classList.toggle("loginShow");
});

signIn.addEventListener("click", function () {
  window.location.href = "signin.html";
});

signUp.addEventListener("click", function () {
  window.location.href = "signup.html";
});
