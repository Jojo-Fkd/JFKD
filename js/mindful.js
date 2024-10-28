const scriptURL = `https://script.google.com/macros/s/AKfycbxs7QE1j1U6vaOJyX-NGxWTpR966l0tRicOjop4tW8Xxw7SQJLLR5I7Q6stCZP029Q7ow/exec`;

const popupBg = document.querySelector(".popup-bg");
const confirmationPopup = popupBg.querySelector(".confirmation");
const loading = popupBg.querySelector(".loading");
const body = document.querySelector("body");

const form = document.getElementById("email-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submit = () => {
    popupBg.classList.add("active");
    loading.classList.add("active");
    body.style.overFlow = "hidden";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => {
        loading.classList.remove("active");
        confirmationPopup.classList.add("active");
        confirmationPopup.querySelector("button").onclick = () => {
          location.reload();
        };
      })
      .catch(() => {
        loading.classList.remove("active");
        popupBg.classList.add("active");
        confirmationPopup.classList.add("active");
        confirmationPopup.querySelector("h3").textContent = "Sorry:( Try Again";
        confirmationPopup.querySelector("p").textContent = "";
        confirmationPopup.querySelector("button").textContent = "Try Again";
        confirmationPopup.querySelector("button").onclick = () => {
          submit();
        };
      });
  };
  submit();
});
