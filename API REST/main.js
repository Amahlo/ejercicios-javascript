const baseURL = "https://6adb70213b7e90b8208fefa0.mockapi.io/";

async function obtenerUsuario(){
    try {
        const response = await fetch(`${baseURL}/users`);

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error){
        console.error("Hubo un error obteniendo los usuarios:", error);
    };
}

const sectionUser = document.querySelector("#userContainer");
const btnUser = document.querySelector("#btnUser");
const cardContainer = document.querySelector("#cardContainer");

btnUser.addEventListener('click', async() => {
    btnUser.textContent = "Cargando usuarios...";
    let datos = await obtenerUsuario();

    if (datos && datos.length > 0) {
        datos.forEach(user => {
            const card = document.createElement("div");
            card.classList.add("card");

            const nombre = user.name || 'Nombre no disponible';
            const id  = user.id || '#';

            card.innerHTML = `
                <div class="card-body">
                    <h3>${nombre}</h3> 
                    <p>ID usuario: ${id}</p>
                </div>
            `;

            cardContainer.appendChild(card);
        });
    } else {
        cardContainer.innerHTML = "<p>No se encuentran usuarios</p>"
    }
    btnUser.textContent = "Obtener Usuario";
});

