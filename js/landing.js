const body = document.querySelector("body");

/* ON SCROLL EFFECTS */

const entries = document.querySelectorAll(".hidden");

const obserever = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => obserever.observe(el));

/* BECOME A CLIENT */

const becomeClientBtn = document.querySelector("header nav button");
const popupContainer = document.querySelector(".popup-container");

becomeClientBtn.onclick = () => {
  popupContainer.classList.add("active");
  body.classList.add("hidden");
  const closeBtn = popupContainer.querySelector(".request .close-btn");
  closeBtn.onclick = () => {
    popupContainer.classList.remove("active");
    body.classList.remove("hidden");
  };

  // CLIENT HAS TO PICK WHAT TYPE OF WEBSITE THEY WANT

  const options = popupContainer.querySelectorAll(
    ".request .website-type .type-list li"
  );
  options.forEach((option) => {
    option.onclick = () => {
      const formBtn = popupContainer.querySelector(".request form button");
      formBtn.disabled = false;
      options.forEach((option) => {
        option.className = "";
      });
      option.className = "chosen";

      // SUBMISSION OF REQUEST

      const form = popupContainer.querySelector(".request form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        let params = {
          from_name: form.querySelector("#name-establishment").value,
          from_email: form.querySelector("#email").value,
          from_type: option.innerHTML,
        };

        emailjs
          .send("service_7z6ushb", "template_nvw89rq", params)
          .then(() => {
            popupContainer.querySelector(".request").style.display = "none";
            const successPopup =
              popupContainer.querySelector(".request-success");
            successPopup.classList.add("success");
            successPopup.querySelector("button").onclick = () => {
              location.reload();
            };
          })
          .catch(() => {
            alert("Failed, try again");
            location.reload();
          });
      });
    };
  });
};

/* MOBILE NAVIGATION ACTIVATION */

const dropIcon = document.querySelector(".drop-icon");
const navMobile = document.querySelector(".nav-mobile");

dropIcon.onclick = () => {
  dropIcon.classList.toggle("active");
  navMobile.classList.toggle("active");
  body.classList.toggle("hidden");
};
