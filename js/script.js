document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('action-button');
    const message = document.getElementById('welcome-message');

    button.addEventListener('click', () => {
       
        message.textContent = "Success! JavaScript is fully functional on the deployed site!";
        button.style.backgroundColor = '#ffc107';
        button.textContent = 'Verified';
    });
});