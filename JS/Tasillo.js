/*------------LA IDEA SERIA UNA SECCION DE PRODUCTOS CON CARRITO DE COMPRAS
-------------- CON MODIFICADOR POR DISTANCIA Y NUMERO DE PEDIDO--------*/


/*----- OBJETOS ----- */

class Inventario {
    constructor (id, categoria, marca, PrecioUSD, modelo, PrecioFinal, Descripcion, ImagenP){
            this.id = id
            this.categoria = categoria.toUpperCase();
            this.marca = marca.toUpperCase();
            this.PrecioUSD = parseFloat (PrecioUSD);    
            this.modelo = modelo.toUpperCase();
            this.PrecioFinal = parseFloat(PrecioFinal);
            this.Descripcion = Descripcion
            this.ImagenP = ImagenP
            this.vendido = false;
    }
    USDtoARS () {
        this.PrecioFinal = this.PrecioUSD * 200; /*este dato del dolar mas adelante me gustaria que lo actualice solo tomando dato de alguna pagina*/
    }
}

/*--Array to push--- */
const productos = [];
//moviles
productos.push (new Inventario("0","movil", "tec-Show", "15", "beamer 7r", "3000", "Cabezal móvil de diseño compacto que tiene una lámpara 7R de 230W, 14 colores + abierto, CTB, CTO, efecto de arcoiris", "./assets/imagenes/beamer7r.jpg"));
productos.push (new Inventario("1","movil", "tec-Show", "15", "magic Cube", "3000", "Cabezal móvil versátil que tiene 25 LEDs 4-en-1 de 15W,Pan/Tilt sin limitaciones y su capacidad de controlar los píxeles de forma independiente","./assets/imagenes/magic cube.jpg" ));
productos.push (new Inventario("2","movil", "tec-Show", "30", "beamer 17r", "6000", "Cabezal móvil que cubre las funciones spot, wash y beam, lámpara de arco corto 17R de 350W", "./assets/imagenes/beamer 17r.jpg"));
productos.push (new Inventario("3","movil", "tec-Show", "12", "mad tec", "2400", "Cabezal móvil tipo beam que tiene 36 CREE XP-E LEDs de 3W, extremadamente rápido y ligero", "./assets/imagenes/mad tec.jpg"));
productos.push (new Inventario("4","movil", "robe", "35", "mega pointe", "7000", "Cabezal móvil tipo spot-beam, lámpara de 470 W y atenuación de colores CMY", "./assets/imagenes/mega pointe.jpg"));
productos.push (new Inventario("5","movil", "robe", "40", "bfml spot", "8000", "Cabezal móvil tipo spot-beam-wash,con una lámpara que produce un haz de luz con un CRI de 92+, esto combinado con un sistema óptico refinado, zoom de 5 a 55 grados, da como resultado un haz de luz nítido y de alta calidad  ", "./assets/imagenes/bmfl spot.jpg"));
productos.push (new Inventario("6","movil", "robe", "40", "tarrantula", "8000", "Cabezal móvil tipo wash, alimentado por 36x 40W y 1x 60W emisores de alta potencia que brindan una impresionante salida de 25.200 lúmenes.", "./assets/imagenes/tarrantula.jpg"));
productos.push (new Inventario("7","movil", "robe", "35", "ledwash 800x", "7000", "Cabezal móvil tipo wash, sistema patentado de Robe para un zoom y una salida uniformes, uniformes y fluidos de una tecnología LED multichip RGBW", "./assets/imagenes/robe-ledwash-800x.jpg"));
productos.push (new Inventario("8","movil", "clay-Paky", "50", "a-leda b-eye k20", "10000", "A.leda B-EYE K20 es una luz wash de alto rendimiento, zoom varía de 4° a 60° y, por lo tanto, es adecuado tanto para entornos con techos bajos (pequeños teatros y estudios de televisión, por ejemplo)", "./assets/imagenes/beye k2-.jpg"));
productos.push (new Inventario("9","movil", "clay-Paky", "55", "sharpy x frame", "11000", "Cabezal movil tipo beam, toma las mejores características de la línea SHARPY e integra un sistema de obturador de cuatro planos focales en un accesorio ligero y compacto ", "./assets/imagenes/sharpy xframe.jpg"));
//fijas 
productos.push (new Inventario("10","fijas", "tec-Show", "10", "par 1000Z cob", "2000", "Par 1000Z es un par LED de alta potencia con DMX que cuenta con 1 LED COB blanco de 100W. Ideal para aplicaciones de gran escala gracias a su potencia, el equipo cuenta con un zoom manual de 11º a 35º.","./assets/imagenes/cob 64.jpg"));
productos.push (new Inventario("11","fijas", "tec-Show", "20", "minibrut led blinder Lite", "4000", "Blinder Lite es un blinder LED de gran desempeño que tiene 4 LEDs blancos cálidos los cuales trabajan con una temperatura color de 3000K. Blinder Lite cuenta con un ángulo de haz 30º.","./assets/imagenes/minibrut led.jpg"));
productos.push (new Inventario("12","fijas", "tec-Show", "25", "lyco zoom 50", "5000", "Lycozoom 50 es una luminaria LED elipsoidal que tiene 1 LED blanco cálido de 100W, trabaja a 3000K y alcanza los niveles de luminosidad de los tradicionales equipos halógenos de 575W. Ideal para aplicaciones de teatro, eventos sociales y estudio.","./assets/imagenes/lyco zoom.jpg"));
productos.push (new Inventario("13","fijas", "tec-Show", "25", "cosmo 18", "5000", "Cosmo 18 es un bañador LED ultra-liviano que cuenta con 18 LEDs (6 rojos, 6 verdes, 6 azules) de 1W. Ideal para cobertura de espacios o creación de efectos, Cosmo 18 incorpora control remoto y 4 modos de operación.","./assets/imagenes/Cosmo18.jpg"));
productos.push (new Inventario("14","fijas", "tec-Show", "15", "nebula max 240", "3000", "Nebula Max 240 es un par de LED para interior que tiene 80 LEDs 3-en-1 de 3W. La unidad viene con tecnología LED 3-en-1 que permite una mezcla RGB sin sombras multicolor","./assets/imagenes/nebula 240.jpg"));
productos.push (new Inventario("15","fijas", "robe", "30", "t11 profile", "6000", "Luminaria fija LED MSL-TE™ de 350 W que genera más de 12 000 lm a partir de la luminaria Profile y todas las ventajas de costo, intercambio o reemplazo, esta tecnología LED","./assets/imagenes/t11profile.jpg"));
productos.push (new Inventario("16","fijas", "robe", "30", "ibar 15", "6000", "IBar 15 es una barra lineal estática liviana de 1000 mm con clasificación IP65 que utiliza 15 LED multichip de 15 W RGBW de 15 W de nueva generación equidistantes para una mezcla mejorada de colores uniformes de 18 bits y atenuación lineal","./assets/imagenes/ibar 15.jpg"));
productos.push (new Inventario("17","fijas", "robe", "25", "t11 fresnel", "5000", "Sobre la base del magnífico concepto de color MSL (Multi-Spectral Light) y la innovadora tecnología TE, nuestro T11 Fresnel mantiene la delicadeza de color excepcional de la exitosa serie T. ","./assets/imagenes/t11fresnel.jpg"));
productos.push (new Inventario("18","fijas", "robe", "50", "onepatt", "10000", "OnePATT es un dispositivo LED multicolor de alta potencia y multichip RGBW alojado en un marco de estilo retro de metal cepillado súper delgado y liviano, puede mapear en píxeles y, por lo tanto, controlar y usar para aplicaciones de matriz a gran escala","./assets/imagenes/onepatt.jpg"));
productos.push (new Inventario("19","fijas", "robe", "50", "pixelpatt", "10000", "PixelPATT está compuesto por 7 chips LED RGBW de 40 W, uno en el centro rodeado por un anillo de seis, alojados en un marco de metal cepillado súper delgado y liviano. ","./assets/imagenes/pixelpatt.jpg"));
//tramos
productos.push (new Inventario("20","tramos", "alumino", "20", "1 metro cuadrado 30*30", "3000", "Truss cuadradro de 1 metro de largo 30x30, en aluminio.","./assets/imagenes/truss_1mtro cuadrado 3030.jpg"));
productos.push (new Inventario("21","tramos", "alumino", "30", "3 metros cuadrado 30*30", "3000", "Truss cuadrado de 3 metros de largo 30x30 en alumino.","./assets/imagenes/3030 cuadrado 3.jpg"));
productos.push (new Inventario("22","tramos", "alumino", "15", "cubo 30*30", "3000", "Truss cubo 30x30 en aluminio para union de truss cuadrado.","./assets/imagenes/cubo aluminio.jpg"));
productos.push (new Inventario("23","tramos", "acero", "10", "1 metros triangular 30x30", "3000", "Truss triangular 30x30 de 1 metro de largo en acero.","./assets/imagenes/acero triangular.jpg"));
productos.push (new Inventario("24","tramos", "acero", "15", "3 cuadrado metros 30x30", "3000", "Truss cuadradro 30x30 de 3 metros de largo en acero.","./assets/imagenes/acero cuadrado.jpg"));
//dimmer
productos.push (new Inventario("25","dimmer", "liteputter", "30", "6 canales", "6000", "Dimmer pack con 6 canales, una capacidad por canal de 20 amperios y un control Dmx -512.","./assets/imagenes/dimmer 6 canales.jpg"));
productos.push (new Inventario("26","dimmer", "liteputter", "35", "12 canales", "7000", "Dimmer pack con 12 canales, una capacidad por canal de 20 amperios y un control Dmx -512","./assets/imagenes/dimmer 12 lp.jpg"));
productos.push (new Inventario("27","dimmer", "mtx", "50", "12 canales", "10000", "Dimmer mod. 1220D DMX y analógico (12 can. x 20 Amp) Toroides de 300uS","./assets/imagenes/dimmer 12 mtx.jpg"));
//riggin
productos.push (new Inventario("28","rigging", "aparejo Manual", "15", "6 metros", "8000", "Aparejo A Cadena Manual Reforzado 1 Tonelada 6 Mts Metros","./assets/imagenes/aparejo manual.jpg"));
productos.push (new Inventario("29","rigging", "aparejo Electrico", "50", "12 metros", "9000", "Aparejo electrico trisfasico de 2 toneladas y 12 metros","./assets/imagenes/aparejo electrico.jpg"));
productos.push (new Inventario("30","rigging", "spanset", "25", "3 metros", "5000", "Spanset de nylon de 1 tonelada y 3 metros, cirtificacion IRAM 2001","./assets/imagenes/spanset.jpg"));
productos.push (new Inventario("31","rigging", "linga de acero", "25", "2 metros", "5000", "Linga de acero de 2 toneladas y 3 metros, con bucles crimpeados en extremos, certificacion IRAM 3220 ","./assets/imagenes/llinga acero.jpg"));
//consolas
productos.push (new Inventario("32","consolas", "avolites", "70", "pearl 2046", "3000", "Consola de control de iluminación DMX512, 4 universos DMX hasta 240 aparatos asignables, 2 ruedas de encoder óptico,2 ruedas de encoder óptico, 4 páginas de 60 faders de preset,450 memorias o chases" ,"./assets/imagenes/pearl.jpg"));
productos.push (new Inventario("33","consolas", "avolites", "90", "tiger touch", "3000", "Consola de control de iluminación DMX512, Grand Master y 10 Playback fader de 60mm etiquetable electrónicamente, agrupados en un banco de 60 paginas independientes, un total 600 faders de accesos directos en el área de playback y 10 faders más de 45mm en el areá de Preset Playbacks,","./assets/imagenes/tiger touch.png"));
productos.push (new Inventario("34","consolas", "grandma", "150", "grandma2 ultralight", "3000", "Con sus 4.096 parámetros y 6 salidas DMX, la grandMA2 ultraligera también es la solución de respaldo perfecta. Lleva todas las características de las consolas de la serie 2 a espectáculos y presupuestos más pequeños, incluido el control intuitivo y rápido de todos los géneros de iluminación.","./assets/imagenes/ultra light.jpg"));
productos.push (new Inventario("35","consolas", "grandma", "300", "grandma3 light", "3000", "La consola de luces grandMA3 incluye 16 384 parámetros de control como estándar, lo que garantiza que sea la plataforma base perfecta para las aplicaciones de iluminación de entretenimiento más prestigiosas del mundo.","./assets/imagenes/GrandMA3-Light.jpg"));

