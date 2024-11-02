// let wheel = document.querySelector('.wheel');
// let spinBtn = document.querySelector('.spinBtn');
// let value = Math.ceil(Math.random() * 3600);
//
// spinBtn.onclick = function() {
//     wheel.style.transform = "rotate(" + value + "deg)";
//     value += Math.ceil(Math.random() * 3600);
// };


document.addEventListener("DOMContentLoaded", () => {
    const prizes = [
        "Rating your dick", "BJ video", "Personal greeting",
        "10 sexy pics", "5 hot videos", "Audio with moans",
        "Mystery box", "50$ bundle", "Live surprise",
        "100$ bundle", "Live pic", "Strip video"
    ];

    const spinBtn = document.querySelector('.spinBtn');
    const prizeDisplay = document.getElementById('prizeDisplay');
    const wheel = document.querySelector('.wheel');

    let isSpun = localStorage.getItem('isSpun');

    // Перевіряємо, чи вже обертали колесо
    if (isSpun === 'true') {
        spinBtn.disabled = true;
        prizeDisplay.innerText = localStorage.getItem('wonPrize') || "None";
        spinBtn.classList.add('disabled'); // Додатковий стиль для неактивної кнопки
    } else {
        spinBtn.addEventListener('click', spinWheel);
    }

    function spinWheel() {
        console.log("Кнопка натиснута, обертання починається!"); // Додайте це для дебагу
        const value = Math.ceil(Math.random() * 3600); // Випадковий кут обертання
        const finalDegree = value % 360;
        const prizeIndex = Math.floor(finalDegree / (360 / prizes.length));
        const wonPrize = prizes[prizeIndex];

        // Обертання колеса
        wheel.style.transition = 'transform 4s ease-out';
        wheel.style.transform = `rotate(${value}deg)`;

        // Заборона повторного обертання
        spinBtn.disabled = true;
        spinBtn.classList.add('disabled');

        // Збереження результату в localStorage після завершення обертання
        localStorage.setItem('isSpun', 'true');
        localStorage.setItem('wonPrize', wonPrize);

        // Відображення результату після завершення анімації
        setTimeout(() => {
            prizeDisplay.innerText = wonPrize; // Додаємо виграш у елемент з id "prizeDisplay"
        }, 4000); // Час, що співпадає з тривалістю анімації
    }
});