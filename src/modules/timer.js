const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSecond = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        // let days = Math.floor(timeRemaining / 60 / 60 / 24);

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        // console.log(days);

        return {
            timeRemaining,
            hours,
            minutes,
            seconds,
        };
    };

    const addZero = (num) => {
        if (num > 0 && num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = addZero(getTime.hours);
        timerMinutes.textContent = addZero(getTime.minutes);
        timerSecond.textContent = addZero(getTime.seconds);

        if (getTime.timeRemaining > 0) {
            // setTimeOut(updateClock, 1000);
            console.log('hellow');
        } else if (getTime.timeRemaining <= 0) {
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSecond.textContent = '00';
        }
    };
    setInterval(updateClock, 1000);
    // updateClock();

    // setInterval(countTimer, 1000, '22 september 2022');
};

export default timer;
