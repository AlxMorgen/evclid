// tabs

document.querySelectorAll(".step-btn-item").forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const path = event.currentTarget.dataset.path;
    console.log(path);
    document
      .querySelectorAll(".how-it-work-step")
      .forEach(function (stepContent) {
        stepContent.classList.remove("active-step");
      });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("active-step");
  });
});

// burger

document.querySelector(".burger").addEventListener("click", (event) => {
  document.querySelector(".nav-link").classList.toggle("open-item");
  document.querySelector(".burger-close").classList.toggle("open-item");
  document.querySelector(".burger-btn").classList.toggle("open-item");
});

document.querySelectorAll(".faq-open").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("rotate");
    if (event.currentTarget.parentNode.previousElementSibling.open != true) {
      event.currentTarget.parentNode.previousElementSibling.open = true;
    } else {
      event.currentTarget.parentNode.previousElementSibling.open = false;
    }

    console.log(event.currentTarget.parentNode.previousElementSibling);
  });
});
