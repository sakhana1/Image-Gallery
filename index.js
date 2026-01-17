// modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("close");
const downloadBtn = document.getElementById("downloadBtn");

// open modal on any gallery image click
document.querySelectorAll(".gallery .image").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    downloadBtn.href = img.src;
  });
});

// close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// close on background click
modal.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});
