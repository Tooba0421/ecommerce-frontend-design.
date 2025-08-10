document.querySelectorAll('.saveHeart').forEach(wrapper => {
    const saveBtn = wrapper.querySelector('.saveBtn');
    const notSaveBtn = wrapper.querySelector('.notSaveBtn');

    saveBtn.addEventListener('click', () => {
        saveBtn.style.display = 'none';
        notSaveBtn.style.display = 'inline-block';
    });

    notSaveBtn.addEventListener('click', () => {
        notSaveBtn.style.display = 'none';
        saveBtn.style.display = 'inline-block';
    });
});

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tabContent');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});