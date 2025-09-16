document.addEventListener("DOMContentLoaded", () => {
  const checkBtn = document.getElementById('check-btn');
  const accessMessage = document.getElementById('access-message');
  const ageInput = document.getElementById('age-input');

  checkBtn.addEventListener('click', () => {
    const userAge = parseInt(ageInput.value, 10);

    if (!isNaN(userAge)) {
      if (userAge >= 18) {
        accessMessage.textContent = "Access Granted. Welcome!";
        accessMessage.style.color = 'green';
      } else {
        accessMessage.textContent = "Access Denied. You are too young.";
        accessMessage.style.color = 'red';
      }
    } else {
      accessMessage.textContent = "Please enter a valid age.";
      accessMessage.style.color = 'orange';
    }
  });

  // Optional: Allow pressing Enter to trigger check
  ageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      checkBtn.click();
    }
  });
});
