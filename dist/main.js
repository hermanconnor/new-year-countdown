"use strict";
const initApp = () => {
    const year = document.getElementById('year');
    const loading = document.getElementById('loading');
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const countdown = document.getElementById('countdown');
    const currentYear = new Date().getFullYear();
    const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00 `);
    // Set New Year In Background
    year.innerText = `${currentYear + 1}`;
    const updateCountdown = () => {
        const currentTime = new Date();
        const diff = +newYearTime - +currentTime;
        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const hr = Math.floor(diff / 1000 / 60 / 60) % 24;
        const min = Math.floor(diff / 1000 / 60) % 60;
        const sec = Math.floor(diff / 1000) % 60;
        days.innerText = d.toString();
        hours.innerText = `${hr}`.padStart(2, '0');
        minutes.innerText = `${min}`.padStart(2, '0');
        seconds.innerText = `${sec}`.padStart(2, '0');
    };
    setInterval(updateCountdown, 1000);
    // Remove Spinner
    setTimeout(() => {
        loading.remove();
        countdown.style.display = 'flex';
    }, 1000);
};
document.addEventListener('DOMContentLoaded', initApp);
