.querySelector("form")
.addEventListener("submit",handleSubmit);

const submitSuccess = document.querySelector('.submit-success')
const submitError = document.querySelector('.submit-error')

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("contact-form");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(() => { submitSuccess.setAttribute('data-submit', success); })
    .catch((error) => { submitError.setAttribute('data-submit', error) });
};