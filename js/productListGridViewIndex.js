// =================== PRICE RANGE ===================
function initPriceRange(minRangeId, maxRangeId, minInputId, maxInputId, sliderId) {
    const minRange = document.getElementById(minRangeId);
    const maxRange = document.getElementById(maxRangeId);
    const minInput = document.getElementById(minInputId);
    const maxInput = document.getElementById(maxInputId);
    const sliderRange = document.getElementById(sliderId);

    const updateSliderRange = () => {
        const minVal = parseInt(minRange.value);
        const maxVal = parseInt(maxRange.value);
        const percent1 = (minVal / 1000000) * 100;
        const percent2 = (maxVal / 1000000) * 100;
        sliderRange.style.left = percent1 + "%";
        sliderRange.style.width = (percent2 - percent1) + "%";
    };

    minRange.addEventListener('input', () => {
        if (parseInt(minRange.value) > parseInt(maxRange.value)) {
            minRange.value = maxRange.value;
        }
        minInput.value = minRange.value;
        updateSliderRange();
    });

    maxRange.addEventListener('input', () => {
        if (parseInt(maxRange.value) < parseInt(minRange.value)) {
            maxRange.value = minRange.value;
        }
        maxInput.value = maxRange.value;
        updateSliderRange();
    });

    window.applyRange = function () {
        let min = parseInt(minInput.value);
        let max = parseInt(maxInput.value);
        if (min > max) [min, max] = [max, min];
        minRange.value = min;
        maxRange.value = max;
        updateSliderRange();
    };

    updateSliderRange(); // initialize
}

// =================== SIDEBAR TOGGLE ===================
function initSidebarToggle(selector) {
    document.querySelectorAll(selector).forEach(heading => {
        heading.addEventListener('click', () => {
            heading.parentElement.classList.toggle('collapsed');
        });
    });
}

// =================== DISPLAY LIST SECTION ===================
function renderListSection(containerSelector, items) {
    const container = document.querySelector(containerSelector);
    let html = '';
    items.forEach(item => {
        html += `
        <div class="listProduct rounded">
            <a href="productDetailPage.html"><img src="${item.image}" alt="headphone"></a>
            <div class="detail">
                <p class="productName">${item.productName}</p>
                <div class="productPriceRating">
                    <div class="productPrice">
                        <strong>${item.price}</strong>
                        <span>${item.oldPrice}</span>
                    </div>
                    <div class="productRating">
                        <span class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>${item.ratingValue}</span>
                        </span>
                        <img src="assets/Dot.png" alt="dot" class="dot">
                        <span class="order">${item.order}</span>
                        <img src="assets/Dot.png" alt="dot" class="dot">
                        <span class="shipping">${item.shipping}</span>
                    </div>
                    <div class="productDetail">
                        <p>${item.detail}</p>
                        <a href="productDetailPage.html" class="seeAll rounded">View details</a>
                    </div>
                </div>
            </div>
            <div class="heartWrapper">
                <i class="fa-regular fa-heart like rounded"></i>
                <i class="fa-solid fa-heart notLike rounded"></i>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// =================== DISPLAY GRID SECTION ===================
function renderGridSection(containerSelector, items) {
    const container = document.querySelector(containerSelector);
    let html = '';
    items.forEach(item => {
        html += `
        <div class="gridProduct rounded">
            <a href="productDetailPage.html"><img src="${item.image}" alt="mobile"></a>
            <div class="gridDetail">
                <div class="productPriceRating">
                    <div class="productPrice">
                        <strong>${item.price}</strong>
                        <span>${item.oldPrice}</span>
                    </div>
                    <div class="productRating">
                        <span class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>${item.ratingValue}</span>
                        </span>
                    </div>
                    <p class="gridProductName">${item.productName}</p>
                </div>
            </div>
            <div class="gridHeartWrapper">
                <i class="fa-regular fa-heart gridLike rounded"></i>
                <i class="fa-solid fa-heart gridNotLike rounded"></i>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

// =================== LIKE BUTTON ===================
function initLikeButtons(wrapperSelector, likeSelector, notLikeSelector) {
    document.querySelectorAll(wrapperSelector).forEach(wrapper => {
        const like = wrapper.querySelector(likeSelector);
        const notLike = wrapper.querySelector(notLikeSelector);

        like.addEventListener('click', () => {
            like.style.display = 'none';
            notLike.style.display = 'inline-block';
        });

        notLike.addEventListener('click', () => {
            notLike.style.display = 'none';
            like.style.display = 'inline-block';
        });
    });
}

// =================== LIST / GRID SWITCH ===================
function initListGridSwitch(listBtnId, gridBtnId, listSectionSelector, gridSectionSelector) {
    const listBtn = document.getElementById(listBtnId);
    const gridBtn = document.getElementById(gridBtnId);
    const listSection = document.querySelector(listSectionSelector);
    const gridSection = document.querySelector(gridSectionSelector);

    listBtn.addEventListener('click', () => {
        listSection.style.display = 'flex';
        gridSection.style.display = 'none';
    });

    gridBtn.addEventListener('click', () => {
        gridSection.style.display = 'flex';
        listSection.style.display = 'none';
    });
}

// =================== DROPDOWN TOGGLE ===================
function initDropdownToggle(toggleSelector, menuId) {
    const toggle = document.querySelector(toggleSelector);
    const menu = document.getElementById(menuId);

    toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        toggle.classList.toggle("active");
    });
}

// =================== INIT ALL ===================
function initPage() {
    initPriceRange('minRange', 'maxRange', 'minInput', 'maxInput', 'sliderRange');
    initSidebarToggle('.categoryHeading');
    renderListSection('.listSection', item);
    renderGridSection('.gridSection', griditem);
    initLikeButtons('.heartWrapper', '.like', '.notLike');
    initLikeButtons('.gridHeartWrapper', '.gridLike', '.gridNotLike');
    initListGridSwitch('listViewBtn', 'gridViewBtn', '.listSection', '.gridSection');
    initDropdownToggle("#showDropdown .dropdownToggle", "showMenu");
}

// Call once DOM is ready
document.addEventListener("DOMContentLoaded", initPage);
