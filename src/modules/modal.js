const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

    function fadeIn(el, speed) {
        const clientWidth = document.documentElement.clientWidth;
        let step = 1 / speed;
        let interval = setInterval(function () {
            if (+el.style.opacity >= 1) clearInterval(interval);

            el.style.opacity = +modal.style.opacity + step;
        }, speed / 1000);

        if (clientWidth < 768) {
            modal.style.opacity = '1';
        }
    }

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            modal.style.opacity = '0';
            fadeIn(modal, 300);
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
};

export default modal;
