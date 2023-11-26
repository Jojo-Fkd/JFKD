/* FAQ SECTION FUNCTIONALITY */

const caretBtns = document.querySelectorAll(".faq_caret");

caretBtns.forEach((caret) => {
  caret.onclick = () => {
    const faqArticle = caret.parentElement.parentElement;
    faqArticle.classList.toggle("answer");
  };
});
