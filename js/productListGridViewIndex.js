const minRange = document.getElementById('minRange');
const maxRange = document.getElementById('maxRange');
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const sliderRange = document.getElementById('sliderRange');

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

function applyRange() {
    let min = parseInt(minInput.value);
    let max = parseInt(maxInput.value);

    if (min > max) [min, max] = [max, min]; // Swap if wrong order

    minRange.value = min;
    maxRange.value = max;

    updateSliderRange();
}

updateSliderRange(); // initialize


document.querySelectorAll('.categoryHeading').forEach(heading => {
    heading.addEventListener('click', () => {
        const option = heading.parentElement;
        option.classList.toggle('collapsed');
    });
});



let listSection = document.querySelector('.listSection');
let innerHtml = '';
item.forEach(item => {
    innerHtml += `
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
                        </div>`
});
listSection.innerHTML = innerHtml;

let gridSection = document.querySelector('.gridSection');
let gridinnerHtml = '';
griditem.forEach(griditem => {
    gridinnerHtml += `
                        <div class="gridProduct rounded">
                        <a href="productDetailPage.html"><img src="${griditem.image}" alt="mobile"></a>
                        <div class="gridDetail">
                        <div class="productPriceRating">
                        <div class="productPrice">
                        <strong>${griditem.price}</strong>
                        <span>${griditem.oldPrice}</span>
                            </div>
                            <div class="productRating">
                            <span class="star">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <span>${griditem.ratingValue}</span>
                            </span>
                            </div>
                            <p class="gridProductName">${griditem.productName}</p>
                            </div>
                            </div>
                            <div class="gridHeartWrapper">
                            <i class="fa-regular fa-heart gridLike rounded"></i>
                            <i class="fa-solid fa-heart gridNotLike rounded"></i>
                            </div>
                            </div>`
});
gridSection.innerHTML = gridinnerHtml;

document.querySelectorAll('.heartWrapper').forEach(wrapper => {
    const like = wrapper.querySelector('.like');
    const notLike = wrapper.querySelector('.notLike');

    like.addEventListener('click', () => {
        like.style.display = 'none';
        notLike.style.display = 'inline-block';
    });

    notLike.addEventListener('click', () => {
        notLike.style.display = 'none';
        like.style.display = 'inline-block';
    });
});

document.querySelectorAll('.gridHeartWrapper').forEach(wrapper => {
    const gridLike = wrapper.querySelector('.gridLike');
    const gridNotLike = wrapper.querySelector('.gridNotLike');

    gridLike.addEventListener('click', () => {
        gridLike.style.display = 'none';
        gridNotLike.style.display = 'inline-block';
    });

    gridNotLike.addEventListener('click', () => {
        gridNotLike.style.display = 'none';
        gridLike.style.display = 'inline-block';
    });
});


const listViewBtn = document.getElementById('listViewBtn');
const gridViewBtn = document.getElementById('gridViewBtn');

const listSectionElement = document.querySelector('.listSection');
const gridSectionElement = document.querySelector('.gridSection');

listViewBtn.addEventListener('click', () => {
    listSectionElement.style.display = 'flex';
    gridSectionElement.style.display = 'none';
});

gridViewBtn.addEventListener('click', () => {
    gridSectionElement.style.display = 'flex';
    listSectionElement.style.display = 'none';
});


const dropdownToggle = document.querySelector("#showDropdown .dropdownToggle");
const dropdownMenu = document.getElementById("showMenu");

dropdownToggle.addEventListener("click", () => {
    dropdownMenu.classList.toggle("show");
    dropdownToggle.classList.toggle("active");
});

