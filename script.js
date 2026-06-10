// Modal Elements
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-btn");

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

// Project Filters
const filterButtons = document.querySelectorAll(".filter-btn");
const projects = document.querySelectorAll(".project");


// ======================
// Modal Functions
// ======================

function openModal(imageSrc) {
    modal.style.display = "flex";
    modalImage.src = imageSrc;
}

function closeModal() {
    modal.style.display = "none";
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});


// ======================
// Theme Toggle
// ======================

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeToggle.textContent =
        document.body.classList.contains("light-mode")
            ? "☀️"
            : "🌙";
});


// ======================
// Project Filtering
// ======================

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {

        filterButtons.forEach((btn) =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        projects.forEach((project) => {
            const visible =
                filter === "all" ||
                project.dataset.category.includes(filter);

            project.style.display = visible ? "block" : "none";
        });
    });
});