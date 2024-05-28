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
      options.forEach((option) => {
        option.className = "";
      });
      option.className = "chosen";
    };
  });
};
