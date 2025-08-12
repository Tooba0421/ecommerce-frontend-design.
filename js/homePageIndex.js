// ===================Category Dropdown =======================
function initCategoryDropdown(toggleId, menuId) {
    const categoryToggle = document.getElementById(toggleId);
    const categoryMenu = document.getElementById(menuId);

    if (!categoryToggle || !categoryMenu) {
        console.error("Category toggle or menu not found.");
        return;
    }

    // Toggle dropdown on click
    categoryToggle.addEventListener("click", function () {
        categoryMenu.classList.toggle("show");
    });

    // Close dropdown if clicked outside
    document.addEventListener("click", function (event) {
        if (!categoryToggle.contains(event.target) && !categoryMenu.contains(event.target)) {
            categoryMenu.classList.remove("show");
        }
    });
}

initCategoryDropdown("categoryToggle", "categoryMenu");
