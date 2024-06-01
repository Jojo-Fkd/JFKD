const body = document.querySelector("body");
const loading = document.querySelector(".loading-page");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    body.style.overflow = "auto";
    console.log("loaded");
    loading.classList.remove("load");
  }, 500);
});

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

      const loading = popupContainer.querySelector(".loading");
      const becomeClientPopup = popupContainer.querySelector(".request");

      const form = popupContainer.querySelector(".request form");
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        becomeClientPopup.style.display = "none";
        loading.classList.add("load");

        let params = {
          from_name: form.querySelector("#name-establishment").value,
          from_email: form.querySelector("#email").value,
          from_type: option.innerHTML,
        };

        emailjs
          .send("service_7z6ushb", "template_nvw89rq", params)
          .then(() => {
            loading.classList.remove("load");
            const successPopup =
              popupContainer.querySelector(".request-success");
            successPopup.classList.add("success");
            successPopup.querySelector("button").onclick = () => {
              location.reload();
            };
          })
          .catch(() => {
            loading.classList.remove("load");
            alert(
              "It seems like there was an issue submitting your form. Please try again"
            );
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
  navMobile.querySelectorAll("li").forEach((link) => {
    link.onclick = () => {
      dropIcon.classList.remove("active");
      navMobile.classList.remove("active");
      body.classList.remove("hidden");
    };
  });
};
