document.addEventListener('DOMContentLoaded', () => {
    const numberOfStars = 500; // Number of stars
    const starsContainer = document.querySelector('.stars');

    // Function to create a star element
    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;
        star.style.animationDuration = `${Math.random() * 5 + 3}s`;
        star.classList.add('star-fall');
        starsContainer.appendChild(star);
    }

    // Create multiple stars
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
});