for (const Inventario of productos) {
    Inventario.USDtoARS();
}
//console.log (Productos)

//----------FILTRO POR BUSQUEDA-----------


//----------FILTRO POR CATEGORIA-----------

const FiltroCategoria = productos.filter((x) => x.categoria.includes('MOVIL'))


//----------FILTRO POR MARCA-----------

const FiltroMarca = productos.filter((x) => x.marca.includes('AVOLITES'))

//----------FILTRO POR MAYOR PRECIO-----------

let MayorPrecio = 0;
let TituloMasCaro = "";

for (const HightPrice of productos){
    if (HightPrice.PrecioFinal > MayorPrecio){
        MayorPrecio = HightPrice.PrecioFinal
        TituloMasCaro = HightPrice.modelo
    }
}

//----------FILTRO POR MENOR PRECIO-----------

let MenorPrecio = 999999;
let TituloMasBarato = "";

for (const lowprice of productos) {
    if (lowprice.PrecioFinal < MenorPrecio){
        MenorPrecio = lowprice.PrecioFinal
        TituloMasBarato = lowprice.modelo
    }
}


//----------FILTRO DE PRECIO POR RANGO-----------

const FiltroPrecio = productos.filter((x) => x.PrecioFinal < 20000 && x.PrecioFinal > 8000); 




