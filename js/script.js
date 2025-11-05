const btnTakePhoto = document.getElementById("btnTakePhoto");
const btnCapture = document.getElementById("btnCapture");
const btnCancel = document.getElementById("btnCancel");
const btnSave = document.getElementById("btnSave");
const videoModal = document.getElementById("videoModal");
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const preview = document.getElementById("preview");
const cameraIcon = document.getElementById("cameraIcon");
const backgroundParticles = document.getElementById("backgroundParticles");

let stream = null;

// --- Evento: Abrir Modal y Acceder a Cámara ---
btnTakePhoto.addEventListener("click", async () => {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: true
        });
        video.srcObject = stream;
        videoModal.classList.add("show");
    } catch (err) {
        alert("No se pudo acceder a la cámara: " + err.message);
    }
});

// --- Evento: Capturar Foto ---
btnCapture.addEventListener("click", () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);

    const imageDataUrl = canvas.toDataURL("image/png");
    preview.src = imageDataUrl;
    preview.style.display = "block";
    cameraIcon.style.display = "none";

    closeCamera();
});

// --- Evento: Cancelar Captura ---
btnCancel.addEventListener("click", () => {
    closeCamera();
});

// --- Función: Cerrar Cámara y Modal ---
function closeCamera() {
    if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        stream = null;
    }
    videoModal.classList.remove("show");
}

// --- Evento: Guardar Datos ---
btnSave.addEventListener("click", () => {
    const data = {
        nombreCompleto: document.getElementById("nombreCompleto").value,
        apellido1: document.getElementById("apellido1").value,
        apellido2: document.getElementById("apellido2").value,
        curp: document.getElementById("curp").value,
        foto: preview.src,
    };

    if (!data.nombreCompleto ||
        !data.apellido1 ||
        !data.apellido2 ||
        !data.curp
    ) {
        alert("Por favor complete todos los campos");
        return;
    }

    if (preview.style.display === "none") {
        alert("Por favor tome una foto");
        return;
    }

    console.log("Datos guardados:", data);
    alert("Datos guardados correctamente");

    // Limpiar campos y restablecer vista previa
    document.getElementById("nombreCompleto").value = "";
    document.getElementById("apellido1").value = "";
    document.getElementById("apellido2").value = "";
    document.getElementById("curp").value = "";
    preview.style.display = "none";
    cameraIcon.style.display = "block";
});

// --- Generador de partículas de fondo ---
function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    backgroundParticles.appendChild(particle);

    const size = Math.random() * 3 + 2; // Tamaño entre 2px y 5px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const startX = Math.random() * window.innerWidth;
    const startY = Math.random() * window.innerHeight;
    particle.style.left = `${startX}px`;
    particle.style.top = `${startY}px`;

    // Valores aleatorios para el desplazamiento en X e Y
    const moveX = (Math.random() - 0.5) * 200; // -100px a 100px
    const moveY = (Math.random() - 0.5) * 200; // -100px a 100px

    particle.style.setProperty("--x", `${moveX}px`);
    particle.style.setProperty("--y", `${moveY}px`);

    const duration = Math.random() * 8 + 5; // Duración entre 5s y 13s
    const delay = Math.random() * 5; // Retraso para que no todas empiecen a la vez
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    // Eliminar la partícula después de su animación para evitar acumulación
    particle.addEventListener("animationend", () => {
        particle.remove();
    });
}

// Generar nuevas partículas a intervalos regulares
setInterval(createParticle, 300);