const body = document.querySelector("body");
const loading = document.querySelector(".loading-page");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    body.style.overflow = "auto";
    console.log("loaded");
    loading.classList.remove("load");
  }, 1000);
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

/* CLIENT WANTS TO READ MORE ON THE SERVICE CARDS */

const serviceCardBtns = document.querySelectorAll(".services .card button");
const servicePopup = document.querySelector(".services-popup");
const workProcess = servicePopup.querySelector("#work-process");

serviceCardBtns.forEach((btn) => {
  btn.onclick = () => {
    servicePopup.classList.add("active");

    const topic = btn.previousElementSibling.previousElementSibling;
    console.log(topic);
    if (topic.innerText === "Design & Development") {
      workProcess.innerHTML = `
         <article class="process-head">
            <h3>How We Work ~ Web Design & Development</h3>
            <div class="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="var(--BGCOLOR)"
                  stroke-width="2"
                  d="m3 3l18 18M3 21L21 3"
                />
              </svg>
            </div>
          </article>
          <article class="process-content">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="var(--FONTCOLOR)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11"
                  color="currentColor"
                />
              </svg>
              We can get connected either when you start a chat with us or you
              become a client.
            </p>
            <ol>
              <li>We discuss the purpose of your website.</li>
              <li>Identify the scope of your website.</li>
              <li>Discuss pricing</li>
              <li>
                We start web design process and we update you every step of the
                way
              </li>
              <li>Once you're satisfied, we start development</li>
              <li>finally, we launch your site</li>
            </ol>
          </article>
      `;
      workProcess.querySelector(".close-btn").onclick = () => {
        servicePopup.classList.remove("active");
      };
    } else if (topic.innerText === "Re-design") {
      workProcess.innerHTML = `
         <article class="process-head">
            <h3>How We Work ~ Web Re-design</h3>
            <div class="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="var(--BGCOLOR)"
                  stroke-width="2"
                  d="m3 3l18 18M3 21L21 3"
                />
              </svg>
            </div>
          </article>
          <article class="process-content">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="var(--FONTCOLOR)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 13.333S4.5 14 6.5 17c0 0 .285-.48.821-1.247M17 6c-2.291 1.146-4.688 3.552-6.612 5.822M8 13.333S9.5 14 11.5 17c0 0 5.5-8.5 10.5-11"
                  color="currentColor"
                />
              </svg>
              We can get connected either when you start a chat with us or you
              become a client.
            </p>
            <ol>
              <li>We discuss the purpose of your website.</li>
              <li>We review the website and identify your issues with it.</li>
              <li>Discuss pricing</li>
              <li>
                We take the aspects of the design you liked then implement it on your new design
              </li>
              <li>Once you're satisfied, we start development</li>
              <li>finally, we re-launch your site</li>
            </ol>
          </article>
      `;
      workProcess.querySelector(".close-btn").onclick = () => {
        servicePopup.classList.remove("active");
      };
    }
  };
});

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