// Variable para contador de carrito.

let counterCart = 0;

// Array vacio para ir agregando productos.

//let shoppingCart = [];

// Funcion con codigo HTML para ir agregando las cards de los arreglos que tengo declarados, a la web.


//--------HTML--------
const ProductoHtml = (product) => {
return `
    <div class="card m-3" style=";">
        <div class="imgdiv">
            <img src="${product.ImagenP}" class="card-img-top m-2" alt="...">
        </div>
        <div class="card-body">
            <h3 class="card-title p-2">${product.marca}</h3>
            <h4 class="card-subtitle p-2">${product.modelo}</h4>
            <h5 class="card-price p-2">$ ${product.PrecioFinal}</h5>
            <p class="card-text p-2">${product.Descripcion}</p>
            <button href="#" id="boton-${product.id}" class="btn btn-primary">Agregar</button>
            </div>
        </div>
    </div>`
}


// Funcion con codigo HTML para ir agregando las cards de lo que se va agregando al carrito, a la web (carrito de compras).

const ProductoCarritoHtml = (product) => {
    return `
    <tr>
    <th scope="row" class="border-0">
        <div class="back-in p-2" >
            <img src="${product.ImagenP}" alt="" class="img-carrito rounded shadow-sm">
        <div class="ml-3 d-inline-block align-middle">
            <h5 class="back-in mb-0"> 
            <a href="#" id="font" class=" d-inline-block align-middle">${product.marca}</a>
            </h5>
            <span id="font" class=" font-weight-normal font-italic d-block">${product.modelo}</span>
        </div>
        </div>
    </th>
        <td id="font" class="back-in border-0 align-middle"><strong>${product.PrecioFinal}</strong></td>
        <td id="font" class="back-in border-0 align-middle"><strong>quantity</strong></td>
        <td id="font" class="back-in border-0 align-middle"><button  id="button-cart-${product.idPurchase}" class="btn btn-danger m-2">Quitar</button></td>
        </tr>

`
}

