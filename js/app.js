
const carrito= document.querySelector("#Carrito");

const ListaProductos= document.querySelector("#lista-producto");//este es el carrito en general

const contenedorCarrrito=document.querySelector("#lista-carrito tbody");//esta es la tabla qeu hice con las cosas, pro no quiero todo, asiqeue specifico lo que quiero tbody, que es donde yo voy a ir agregando todo lo que cree mas abajo en el row.innertHTML

const vaciarCarritoBTN=document.querySelector("#vaciar-carritoBTN");//este es el enlace , que le voy a poner un click  mas abajo




//para poder guardar las cosas al carrito yo tengoque generar un lugar adonde ir acumulandolos , en este caso voy a hacer un array, ESTE ES EL PRIMER DIV QUE ENCIERRA A TODOS LOS OTROS DIV

let articulosCarrito = [];


ListaProductos.addEventListener("click",agregarCarrito)
vaciarCarritoBTN.addEventListener("click",vaciarCarrito)
carrito.addEventListener("click",eliminarProducto)

function eliminarProducto(e){
e.preventDefault();//como mi X es un enlace yo tengo que hacer un preventDefault],para que no ser me reinicie la pagina
console.log(e.target)// quiero ver el click ya le pongo el e.target puedo ver cualquier click qeu se haga ahi adentro
//para cancelarl los click usabamos usabamos el  if,, preguntandole si el evento.target/.. . Si contiene la clase 'borrar-producto', que eta justamente nosotros la agregamos desde js X
if(e.target.classList.contains("borrar-producto")){//si esto conttiene a esta clase borrar-carrito
const productoId= e.target.getAttribute("data-id")
         //eliminar del carrito usando array metod el filter
         articulosCarrito=articulosCarrito.filter(function(producto){
            return producto.id !==productoId;//me va dejar en el carrito  aquellos todos loa qeu sean diferentes al productoid que yo selecciones , entonces me ava dejar todos menos el que yo toque, entonces actualiza carrito con todos los elementos menos el que yo que yo toque. Aca  me va a filtrar todos los que sean diferentes
         //una vez que termina este returnm
        })
       //tengo qeu hacer un renderizar del carrito , osea que se vulva a acragra sola sino no me va a desaparecer el prodcuto de la pantalla pero si se puede ver en la consola. solo renderizamos para que sea vivvvle ene la web
   renderCarrito()
    }
}
function agregarCarrito(e){//le voy a poner q detecte el evento con e, porque sino lo q pasa es q toco cualquier parte de la pantalla y puedo ver un agregar al carrito
   // console.log("agregando al carrito");
e.preventDefault();
//CONSOLE.LOG(e)
//que es lo que voy a ahcer para que me detecte el click donde yo quiero y no en cualquier lado, voy apreguntar
//para eso voy a chuismear que tiene ese e, y que le puedo hacer, buen voy a hacer un console.log de epara chus,ear la lista que tengo  para hacerle
//console.log(e) --> aca ya me fije a quien responde el target, entonces voy a hacer un if
if (e.target.classList.contains("agregar-al-carrito")){// si la el evento.target.classList si contiene ( aca estoy preguntamos si contiene la class "agregar-al-carrito" va a entrara al if , sino no va hacer nada, porque no hay nada para abajo)
const producto = e.target.parentElement.parentElement;//si contiene esa class  agregar -carrito, voy a hacer const vamos a decir que producto = e.target.parentElement.parentElement Entonces le pregunto del e q es el evento , kle pregunto el target es decir a quien le hice clik, y si contiene agarrar al carrito, voy a agarrar al padre  del padre(eSTO QUIERE DECIR ELEMENTO PADRE DEL PADRE),para  ver si lo contiene vamos aa ahcer un console log de producto
/* console.log(producto)//lo que veo en la consola es que cuando toco la imagen ya no me parecen los eventos de cclik , sino que no aparece nada, pero cuando toco el enlace de agregar al carrito si me aparece ese pedaso de atml
//para nos segui escribiendo todo en el mismo lugar  voy a hacer una funcion nueva que voy a declarar mas abajo */
leerDatosProducto(producto)//que va a recibir un producto
     }//en caso de que no haga mi if, no va hacer nada, porque si quisiera q haga algo le pongo un else
}

