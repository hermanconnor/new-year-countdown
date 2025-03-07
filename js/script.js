'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');
  const year = document.getElementById('year');
  const countdownEl = document.getElementById('countdown');
  const loading = document.getElementById('loading');

  // Set the date we're counting down to (next New Year)
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const countDownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime();

  // Set New Year In Background
  year.innerText = nextYear;

  // Add leading zeros to ensure consistent width
  const formatNumber = (num) => String(num).padStart(2, '0');

  const updateCountdown = () => {
    // Get current date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    daysEl.textContent = formatNumber(days);
    hoursEl.textContent = formatNumber(hours);
    minutesEl.textContent = formatNumber(minutes);
    secondsEl.textContent = formatNumber(seconds);

    // Get the full ISO 8601 date/time format
    const targetDateTime = new Date(
      `Jan 1, ${nextYear} 00:00:00`,
    ).toISOString();

    // Set datetime attributes with the exact New Year timestamp
    daysEl.setAttribute('datetime', targetDateTime);
    hoursEl.setAttribute('datetime', targetDateTime);
    minutesEl.setAttribute('datetime', targetDateTime);
    secondsEl.setAttribute('datetime', targetDateTime);
  };

  setInterval(updateCountdown, 1000);

  // Remove Spinner
  setTimeout(() => {
    loading.remove();
    countdownEl.style.display = 'flex';
  }, 1000);
});
