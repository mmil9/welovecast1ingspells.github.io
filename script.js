const stickerContainer = document.getElementById('sticker-container');
const stickerDuration = 5000; // Trajanje stikera u milisekundama (u ovom primeru, 5 sekundi)
const numberOfStickers = 3; // Broj stikera koje želite prikazati

function getRandomPosition() {
    const randomTop = Math.random() * 20 + 40; // Nasumična vrednost od 40 do 60
    const randomLeft = Math.random() * 20 + 40; // Nasumična vrednost od 40 do 60
    return { top: randomTop, left: randomLeft };
}

function createStickers() {
    for (let i = 0; i < numberOfStickers; i++) {
        const sticker = document.createElement('a');
        sticker.href = `https://www.link${i + 1}.com`; // Prilagodite linkove prema potrebi
        sticker.target = '_blank';
        sticker.style.position = 'absolute';

        const randomPosition = getRandomPosition();
        sticker.style.top = `calc(${randomPosition.top}% - 50px)`;
        sticker.style.left = `calc(${randomPosition.left}% - 50px)`;

        const img = document.createElement('img');
        img.src = `1.png`; 

        img.alt = 'Sticker';
        img.style.width = '300px'; // Prilagodite veličinu stikera po potrebi

        sticker.appendChild(img);
        stickerContainer.appendChild(sticker);

        // Podesite timeout za uklanjanje stikera nakon određenog vremena
        setTimeout(() => {
            sticker.remove();
        }, stickerDuration);
    }
}

// Pokreće funkciju za kreiranje stikera svakih 10 sekundi
setInterval(createStickers, 1000);



