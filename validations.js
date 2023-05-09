const form = document.getElementById("signUpForm");
const password1Input = document.querySelector("#pass1");
const password2Input = document.querySelector("#pass2");
let doesMatch;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!doesMatch) {
    alert("Passwords do not match");
    password1Input.classList.add("error");
    password2Input.classList.add("error");
    return;
  }

  // If the passwords match, submit the form
  alert("You are now signed in!");
  form.submit();
});

password2Input.addEventListener("input", () => {
  if (password1Input.value !== "") {
    if (password1Input.value !== password2Input.value) {
      doesMatch = false;
    } else {
      doesMatch = true;
    }
  }
});
