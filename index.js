const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

setTimeout(function () {
  modal.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("modal-btns-reverse");
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const consentFormData = new FormData(consentForm);
  const fullName = consentFormData.get("fullName");

  modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">Processing...</p>
    </div>`;

  setTimeout(function () {
    document.getElementById("upload-text").innerText = `
        Almost there...`;
  }, 1500);

  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
        <h2>Thanks <span class="modal-display-name">${fullName}</span>! </h2>
        <p>We will contact you soon.</p>
        <div class="thanks-gif">
            <img src="images/thanks.gif">
        </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});
