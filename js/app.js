//MENU RESPONSIVE
var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces")

//CLICK ABRIR
    btnMenuOpen.addEventListener("click", function () {
        menuResponsive.classList.add("active");
    });

//CLICK CERRAR
    btnMenuClose.addEventListener("click", function(){
        menuResponsive.classList.remove("active");
    });

//CERRAR MENU CON ELEMENTOS DE ENLACES
    enlaces.addEventListener("click", function () {
        menuResponsive.style.transitionDelay = "0.5s";
        menuResponsive.classList.remove("active");
    });





//SLIDER DE PRODUCTOS
//.querySelector permite acceder a cualquier elemento ya se id o class
var contenedor = document.querySelector('.slider'),
    btnIzquierdo = document.getElementById("btn-izquierda"),
    btnDerecho = document.getElementById("btn-derecha");

    //EVENTO PARA EL BOTON DERECHO
btnDerecho.addEventListener("click", function (){
    contenedor.scrollLeft += contenedor.offsetWidth;
});
//con esta secuencia (_____.scrollLeft += _____.offsetWidth va a calcular el ancho de la pantalla para avanzar la distancia justa)

    //EVENTO PARA EL BOTO IZQUIERDO
btnIzquierdo.addEventListener("click", function (){
    contenedor.scrollLeft -= contenedor.offsetWidth;
});


// VALIDACION DEL FORMULARIO
var formulario = document.getElementById("formulario");

    function validar(e) {
        var inputNombre = document.getElementById("nombre"),
            inputEmail = document.getElementById("email"),
            inputComents = document.getElementById("comentarios");
            alertSuccess = document.getElementById("alertSuccess");
            alertError = document.getElementById("alertError");

            if (inputNombre.value == 0 || inputEmail.value == 0 || inputComents.value == 0) {
                e.preventDefault(); //preventDefault sirve para que no ejecute su funcion por defecto
                alertError.classList.remove("hide");
                alertError.classList.add("show");

                setTimeout(function() {
                    alertError.classList.remove("show");
                    alertError.classList.add("hide");
                }, 2000); //setTimeout hace una accion pasado el tiempo indicado(2000ms)

            }else{
                e.preventDefault();
                alertSuccess.classList.remove("hide");
                alertSuccess.classList.add("show");

                setTimeout(function() {
                    alertSuccess.classList.remove("show");
                    alertSuccess.classList.add("hide");
                }, 2000);

                inputNombre.value = "";
                inputEmail.value = "";
                inputComents.value = ""; //AL PONER EL VALOR ENTRE COMAS VACIO AL ENVIARSE SE BORRAN LOS DATOS DEL CAJON
            }
    }


// EVENTOS DEL FORMULARIO
formulario.addEventListener("submit", validar);


// BOTON SCROLL TOP
var btnTop = document.getElementById("btn-top"),
    logo = document.getElementById("logo");


//DETECTAMOS SCROLL EN NUESTRA PAGINA WEB
window.addEventListener("scroll", function () {
    var scroll = document.documentElement.scrollTop, //ESTO ME MIDE LA DISTANCIA DE SCROLL EN LA CONSOLA
        fullSize = document.documentElement.offsetHeight, //ESTO ME MIDE EL ALTO COMPLETO DE MI PAGINA WEB
        sizeVP = document.documentElement.clientHeight; //ESTO ME MIDE EL ALTO COMPLETO DE MI VIEWPORT (PANTALLA)

    if (scroll > 100) {
        btnTop.classList.add("show");
    }else{
        btnTop.classList.remove("show");
    }

    //MODIFICAR ELEMENTO CUANDO LLEGUE AL FINAL DE PAGINA
    if (fullSize == (scroll + sizeVP)) {
        btnTop.classList.add("scrollFinal");
    } else {
        btnTop.classList.remove("scrollFinal");
    }
});


//DETECTAMOS EVENTO CLICK EN EL BOTON
btnTop.addEventListener("click", function () {
    window.scrollTo(0,0) //ESTO ME MANDA A LA POSICION LOS LOS VALORES EN (X,Y)
})

//DETECTAR EVENTO CLICK EN EL LOGO
logo.addEventListener("click", function () {
    window.scrollTo(0,0)
})