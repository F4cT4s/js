/*------------LA IDEA SERIA UNA SECCION DE PRODUCTOS CON CARRITO DE COMPRAS
-------------- CON MODIFICADOR POR DISTANCIA Y NUMERO DE PEDIDO--------*/

// Variable para contador de carrito.

let counterCart = 0;

//let shoppingCart = [];

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
            <p id="p" class="card-text p-2">${product.Descripcion}</p>
            <button href="#" id="button-catalog-${product.id}" class="btn btn-primary">Agregar</button>
            </div>
        </div>
    </div>`
}


// ------CARRITO DE COMPRAS------

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
        <td id="font" class="back-in border-0 align-middle"><span>$</span><strong>${product.PrecioFinal}</strong></td>
        <td id="font" class="back-in border-0 align-middle"><div>1</div></td>
        <td id="font" class="back-in border-0 align-middle"><button  id="button-cart-${product.idPurchase}" class="btn btn-danger m-2">Quitar</button></td>
        </tr>

`
}

//  -------ITERACION HTML CATALOGO-------

const showCatalog = () => {
  const catalogNode = document.getElementById("catalogo");
  let catalogHTML = "";

  for (const product of lista) {
    catalogHTML += ProductoHtml(product);
  }

  catalogNode.innerHTML = catalogHTML;
  buttonCatalog();
};

// ------ITERACION CARRITO------
let subtotal = 0 //variable para tabla

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
  subtotal = price
  buttonCart();
  mostrarSubtotalform ()

  
};

// ------ ACCIONES ------
// agregar item
const buttonCatalog = () => {
  for (const product of lista) {
    const buttonCatalog = document.getElementById(
      `button-catalog-${product.id}`
    );

    buttonCatalog.addEventListener("click", () => {
      const productCart = {
        ImagenP : product.ImagenP,
        marca: product.marca,
        modelo: product.modelo,
        PrecioFinal: product.PrecioFinal,
        idPurchase: counterCart,
      };
      
      // Popup (de libreria Toastify) para confirmacion de articulo agregad al carrito.
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

//quitar item

const buttonCart = () => {
  for (const product of shoppingCart) {
    const buttonCart = document.getElementById(
      `button-cart-${product.idPurchase}`
    );

    buttonCart.addEventListener("click", () => {
      const index = shoppingCart.findIndex(
        (p) => p.idPurchase == product.idPurchase
      );

      // Popup (de libreria Toastify) para confirmacion de articulo eliminado del carrito.
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

//vaciar carrito

  const buttonVaciar = document.getElementById("vaciarCarrito")
  buttonVaciar.addEventListener("click", () => {
    localStorage.removeItem('itemCart');
    location.reload()
  })



// Ejecucion de funcion para agregar a catalogo.

showCatalog();

// -----------------------UTLIZACION OPERADOR OR-----

const shoppingCart = JSON.parse(localStorage.getItem("itemCart")) || [];
showCart();


/*-----------INGRESO DE DISTANCIA-----------*/
let infoEnvio = 0

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
    document.getElementById("costoenvio").value = costo;
    infoEnvio = costo
    sumanodos ()
    ;
}



/*----------FUNCION DE CALCULO DE DISTANCIA----------*/
function envio (Distancia){
  if (Distancia <= 0) {
      return 0
      }
  else if ((Distancia <= 15) && (Distancia !== 1)){
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



    
/* ---------------DATOS DEL SUBMIT ---------------*/
    


/*------------SUMADOR TOTAL ------------*/
function mostrarSubtotalform (){
  document.getElementById("subTotal").value = subtotal;
}


function sumanodos () {
  let infoSubtotal = subtotal
  let sumaTotal = sumaParciales(infoSubtotal, infoEnvio)
  document.getElementById("Total").value = sumaTotal;
}

function sumaParciales (x , y) {
return x + y
}

//-----toma de datos-----


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
        subtotal: document.getElementById("subTotal").value ,
        total : document.getElementById("Total").value,
        carrito : shoppingCart,
        Identificador: Date.now(),
    }
    
    sumanodos()

    document.querySelector("form").reset();

    console.warn('Usuario cargado local storage',{data} );

    //localStorage
    localStorage.setItem('Datos Personas', JSON.stringify(data) );
    
    updateData ()
    
    return alertData()
}



/*-------sweet alert confirmacion submit------- */

function alertData() {
    const user = JSON.parse(localStorage.getItem('Datos Personas'))  
    Swal.fire({
      position: 'center',
      icon: 'success',
      title : "Muchas gracias su pedido es el : ",
      text : user.Identificador,
      showConfirmButton: true,
      
    })
}

/*--------FETCH DE SHOPPING CART--------*/
/* -------haciendo referencia a una orden de pedido enviada a un server-----*/

function updateData () {
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: localStorage.getItem('Datos Personas'),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    console.warn ("Json de pedido enviado a servidor")
}