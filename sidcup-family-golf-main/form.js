const emi = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementsByClassName("btn")[0];

button.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = emi.value;
  const passwordValue = pass.value;
  if (
    emailValue === "tayebkhan1155@gmail.com" &&
    passwordValue === "t@yebkh@n2025"
  ) {
    alert("Successful! Congratulations.");
    window.location.href = "index-2.html";
  } else {
    alert("Sorry, invalid.");
  }
});
