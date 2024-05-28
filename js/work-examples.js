/* PORTFOLIO SECTION HOVER EFFECT */

const workExampleSection = document.querySelector("#work-examples");
const workExamples = document.querySelectorAll(".example");
workExamples.forEach((example) => {
  /* BACKGROUND EFFECT WHILE HOVERING ON EXAMPLE CARDS */

  example.style.border = "1px solid white";
  example.addEventListener("mouseover", () => {
    const exampleImg = example.querySelector("img").src;
    workExampleSection.style.background = `url(${exampleImg}) `;
    workExampleSection.style.backgroundSize = "cover";
    workExampleSection.style.backgroundPosition = "top center";
    workExampleSection.style.backgroundRepeat = "no-repeat";
    workExampleSection.style.backgroundAttachment = "fixed";
    example.style.border = "2px solid white";
    example.addEventListener("mouseout", () => {
      example.style.border = "2px solid transparent";
    });
  });

  /* IF USER WANTS TO VIEW TO WEBSITE (EXPANDED) */
  const workExampleExpanded = document.querySelector("#work-example-expanded");
  const workExampleBlur = document.querySelector(".work-example-blur");

  const viewBtn = example.querySelector("button");
  viewBtn.onclick = () => {
    workExampleExpanded.classList.add("expand");
    body.classList.add("hidden");
    workExampleBlur.classList.add("blur");
    const expandImage = workExampleExpanded.querySelector(
      ".expanded-container figure img"
    );
    expandImage.src = example.querySelector("img").src;
    const expandTitle = workExampleExpanded.querySelector(
      ".expanded-container figure figcaption p"
    );
    const expandURL = example.querySelector("span").innerText;
    expandTitle.textContent = `${
      example.querySelector("p").innerText
    } - ${expandURL}`;
    const closeBtn = workExampleExpanded.querySelector(".close-btn svg");
    closeBtn.onclick = () => {
      workExampleExpanded.classList.remove("expand");
      body.classList.remove("hidden");
      workExampleBlur.classList.remove("blur");
    };
  };
});
