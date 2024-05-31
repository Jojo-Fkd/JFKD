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
});