// Funcion e iteracion para mostrar los catalogos (codigo HTML - cards) de cada viaje en la pagina web.

const showCatalog = () => {
  const catalogNode = document.getElementById("catalogo");
  let catalogHTML = "";

  for (const product of productos) {
    catalogHTML += ProductoHtml(product);
  }

  catalogNode.innerHTML = catalogHTML;
  buttonCatalog();
};

// Funcion e iteracion para mostrar los productos del carrito (codigo HTML - cards) en la pagina web.

const showCart = () => {
  const cartNode = document.getElementById("carrito");
  const priceNode = document.getElementById("Precio carrito");

  let cartHTML = "";
  let price = 0;
  for (const product of shoppingCart) {
    cartHTML += ProductoCarritoHtml(product);
    price += product.PrecioFinal;
  }

  cartNode.innerHTML = cartHTML;
  priceNode.innerHTML = price;

  buttonCart();
};

// Funciones y evento que escucha cuando se hace clic sobre un boton de alguna de las cards de cualquiera de los arrays.

const buttonCatalog = () => {
  for (const product of productos) {
    const buttonCatalog = document.getElementById(
      `boton-${product.id}`
    );

    buttonCatalog.addEventListener("click", () => {
      const productCart = {
        nameImage: product.ImagenP,
        price: product.PrecioFinal,
        idPurchase: counterCart,
      };

      // Popup (de libreria Toastify) para confirmacion de fotografia agregada al carrito.
      Toastify({
        text: "ITEM AGREGADO",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "green",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      counterCart += 1;
      shoppingCart.push(productCart);
      showCart();
      localStorage.setItem("itemCart", JSON.stringify(shoppingCart));
    });
  }
};

const buttonCart = () => {
  for (const product of shoppingCart) {
    const buttonCart = document.getElementById(
      `button-cart-${product.idPurchase}`
    );

    buttonCart.addEventListener("click", () => {
      const index = shoppingCart.findIndex(
        (p) => p.idPurchase == product.idPurchase
      );

      // Popup (de libreria Toastify) para confirmacion de fotografia eliminada del carrito.
      Toastify({
        text: "ITEM QUITADO",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "red",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      shoppingCart.splice(index, 1);
      showCart();
      localStorage.removeItem("itemCart");
    });
  }
};

// Ejecucion de funcion para agregar a catalogo.

showCatalog();

// Recupero la informacion del localStorage y valido si el carrito tiene items para presentarlos nuevamente en la web. Para esto utilizo el operador logico OR.
const shoppingCart = JSON.parse(localStorage.getItem("itemCart")) || [];
showCart();

// Utilizo operador ternario para mostrar si el LS esta vacio o lleno. En base a eso muestro un mensaje o los elementos del arreglo.
shoppingCart != 0
  ? console.log(shoppingCart)
  : console.log("El localStorage está vacío.");


// Desestructuracion de arreglo "photos".
const [a, , , , , b] = productos;

console.log(a);
console.log(b);

// Spread de array.
console.log(...productos);




/*const preciohtml = () => {
    const precionodo = document.getElementById ("Precio carrito")

    for (const Product of carrito) {
        precio += Product.PrecioFinal
    }

    precionodo.innerHTML = precio;
}

*/


/*-----------INGRESO DE DISTANCIA-----------*/
function idDistancia(){
let distancia = 0
}
let input = document.getElementById('envio');
input.addEventListener('keyup', (event) => { 
    getDistancia(event);
})


function getDistancia(e){
    let distancia = e.target.value;
    let costo = envio(distancia);
    !isNaN(parseFloat(distancia)) && !isNaN(distancia - 0);
    document.getElementById("costoenvio").value = costo;
    ;
}

/*------------SUMADOR TOTAL ------------*/

document.getElementById("Total").value = ((document.getElementById("costoenvio").value) + (document.getElementById("subTotal").value));


/*----------FUNCION DE CALCULO DE DISTANCIA----------*/

function envio(Distancia){
    if ((Distancia <= 15) && (Distancia !== 1)){
        return 140;
    }
    else if ((Distancia > 15) && (Distancia <= 20)){ 
        return 160;
    }
    else if ((Distancia >20) && (Distancia <= 40)) {
        return  180;
    }
    else {
        return (200+(100*(Distancia-40)));
    }
}

/* GUARDADO DE DATOS DEL SUBMIT */

/*---datos de submit */
let subtotal = document.getElementById("subTotal").value


let userData = [];

document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('btn').addEventListener('click', tomadeDatos);
});



function tomadeDatos(e){
    e.preventDefault();
    let data = {
        Nombre: document.getElementById("nombre").value,
        Apellido: document.getElementById("surname").value,
        Telefono: document.getElementById("telefono").value,
        Email: document.getElementById("email").value,
        Distancia: document.getElementById("envio").value,
        Costo: document.getElementById("costoenvio").value,
        //subtotal: document.getElementById("subtotal").value,
        //total : document.getElementById("Total").value,
        Identificador: Date.now(),
    }
    userData.push(data);
    document.querySelector("form").reset();

    console.warn('added',{userData} );

    //localStorage
    localStorage.setItem('Datos Personas', JSON.stringify(userData) );

    return alertData()
}

function alertData(){
    alert (JSON.stringify(localStorage.getItem('Datos Personas', null, '...')))
}


console.log (JSON.stringify(localStorage.getItem('Datos Personas', null, '...')))





/*--------DATOS JSON--------*/