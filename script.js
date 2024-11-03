// Declaramos el reproductor como una variable global
let player;
const correctYear = 2005; // Cambia esto al año correcto de la canción

// Función que se llama automáticamente cuando se carga la API de YouTube
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360', // Altura del reproductor
        width: '640',  // Ancho del reproductor
        videoId: '',   // ID del video vacío al inicio
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Función llamada cuando el reproductor está listo
function onPlayerReady(event) {
    console.log("Reproductor de YouTube listo");
}

// Cambia la visibilidad del reproductor cuando empieza a reproducir
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        document.getElementById("player").style.display = "block";
    } else if (event.data == YT.PlayerState.ENDED) {
        document.getElementById("player").style.display = "none";
        let guess = prompt("¿En qué año crees que se lanzó esta canción?");
        checkAnswer(guess);
    }
}

// Función para cargar y reproducir la canción misteriosa
function playMysterySong() {
    const videoId = "VIDEO_ID_AQUI"; // Reemplaza con el ID del video de YouTube
    player.loadVideoById(videoId);
    player.playVideo();
}

// Verifica la respuesta del jugador
function checkAnswer(guess) {
    if (parseInt(guess) === correctYear) {
        alert("¡Correcto! Has adivinado el año.");
    } else {
        alert(`Incorrecto. El año correcto era ${correctYear}.`);
    }
}
