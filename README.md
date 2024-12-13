<div align="center"><img src="imgs\logoMageiaT.gif"></div>
<h1 align="center">Mageia Imperatum</h1>
<p align="center">Proyecto estudiantil de un sitio de 'e-commerce' en el curso de Front-end JS '24227' de Talento Tech.</p>
<br/>
<div align="center"><img src="imgs\cartoon-1688_256_julientromeur.gif"></img></div>
<hr>

<a name="top"></a>

**Indice.**

**[· Acerca de.](#sec1)**

**[· Metas y requisitos.](#sec2)**

**[·· Puntos clave - Pre-entrega.](#sec3)**

**[·· Puntos clave - Proyecto Integrador Final.](#sec4)**

**[· Estado del proyecto - Historial de cambios.](#sec5)**

**[· Acreditaciones.](#sec6)**

**[· Licencia.](#sec7)**

<a id="sec1"></a>
<h3>Acerca de</h3>
En el primer tramo se agregan los componentes del proyecto al repositorio de Github provisto por Talento Tech y se someten a un test de evaluación a fin de conocer las mecánicas utilizadas en la profesión para establecer parámetros de funcionalidad de proyectos.

El segundo cometido de éste estudio, el **Proyecto Integrador Final**, incluye la profundización en el manejo de los elementos del FrontEnd con más la incorporación de elementos de dinámica interactiva desde la programación en javascript, la utilización y edición de Bootstrap, principios de manejo y entendimiento del DOM y los eventos básicos, validación de formularios e implementación de mecánicas de cierre de ventas con un 'carrito' funcional.
<a id="sec2"></a>
<h3>Metas y requisitos</h3>

- Crear un sitio de e-commerce
- Aprender los fundamentos de HTML, CSS y JS
- Aprender a utilizar un repositorio de Github

<a id="sec3"></a>
<h2>Puntos clave - Pre-entrega</h2>

- Estructura Básica de HTML.
    - Estructura semántica: El HTML debe estar dividido en las etiquetas semánticas principales: header, nav, main, section, footer.
    - README.md: Incluir un archivo que explique brevemente el propósito de la página.

-  Formulario de Contacto.
    - Formulario funcional: Crear un formulario de contacto con campos para nombre, correo electrónico y mensaje, utilizando Formspree para manejar el envío de datos.

- Estilos Básicos Aplicados con CSS
    - Archivo styles.css: El proyecto debe contar con un archivo CSS externo que incluya:
        - Estilos básicos aplicados a las secciones de header, footer y lista de navegación.
        - Fuentes de Google Fonts correctamente implementadas.
        - Propiedades de background aplicadas en alguna sección de la página (color, imagen, degradado, etc.).

- Diseño Responsivo con Flexbox y Grid
    - Sección "Productos": Organizada en cards de forma responsiva utilizando Flexbox.
    - Sección "Reseñas": Organizada utilizando Grid, con una distribución lógica y estética.
    - Sección "Contacto": Debe ser responsiva mediante el uso de Media Queries para adaptarse a diferentes tamaños de pantalla.

-  Contenido Multimedia y Navegación
    - Multimedia: deberá incluir archivos multimedia (imágenes, video o iframe) correctamente integrado en la página.
    - Lista de navegación: Implementar una lista desordenada con enlaces que simulen una navegación interna (Inicio, Productos, Contacto, etc.).

- Subida del Proyecto.
    - El proyecto debe estar subido a un hosting gratuito
(Netlify o GitHub Pages), con una URL funcional
para visualizar el sitio.

[^al Indice^](#top)

<a id="sec4"></a>
<h2>Puntos clave - Proyecto Integrador Final</h2>

Sobre el resultado del Proyecto de Pre-entrega se implementará:

- Uso de Bootstrap y Git
  - Reemplazar el nav creado anteriormente por el
navbar responsivo creado con Bootstrap.
  - Adaptar la navbar de Bootstrap a la paleta de
colores de tu proyecto.
  - El proyecto debe estar en un repositorio GitHub,
con commits que documenten los cambios.

- Funcionalidad JavaScript
  - Crear un archivo script.js y linkearlo en el documento
HTML.
  - Debemos poder revisar el código por medio del
inspector que nos ofrece nuestro navegador y
asegurarnos de que nuestro proyecto no nos está
dando ningún error.

- Condicionales y ciclos
  - Implementar una función que verifique si todos los
campos del formulario de contacto están
completos, mostrando un mensaje en la consola.
  - Crear un ciclo que genere dinámicamente una
lista de productos disponibles y los muestre en la
consola.

- Manipulación Básica del DOM y Eventos
  - Implementar un evento click que muestra la
descripción ampliada del producto que clickeamos.
  - Crear un listado de productos incluidos en nuestro
HTML generado por medio de una función en Js.

- Funciones Modulares
  - Crear una función que cree un array de
productos y los muestre en la página utilizando
una plantilla HTML dinámica.

- Carrito de compras
  - Debemos tener implementado un carrito de
compras que permita a los usuarios añadir
productos desde las cards, utilizando localStorage
y sessionStorage para almacenar la información
del carrito.
  - Los productos en el carrito se deben poder
visualizar, editar (cambiar la cantidad) y eliminar.
  - La información debe mantenerse después de
recargar la página.

● Mostrar elementos dinámicos en el HTML a partir de
datos JSON.

● Utilizar la manipulación del DOM para integrar los
datos obtenidos en la interfaz.

● El proyecto debe estar subido a GitHub con un
historial de commits que documenten el progreso.

[^al Indice^](#top)

<a id="sec5"></a>
<h2>Estado del proyecto - Historial de cambios</h2>

- Carga inicial del Index.html y carpeta css.

- Se actualizó el proyecto con las correcciones solicitadas por sistema "autograding".

- 02/12/2024 Carga inicial (**beta**) en GitHub para *Proyecto Integrador Final*.
  - Actualización de este Readme.md con los *Puntos clave* correspondientes al *Proyecto Integrador Final*.
  - Actualización de los .HTML con un Navbar responsivo realizado mediante Bootstrap editado y en modalidad *Dark*.
- 12/12/2024
- _(**beta.1.0**) Con modificaciones mayores según descripción siguiente:
  - Incorporación de mecánica de Tienda Virtual cumpliendo con los requisitos del Proyecto Integrador
  - Edición de los botones de comando en carousel bootstrap en el land-page 'funplay'.
  - Archivos Javascript ('ventas.js' y 'ventasmageia.js').
  - Función de verificación en el formulario de Solicitud de Productos ('ventasmageia.js')
  - Listado de productos seleccionados presentado en los land-pages de ventas para confirmar compra
  - Array de productos presentado en pagina de cierre de venta ('ventasmageia.html') mediante función y plantilla HTML dinámica.
  - Se implementan distintos procedimientos iniciados por eventos click ('pagar', 'limpiarCarrito' y 'agregarProducto')
  - El carrito de compras permite añadir productos desde las cards utilizando localStorage, visualizándose los productos y pudiéndose cancelar la selección.
  - La información cargada por el carrito de compras se mantiene al refrescar la pagina y se elimina si se cancela la misma.
  - La función que genera el cierre de la venta muestra elementos dinámicos en el HTML a partir de datos JSON ('ventasmageia.html')
  - Se utilizan mecánicas de manejo del DOM para integrar los datos obtenidos en la interfaz.
- _(**beta.1.1**) Actualización de este Readme.md con últimas modificaciones e historial de cambios.
- _(**version final.1.0**) Se agrega una mecánica interactiva para presupuesto al land-page funplay.html con pagina de contacto independiente y se agregan los archivos necesarios para su funcionamiento (presupuesto.js, presupuestosmageia.js y presupuestosmageia.html)
  - Se actualiza este Readme.md y se revisan errores menores.
- _(**version final.1.1**) Se realizan correcciones según requerimientos en autograding linter Talento Tech en las paginas de estilo css, ventasmageia.js, crisol.html, funplay.html, presupuestosmageia.html y ventasmageia.html y se actualiza este Readme.md


[^al Indice^](#top)

<a id="sec6"></a>
<h2>Acreditaciones</h2>

- Media
    - <a href="https://pixabay.com/es/" target="_blank">"Pixabay"</a> · (eventualmente se agregaran las acreditaciones individuales)
    - <a href="https://www.pexels.com/es-es/" target="_blank">"Pexels"</a> · (eventualmente se agregaran las acreditaciones individuales)

<div align="center"><img src="imgs\pexels-calvin-wright-2037506675-29140938.jpg"></img></div>

- Materiales
  - El formato de este README está inspirado en el proyecto de: <a href="https://twitter.com/r4dixx" target="_blank">Amaël Sikel</a> README-STUDENT.md

<a id="sec7"></a>
<h2>Licencia</h2>
El proyecto se suscribirá a la licencia MIT. Ver la <a href="LICENCIA.md">licencia</a> y el <a href="LICENSE.DISCLAIMER.md">descargo de responsabilidades</a>.

[^al Indice^](#top)
