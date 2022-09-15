

  
fetch("JS/lista.json")
  .then((response) => response.json())
  .then((data) =>{
    lista = data
    showCatalog()
    console.warn("Carga API exitosa")
  })
  .catch((error) => {
    console.error("Falla al cargar API")
    console.error(error)
  })


//---------- LISTENER DROPDOWN CATEGORIA---------
let lista = []
let elemento = ""
function dropDownListener() {
  let elem = document.querySelectorAll(".dropdown-item");

  elem.forEach(element=>{
      element.addEventListener("click", e =>{
          elemento = e.target.innerHTML;
          
          filtroMoviles ()
          filtroFijas()
          filtroEstructuras()
          filtroDimmers()
          filtroRigging()
          filtroConsolas()
          filtroTodo ()

          filtroTecshow()
          filtroRobe()
          filtroClayPaky()
          filtroThomas()
          filtroLitePutter()
          filtroMtx()
          filtroBta()
          filtroProLyft()
          filtroSpanset()
          filtroAvolites()
          filtroGrandma()
        })
    })
  }

dropDownListener();

//----------FILTROS POR CATEGORIA-----------

//------Todo------
function filtroTodo () {
  if (elemento == "Todo"){
    showCatalog()
  }
}

//-----Moviles-------

function filtroMoviles () {
  if (elemento == "Moviles"){
    const FiltroCategoriaMoviles = productos.filter((x) => x.categoria.includes('MOVIL'))
    lista = FiltroCategoriaMoviles
    
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";

    for (const product of FiltroCategoriaMoviles) {
    catalogHTML += ProductoHtml(product);
    }

    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
}
  }

//-------Fijas------
function filtroFijas() {
  if (elemento == "Fijas"){
    const FiltroCategoriaFijas = productos.filter((x) => x.categoria.includes('FIJAS'))
    lista = FiltroCategoriaFijas
    
    const catalogNode = document.getElementById("catalogo")
    let catalogHTML = "";

    for (const product of FiltroCategoriaFijas) {
    catalogHTML += ProductoHtml(product);
    }

    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
}
  }

//------Estructuras-----
function filtroEstructuras(product) {
  if (elemento == "Estructuras"){
    const FiltroCategoriaEstructuras = productos.filter((x) => x.categoria.includes('TRAMOS'))
    lista = FiltroCategoriaEstructuras
  
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroCategoriaEstructuras) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Dimmers------
function filtroDimmers(product) {
  if (elemento == "Dimmers"){
    const FiltroCategoriaDimmers = productos.filter((x) => x.categoria.includes('DIMMER'))
    lista = FiltroCategoriaDimmers
  
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroCategoriaDimmers) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//-------Rigging------
function filtroRigging() {
  if (elemento == "Rigging"){
    const FiltroCategoriaRigging = productos.filter((x) => x.categoria.includes('RIGGING'))
    lista = FiltroCategoriaRigging
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroCategoriaRigging) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//-------Consolas--------
function filtroConsolas() {
  if (elemento == "Consolas"){
    const FiltroCategoriaConsolas = productos.filter((x) => x.categoria.includes('CONSOLAS'))
    lista = FiltroCategoriaConsolas
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroCategoriaConsolas) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}



//----------FILTRO POR MARCA-----------


//------Tec-show-------
function filtroTecshow() {
  if (elemento == "Tec-Show"){
    const FiltroMarcaTecshow = productos.filter((x) => x.marca.includes('TEC-SHOW'))
    lista = FiltroMarcaTecshow
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaTecshow) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Robe-------
function filtroRobe() {
  if (elemento == "Robe"){
    const FiltroMarcaRobe = productos.filter((x) => x.marca.includes('ROBE'))
    lista = FiltroMarcaRobe
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaRobe) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Clay-Paky-------
function filtroClayPaky() {
  if (elemento == "Clay-Paky"){
    const FiltroMarcaClayPaky = productos.filter((x) => x.marca.includes('CLAY-PAKY'))
    lista = FiltroMarcaClayPaky
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaClayPaky) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Thomas-------
function filtroThomas() {
  if (elemento == "Thomas"){
    const FiltroMarcaThomas = productos.filter((x) => x.marca.includes('THOMAS'))
    lista = FiltroMarcaThomas
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaThomas) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Litte-Putter-------
function filtroLitePutter() {
  if (elemento == "Liteputter"){
    const FiltroMarcaLitePutter = productos.filter((x) => x.marca.includes('LITEPUTTER'))
    lista = FiltroMarcaLitePutter
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaLitePutter) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Mtx-------
function filtroMtx() {
  if (elemento == "Mtx"){
    const FiltroMarcaMtx = productos.filter((x) => x.marca.includes('MTX'))
    lista = FiltroMarcaMtx
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaMtx) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Bta-------
function filtroBta() {
  if (elemento == "Bta"){
    const FiltroMarcaBta = productos.filter((x) => x.marca.includes('BTA'))
    lista = FiltroMarcaBta
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaBta) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Pro-lyft-------
function filtroProLyft() {
  if (elemento == "Pro-lyft"){
    const FiltroMarcaProLyft = productos.filter((x) => x.marca.includes('PRO-LYFT'))
    lista = FiltroMarcaProLyft
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaProLyft) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Spanset-------
function filtroSpanset() {
  if (elemento == "Spanset"){
    const FiltroMarcaSpanset = productos.filter((x) => x.marca.includes('SPANSET'))
    lista = FiltroMarcaSpanset
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaSpanset) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Avolites-------
function filtroAvolites() {
  if (elemento == "Avolites"){
    const FiltroMarcaAvolites = productos.filter((x) => x.marca.includes('AVOLITES'))
    lista = FiltroMarcaAvolites
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaAvolites) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

//------Grandma-------
function filtroGrandma() {
  if (elemento == "Grandma"){
    const FiltroMarcaGrandma = productos.filter((x) => x.marca.includes('GRANDMA'))
    lista = FiltroMarcaGrandma
      
    const catalogNode = document.getElementById("catalogo");
    let catalogHTML = "";
  
    for (const product of FiltroMarcaGrandma) {
      catalogHTML += ProductoHtml(product);
    }
  
    catalogNode.innerHTML = catalogHTML;
    buttonCatalog();
  }
}

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


