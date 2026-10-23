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
    };
}

const sectionUser = document.querySelector("#userContainer");
const btnUser = document.querySelector("#btnUser");

btnUser.addEventListener('click', async() => {
    let datos = await obtenerUsuario();
    console.log(datos);
});

