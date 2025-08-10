const categoryToggle = document.getElementById("categoryToggle");
const categoryMenu = document.getElementById("categoryMenu");

categoryToggle.addEventListener("click", function () {
    categoryMenu.classList.toggle("show");
});

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    if (!categoryToggle.contains(event.target)) {
        categoryMenu.classList.remove("show");
    }
});
