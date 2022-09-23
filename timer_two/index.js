const dayHello = document.getElementById('hello');
const day = document.getElementById('day');
let time = document.getElementById('time');
let newYear = document.getElementById('newYear');
const weekDays = [
    'Воскресенье',
    'Понедельник',
    'Вториник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
let date = new Date();

const sayDate = () => {
    if (date.getHours() > 6 && date.getHours() <= 12) {
        dayHello.textContent = 'Доброе утро!';
    } else if (date.getHours() > 12 && date.getHours() <= 18) {
        dayHello.textContent = 'Добрый день!';
    } else if (date.getHours() > 18 && date.getHours() <= 24) {
        dayHello.textContent = 'Добрый вечер!';
    } else {
        dayHello.textContent = 'Доброй ночи!';
    }

    weekDays.forEach((item) => {
        let value = date.getDay();
        item = value;
        day.textContent = weekDays[item];
    });

    time.textContent = date.toLocaleTimeString('en');

    let dateNow = Date.now();
    let dateYear = Date.parse('1 january 2023');

    let timeRemaining = (dateYear - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);

    newYear.textContent = days + ' дней!';

    console.log(dateNow);
    console.log(dateYear);
    console.log(timeRemaining);
    console.log(days);
};

sayDate();

// console.log(date);

// console.log('Год ' + date.getFullYear());
// console.log('месяц ' + (date.getMonth() + 1));
// console.log('число месяца ' + date.getDate());
// console.log('число недели ' + date.getDay());

// console.log('часы ' + date.getHours());
// console.log('минуты ' + date.getMinutes());
// console.log('секунды ' + date.getSeconds());
// console.log('милисекунды ' + date.getMilliseconds());
