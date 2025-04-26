document.addEventListener('mousemove', (e) => {
    // Update cursor position
    const cursor = document.querySelector('.cursor');
    // const cursors = document.querySelectorAll('.cursor');
    // cursors.forEach(cursor => {
    //     cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`; 
    // });
    cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;

    // Create smoke particle
    const smoke = document.createElement('div');
    smoke.className = 'smoke';
    smoke.style.left = `${e.clientX}px`;
    smoke.style.top = `${e.clientY}px`;
    


    // Set random values for animation
    const randomX = (Math.random() - 0.5) * 100;
     // Random between -50 and 50
    const randomY = (Math.random() - 0.5) * 100;
    // const randomZ = (Math.random() - 0.5) * 10;

    // smoke.style.setProperty('--random-x', `${randomX}px`);
    // smoke.style.setProperty('--random-y', `${randomY}px`);
    // smoke.style.setProperty('--random-z', `${randomZ}px`);


    smoke.style.setProperty('--random-x', randomX);
    smoke.style.setProperty('--random-y', randomY);
    // smoke.style.setProperty('--random-z', randomZ);



    // Randomize size for variety
    const size = Math.random() * 30 + 40; // Between 5px and 15px
    smoke.style.width = `${size}px`;
    smoke.style.height = `${size}px`;

    document.body.appendChild(smoke);

    // Remove smoke after animation
    smoke.addEventListener('animationend', () => {
        smoke.remove();
    });
});