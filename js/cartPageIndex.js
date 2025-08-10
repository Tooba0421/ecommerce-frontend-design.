document.querySelectorAll('.cartProduct').forEach(cartItem => {
    const removeBtn = cartItem.querySelector('.removeBtn');
    const popup = cartItem.querySelector('.deletePopup');
    const closeBtn = cartItem.querySelector('.closePopup');
    const cancelBtn = cartItem.querySelector('.cancelBtn');

    removeBtn.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    cancelBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});

document.querySelectorAll(".customDropdown").forEach(dropdown => {
    const toggle = dropdown.querySelector(".dropdownToggle");
    const menu = dropdown.querySelector(".dropdownMenu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        toggle.classList.toggle("active");
    });

    menu.querySelectorAll(".dropdownItem").forEach(item => {
        item.addEventListener("click", () => {
            toggle.innerHTML = `${item.textContent} <i class="fa-solid fa-angle-down"></i>`;
            menu.classList.remove("show");
            toggle.classList.remove("active");
        });
    });
});
