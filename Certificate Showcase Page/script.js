function openModal(event, src) {
  event.preventDefault(); 
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


function filterCertificates() {
  const selectedCategory = document.getElementById("categoryFilter").value;
  const cards = document.querySelectorAll(".certificate-card");

  cards.forEach(card => {
    const cardCategory = card.getAttribute("data-category");
    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}


