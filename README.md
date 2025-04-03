# nicoocr.github.io

> Esto es el README.md 
*Realizado por: Nicolás Cervera Rodríguez*

---
# Proyecto LMGSI
Mi proyecto de LMGSI tendrá las siguientes características:
- Mediaquery para móvil.

- Sombras en los elementos.

- Animaciones hover de los botones y menús.

- Añado funciones nuevas como el :focus utilizado para darle un brillo a los      botones cuando se seleccionan.

- La imagen de fondo de .hero estará oscurecida con una superposición negra semitransparente.
El texto dentro de .hero será claramente visible y estará encima de la superposición.

- Superposición Oscura en .hero
Se utiliza un pseudo-elemento ::before para añadir una capa semitransparente negra sobre la imagen de fondo de la sección .hero. 

- Propiedades Clave
background-color: rgba(0, 0, 0, 0.5);: Oscurece la imagen con un fondo negro semitransparente.
z-index: 1;: Coloca la superposición encima de la imagen pero debajo del texto.
pointer-events: none;: Permite que los clics pasen al contenido debajo de la superposición.
- Estructura Visual
Imagen de fondo: Se mantiene como base.
Superposición (::before): Oscurece la imagen.
Texto (.hero-text): Se coloca encima con z-index: 2 y sombras para resaltar.
