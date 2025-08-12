// ==================== Delete Box Function =========================
function initRemoveBox(cartItemSelector, removeBtnSelector, popupSelector, closeBtnSelector, cancelBtnSelector) {
    document.querySelectorAll(cartItemSelector).forEach(cartItem => {
        const removeBtn = cartItem.querySelector(removeBtnSelector);
        const popup = cartItem.querySelector(popupSelector);
        const closeBtn = cartItem.querySelector(closeBtnSelector);
        const cancelBtn = cartItem.querySelector(cancelBtnSelector);

        const hidePopup = () => popup.style.display = 'none';

        removeBtn.addEventListener('click', () => {
            popup.style.display = 'block';
        });

        closeBtn.addEventListener('click', hidePopup);
        cancelBtn.addEventListener('click', hidePopup);
    });
}

// ==================== Qty Dropdown Function =========================
function initQtyDropdown(dropdownSelector, toggleSelector, menuSelector, itemSelector) {
    document.querySelectorAll(dropdownSelector).forEach(dropdown => {
        const toggle = dropdown.querySelector(toggleSelector);
        const menu = dropdown.querySelector(menuSelector);

        toggle.addEventListener("click", () => {
            menu.classList.toggle("show");
            toggle.classList.toggle("active");
        });

        menu.querySelectorAll(itemSelector).forEach(item => {
            item.addEventListener("click", () => {
                toggle.innerHTML = `${item.textContent} <i class="fa-solid fa-angle-down"></i>`;
                menu.classList.remove("show");
                toggle.classList.remove("active");
            });
        });
    });
}

// ==================== Usage =========================
initRemoveBox('.cartProduct', '.removeBtn', '.deletePopup', '.closePopup', '.cancelBtn');
initQtyDropdown('.customDropdown', '.dropdownToggle', '.dropdownMenu', '.dropdownItem');
