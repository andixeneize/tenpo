# Proyecto: Biblioteca con Scroll Infinito

## Descripción

Esta aplicación muestra una lista paginada de libros obtenidos desde la API pública de [Open Library](https://openlibrary.org).  
Utiliza React, Vite y TailwindCSS para construir una interfaz rápida, responsiva y con scroll infinito para cargar libros progresivamente.

---

## Tecnologías usadas

- React 18+
- Vite
- TailwindCSS para estilos
- Axios para llamadas HTTP
- React Infinite Scroll Component para paginación infinita
- [Lucide](https://lucide.dev/) para los íconos

---

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/andixeneize/tenpo.git
cd tenpo
```

2. Instalar dependencias:

```bash
npm install
# o
yarn install
```

3. Ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
# o
yarn dev
```

4. Abrir `http://localhost:5173` en tu navegador.

---

## Decisiones de diseño y arquitectura

### Mostrar lista en la Home

La lista de libros se muestra con scroll infinito, lo que permite cargar progresivamente más resultados al usuario sin recargar toda la página ni requerir paginación explícita. Esta solución:

- Mejora la experiencia de usuario al mostrar contenido continuo.
- Reduce la carga inicial y uso de memoria al no cargar todos los libros a la vez.
- Es sencilla de implementar con React Infinite Scroll Component.

### Mejoras teóricas propuestas para la API de Open Library

1. **Incluir metadatos completos de paginación**  
   Incorporar en la respuesta campos como `currentPage`, `totalPages`, `hasNextPage` y `pageSize` para facilitar la navegación paginada y el control del infinite scroll en el frontend.

2. **Selección de campos específicos (Field selection)**  
   Permitir al cliente solicitar únicamente los campos necesarios en la respuesta, reduciendo el tamaño del payload y mejorando el rendimiento de la aplicación.

3. **Filtros avanzados en la búsqueda**  
   Añadir parámetros que permitan filtrar por rangos de años de publicación, idioma, temas o autores, aumentando la relevancia de los resultados y disminuyendo la cantidad de datos transferidos.

4. **Compresión de respuestas HTTP**  
   Garantizar que las respuestas JSON estén comprimidas utilizando gzip o Brotli, optimizando la transferencia de datos especialmente en conexiones lentas o móviles.

5. **Mejor control y documentación del rate limiting**  
   Implementar límites de uso claros con mensajes de error informativos y mantener una documentación actualizada para evitar bloqueos inesperados durante el consumo de la API.


---

## Cómo contribuir / ideas futuras

- Mejorar el diseño y accesibilidad.
- Agregar filtros y búsquedas dinámicas.
- Implementar página de detalle y gestión de favoritos.
- Publicar en plataforma cloud con CI/CD.

---

## Enlace al sitio publicado

(Agregar enlace una vez publicado)
