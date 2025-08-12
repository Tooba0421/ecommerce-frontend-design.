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

// =============== Tabs switching function =================
function initTabs(tabSelector, contentSelector) {
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}



initLikeButtons('.saveHeart', '.saveBtn', '.notSaveBtn');
initTabs('.tab', '.tabContent');

