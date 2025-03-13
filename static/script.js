document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById('test');
    const sidebar = document.getElementById('sidebar');

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();
        sidebar.classList.toggle('open'); // Add or remove the "open" class
    }); 
});

document.getElementById('profile').onclick = (event) => {
    event.preventDefault(); // Prevents default link behavior
    const pop = document.getElementById('profile-info');
    pop.style.display = pop.style.display === 'none' || pop.style.display === '' ? 'block' : 'none';
};