function leerDatosProducto(producto) {//esta funcion que va resivir un producto, y con lo q tengo adentro de mi producto voya  air armando un producto.Voy armando mi producto
    const infoProducto={ //aca voy a armar nuestro producto, que es un objeto
        imagen: producto.querySelector("img").src,//nuestro porducto tiene una imagen y esa imagen desimo que agarre el producto.quewreyselec y vamos a estar seleccionando la imagen.src con esto estoy accedeiendo a l ainformacion de la imagen del producto que yo toque  en el la web y la esta guardando
        titulo: producto.querySelector("h2").textContent,//despues dijismos que tenia un titulo; producto , cuery selector h2 , con esto vamos a acceder al nombre del rpoduto que el ehtml seria <h2>TIME'S MAGIC </h2> , <h2>BIG BOLD BIOCERAMIC</h2>,<h2>SKIN REGULAR</h2> y para acceder a eso tenemos que acceder a travez de textContent
   //esto ya funciona perfectamente; entonces en un un pricipio lo que ,e pasa es que recupero la imagen, osea le mandp producto que producto era el div, del div hago un cquerysele de la imagen , de la imagen, le saco el src y lo guardo deltrp infoProducto y  infoProducto titulo va a tenmer la informacion de textContent
        
   precio: producto.querySelector(".precio").textContent, //lo mismo que la anterir 
   id: producto.querySelector("a").getAttribute("data-id"),//del <a> devolbeme el atributo data-id que agregamos en el html
   cantidad: 1,//la idea ahora es ir pusheado, es decir agregar al carreito haciendo un push de lo q yo seleccione, es un metodo cque agrega cosas al arary
}
console.log(infoProducto);//aca puedo ver ene la consola cada elemnto como un onbjeto array con sus caracteristicas, increible!osea vemos que tiene adentreo segun todas las descripciones que pusimos anteriormenete, voy aponer una captura de como queda cada objeto

/* 
// yo tenia arriba del todo echo un array lalamdo articulosCarrito, que lo deje vacio pra despues agrgar las cosas ahi
articulosCarrito.push(infoProducto);// uso el metodo push y con esto yo voy a estar agregando las cosas al carrito de compras, osea grrenado las cosas qeu selleciono al array de arriba del todo como se puede ver en la captura yo selccione 3 cosas y cuando puse en la consola para ver articulos carritos me aparecen 3 elemetos en el array
//ahora que ya arregle mi carrito le agrege las tablas etc , puedo seguir renderizandolo desde js , con una funcion que la voy a llamar render
renderCarrito();--> este comentario quedA ASI PORWUR DEVEMOS VER 3 TEMAS ANSTES DE PODER ARREGLAR EL CARRO

} */
//if(true){voy resolver desde adentro, esto quedaria simplemente asi
//}
if(articulosCarrito.some(p => p.id === infoProducto.id)){
    const productos= articulosCarrito.map(p=> {//el map tiene el mismo formato que el some, en cuanto el argumento "p" , la funcion funcion => y como va a tener mas de un alinea voy a aponer llaves{}, si no no pondria {}
           if(p.id ===infoProducto.id){
               p.cantidad +=1
                return p
           }else {
              return p 
           }

    })     
    articulosCarrito=[...productos]

       }else{
        articulosCarrito=[...articulosCarrito,infoProducto]
       }


/* /ACA VOY CON LO QUE VA EXPLICADO AL COSTADO Y EN LA TERIA
//uo entonces en pocas palabras estoy preguntando. y dentro de esa pregunta si recibe o no resive, pot eso tengo el if ahi arriba, pq retorna a un verdadero de falso
 if(articulosCarrito.some(function(producto){//el metodo some, me devuelve  una funcion con adentro un producto y ese prodcuto puedo ver por ejemplo si producto .id==infoProdcuto.id -->Aca estoy asiendo una evaluacion de esto, osea con come me fijo de la coincidencia, y despues en caso que alla cioncidencia le voy a sumar 1, en caso de la no coincidencia mer etorna al mismo producto qwue teni
     return producto.id== infoProducto.id//Esto me va a dedvolver un verdadero o falso si es qe resive o no resive
})) {//si esto del if es verdadero entonces  yo le estoy diciendo que vamos a recorrer cada uno de los elementos del carrito y cada vez que lo hagamos vamos a estar ejecutando la funcion (product) , la funcion map me devuelvce y array nuevo ovnloque yo le indiqyue te tiene q hacer 

  ESTO ES UN ARRAY -->  const productos= articulosCarrito.map(function(product){//map me sirve para recorrerlo en otro contexto. uso la misam varianle de arriva
   if(product.id== infoProducto.id){
    product.cantidad +=1;//lo unico que va aes agarrar el poroducto y agrergarle 1, en le caso contrario va a retornar. Quenva ahcer va a alterar la cantidad y lo va a devolver adentro del arrray y si no son iguales
    return product

   }else {//En caso contrario retorna a producto, es decir lo que va hacer si no son iguales
       return product//si no son iagual lo va a retornar directamente sin alterarlo sin hacerle el ++
   }
   })//ACA ES DONDE VIENE LA PARTE DE SPREAD OPERATOR, EL REeMPLAZO DEL PUSH
   articulosCarrito = [...productos]  esto qiere decir que articulo carrrito es iagula a todo lo hay adentro de productos, entonces yo lo que quiero hacer  es pasar  todo el contenido de productos a articuloscarritos                                                                                                                                                                                                                                                                                                                  */
/*    articulosCarrito = [...productos]// lo que etsamos asiendo tomando el contenido de un array NO LA DIRECCION DE MEMORIA, ES POR ESO Q NO UTILIZAMOS EL ARRAY CON EL CONTENIDO Q TENIAMOS eslos puntos  son todo lo que este en producto l pone adentro 
}else{ //este else va a hagarrar articulos carritoy va a atomar todo el contenido, y le va a poner info producto
    articulosCarrito=[...articulosCarrito,infoProducto] //el array de articulosCarrito con infofoproducxto, y el array de articulosCarrito con producto
}*/
  console.log(articulosCarrito)
//Lo hioce entonces es primero con some, fijarme la coincidencia sumarle uno y despues  en el caso de la noc coincidencia  retorno al mismo producto que tenia
 
renderCarrito()
}
function renderCarrito(){
    vaciarCarrito()//arranco con esto , llamo a esto apenas renderizo
    articulosCarrito.forEach (function(producto){// o (producto => {arrow fanshon  , funcion flecha o tambien prodrai haber utilizado un for of
        const row = document.createElement("tr")//aca tenemos una funcion colback que esta generando un elemeto tr , despues viene acompanada e otras cosas lo vimos en tablas 
    //ahora  voy a crear la cosntante row.que va a contener a la constante.
    row.innerHTML= //abro bactik
        ` <td>
                
        <img src="${producto.imagen}"width=100>
         
           </td>
           <td>${producto.titulo}</td>
           <td>${producto.precio}</td>
           <td>${producto.cantidad}</td>
           <td>
           <a href="#" class="borrar-producto" data-id=${producto.id}> X</a> 
           </td>
        `/* //Entonces de cada producto vamos a estar agregando producto.imagen entre comillas porqeu es una propiedad y un whith porqeu tenemos que especificar tamano de la imagen que vamos a tener  , esto lo estamos asiendo para un solo elemento por eso no hace falta poner += como hemos utilizado en otras ocaciones. Cada vez que entremos a const row; vamos a crear un "tr" nuevo, y a ese tr le vamos a estar metiendo un td y la imagen del producto
    //vamos a garrra el comtenerdor de carrito , que seria el q dejamos vacio en html   <td>
           <a href="#" class="borrar-curso" data-id=
           ${producto.id}> X</a>  esa X me sirve para despues borrar, ojo le pongo un data- porque me sirve para identificarlo y asi sabe a quien borrar
           </td> */

           
           contenedorCarrrito.appendChild(row);

     })
 }

function vaciarCarrito(){ //a esta funcion la voy  ausar mas arriba enla funcion renderizarCarrito
    contenedorCarrrito.innerHTML = '' //cada vez que yo renderice el carrito voy a  encontrar vacio ,por lo tanto estara vacio
}