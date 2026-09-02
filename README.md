# Biblioteca Digital 

## Integrantes
* **Morena Yael Zalcman**
* **Eliel Dan Jamilis**

---

## API Utilizada
* **Open Library Search API**: [`https://openlibrary.org/search.json`]

---

## Descripción 
Aplicación web desarrollada en **React** con **TypeScript** que permite explorar, buscar y gestionar una colección de libros en tiempo real mediante la integración con la API pública de Open Library. La aplicación ofrece una experiencia de usuario fluida con estética de biblioteca clásica, permitiendo guardar libros favoritos y abrir un modal de detalle interactivo para consultar información extendida de cada obra.

---

## Organización de Componentes

La estructura del proyecto está organizada de forma modular manteniendo una clara separación de responsabilidades:

```text
src/
├── components/           # Componentes reutilizables de UI
│   ├── BookDetailModal/  # Modal overlay con el detalle extendido del libro
│   ├── Favorites/        # Contenedor de la lista de favoritos
│   ├── ItemCard/         # Tarjeta individual para mostrar cada libro
│   ├── ItemList/         # Grid responsive de tarjetas de libros
│   └── SearchBar/        # Barra de búsqueda con entrada controlada
├── hooks/                # Custom Hooks para la lógica de negocio
│   ├── useBooks.ts       # Manejo del estado de búsqueda, carga y error
│   └── useFavorites.ts   # Manejo del estado global y persistencia de favoritos
├── pages/                # Vistas o pantallas principales de la aplicación
│   ├── FavoritesPage/    # Vista dedicada a los favoritos guardados
│   └── Home/             # Vista principal con buscador y resultados
├── services/             # Servicios e integración externa
│   └── api.ts            # Mapeo y consultas HTTP con Axios a Open Library
├── types/                # Interfaces y definición de tipos
│   └── book.ts           # Modelo de datos de la entidad Book
└── storage/              # Persistencia local mediante localStorage