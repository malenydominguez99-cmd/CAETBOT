const chat = document.querySelector(".chat");
const chatButton = document.getElementById("chatButton");

chat.style.display = "none";

chatButton.addEventListener("click", () => {

    if (chat.style.display === "none") {

        chat.style.display = "flex";

    } else {

        chat.style.display = "none";

    }

});

const input = document.getElementById("mensaje");
const enviar = document.getElementById("enviar");
const chatBody = document.querySelector(".chat-body");

function agregarUsuario(texto){

    chatBody.innerHTML += `

    <div class="user">

        ${texto}

    </div>

    `;

    chatBody.scrollTop = chatBody.scrollHeight;

}

function agregarBot(texto){

    chatBody.innerHTML += `

    <div class="bot">

        ${texto}

    </div>

    `;

    chatBody.scrollTop = chatBody.scrollHeight;

}

function responder(){

    const mensaje = input.value.trim().toLowerCase();

    if(mensaje=="") return;

    agregarUsuario(input.value);

    input.value="";

    setTimeout(()=>{

        if(mensaje.includes("apertura") || mensaje.includes("abrir")){

            agregarBot("Para abrir un establecimiento necesitas presentar la documentación correspondiente y cumplir con los requisitos establecidos por el Centro de Atención Empresarial.");

        }

        else if(mensaje.includes("requisito")){

            agregarBot("Generalmente necesitarás identificación oficial, comprobante de domicilio, formato de solicitud y la documentación específica según el trámite.");

        }

        else if(mensaje.includes("folio") || mensaje.includes("estado")){

            agregarBot("En una versión futura podrás consultar el estado de tu trámite ingresando tu número de folio. Actualmente esta función forma parte del prototipo.");

        }

        else if(mensaje.includes("costo") || mensaje.includes("precio")){

            agregarBot("Los costos dependen del trámite solicitado. Para conocer el monto correspondiente deberás consultar la información oficial del CAE.");

        }

        else if(mensaje.includes("hola")){

            agregarBot("¡Hola! 😊 Soy CAETBOT. Estoy listo para ayudarte con información sobre los trámites del Centro de Atención Empresarial.");

        }

        else if(mensaje.includes("gracias")){

            agregarBot("¡Con gusto! Si tienes otra duda estaré aquí para ayudarte.");

        }

        else{

            agregarBot("Lo siento, aún estoy en desarrollo y no puedo responder esa consulta. Intenta preguntar sobre requisitos, apertura, costos o estado del trámite.");

        }

    },700);

}

enviar.addEventListener("click",responder);

input.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        responder();

    }

});