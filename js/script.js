// VALIDACIÓN DE FORMULARIO
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío por defecto

    const nombre = this.querySelector('input[placeholder="Nombre"]').value.trim();
    const apellido = this.querySelector('input[placeholder="Apellido"]').value.trim();
    const email = this.querySelector('input[placeholder="Email"]').value.trim();
    const telefono = this.querySelector('input[placeholder="Teléfono"]').value.trim();
    const mensaje = this.querySelector('textarea[placeholder="Tu mensaje"]').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{7,15}$/;

    // Validación general
    if (!nombre || !apellido || !email || !telefono || !mensaje) {
        alert("Por favor completá todos los campos.");
        return;
    }

    // Valida el formato del mail
    if (!emailRegex.test(email)) {
        alert("Ingresá un email válido.");
        return;
    }

    //Valida el formato del teléfono
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe tener entre 7 y 15 dígitos numéricos.");
        return;
    }

    alert("Formulario enviado correctamente."); // POP-UP
    this.reset(); // Limpia los campos
});

// MODO OSCURO / CLARO
const toggleInput = document.getElementById("modo-toggle");
const labelModo = document.getElementById("modo-label");

// Cargar preferencia guardada
const preferencia = JSON.parse(localStorage.getItem("modoOscuro")) || false;
toggleInput.checked = preferencia;
aplicarModoOscuro(preferencia);

function aplicarModoOscuro(activar) {
    if (activar) {
        document.body.classList.add("modo-oscuro");
        labelModo.textContent = "Modo oscuro 🌙";
    } else {
        document.body.classList.remove("modo-oscuro");
        labelModo.textContent = "Modo claro 🌞";
    }
}

// Escucha el cambio en el switch
toggleInput.addEventListener("change", function () {
    const activado = this.checked;
    localStorage.setItem("modoOscuro", activado);
    aplicarModoOscuro(activado);
});

// MOSTRAR/OCULTAR SECCIÓN HABILIDADES
const botonHabilidades = document.getElementById("toggle-habilidades");
const seccionHabilidades = document.getElementById("habilidades");

botonHabilidades.addEventListener("click", () => {
    const estaOculta = seccionHabilidades.classList.contains("oculto");

    seccionHabilidades.classList.toggle("oculto");
    botonHabilidades.textContent = estaOculta ? "Ocultar habilidades" : "Mostrar habilidades";
});

// CREAR TARJETAS DINAMICAMENTE
const peliculas = [
    {
        titulo: "Interstellar",
        imagen: "img/interstellar.jpg",
        descripcion: "Un grupo de astronautas viaja a otro universo buscando un nuevo hogar para la humanidad."
    },
    {
        titulo: "Soy Leyenda",
        imagen: "img/soy-leyenda.jpg",
        descripcion: "El último hombre vivo en Nueva York lucha por sobrevivir y hallar una cura en un mundo postapocalíptico."
    },
    {
        titulo: "El patriota",
        imagen: "img/el-patriota.jpg",
        descripcion: "Un granjero se une a la revolución americana tras perder a su hijo en la guerra contra los británicos."
    }
];

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas");

peliculas.forEach(pelicula => {
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";

    tarjeta.innerHTML = `
        <img src="${pelicula.imagen}" alt="Película ${pelicula.titulo}">
        <h3>${pelicula.titulo}</h3>
        <p>${pelicula.descripcion}</p>
    `;

    contenedorTarjetas.appendChild(tarjeta);
});

// CONTADOR DE VISITAS USANDO localStorage
const claveContador = "contadorVisitas";
let visitas = parseInt(localStorage.getItem(claveContador)) || 0;
visitas++;
localStorage.setItem(claveContador, visitas);

// Crear y mostrar el contador en el footer
const contador = document.createElement("p");
contador.className = "contador-visitas";
contador.innerHTML = `👁️ Visitas a esta página: <strong>${visitas}</strong>`;
document.querySelector("footer").appendChild(contador);