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

### Mejora teórica para llamadas al backend

Para optimizar la eficiencia en las llamadas a la API se propone:

- Implementar **caching** de resultados ya cargados para evitar peticiones repetidas.
- Utilizar técnicas como **debouncing** en posibles búsquedas para limitar el número de requests.
- Precargar la siguiente página en background para minimizar la espera del usuario.
- Manejar adecuadamente errores y reintentos para mayor robustez.

---

## Cómo contribuir / ideas futuras

- Mejorar el diseño responsivo y accesibilidad.
- Agregar filtros y búsquedas dinámicas.
- Implementar autenticación y gestión de favoritos.
- Publicar en plataforma cloud con CI/CD.

---

## Detalles adicionales

- La `BookCard` muestra información básica del libro y el año de publicación.
- El año tiene un tooltip o diseño que indica explícitamente que es el “Año de publicación”.
- Las keys de cada tarjeta combinan `book.key` y otro identificador para evitar duplicados.
- Se manejan errores intermitentes de la API con reintentos automáticos en errores 500.

---

## Enlace al sitio publicado

(Agregar enlace una vez publicado)
