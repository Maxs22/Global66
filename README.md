# pokemon

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Crear un archivo .env en la raiz del proyecto con la siguiente estructura
```
VUE_APP_API_BASE_URL=https://pokeapi.co/api/v2
```

### Aplicación de Lista de Pokémon

Descripción General
```

Esta aplicación es una lista de Pokémon basada en Vue.js que permite a los usuarios buscar Pokémon, filtrar favoritos y ver información detallada sobre cada Pokémon. Está diseñada para manejar grandes conjuntos de datos de manera eficiente mientras mantiene una experiencia de usuario fluida y receptiva.
Tecnologías Utilizadas
```

### Frontend
### Vue.js (Vue 2)
     Por qué: Vue.js es un framework de JavaScript progresivo que es accesible, versátil y de alto rendimiento. Permite desarrollar aplicaciones de una sola página complejas con facilidad.
     Componentes: La aplicación se divide en componentes reutilizables de Vue (PokemonList, ModalPokemon, SelectedFavorites, LoadingPoke).
     ```
 ### Vuex
     Por qué: Vuex es un patrón y biblioteca de gestión de estado para aplicaciones Vue.js. Sirve como una tienda centralizada para todos los componentes de una aplicación, con reglas que aseguran que el estado solo se puede mutar de manera predecible.
     Uso: Gestión de datos de Pokémon, manejo de favoritos y seguimiento del estado de carga.
     ```
 ### BootstrapVue
     Por qué: BootstrapVue proporciona un conjunto rico de componentes de Bootstrap 4 y un sistema de cuadrícula para Vue.js, permitiendo un diseño de interfaz de usuario consistente y receptivo.
     Componentes Utilizados: <b-container>, <b-row>, <b-col>, <b-form>, <b-input-group>, <b-button>, <b-card>.
     ```
 ### Vue Router
     Por qué: Vue Router es el enrutador oficial para Vue.js. Se integra profundamente con el núcleo de Vue.js para facilitar la construcción de aplicaciones de una sola página con Vue.js.
     Uso: Gestión de rutas de la aplicación.
     ```
### Axios
 Por qué: Axios es un cliente HTTP basado en promesas para el navegador y Node.js. Permite realizar solicitudes HTTP desde el navegador y manejar respuestas de manera eficiente.
 Uso: Realización de solicitudes a la API de Pokémon.
 ```
 ### CSS
 ### Estilos con Alcance (Scoped Styles)
     Por qué: Los estilos con alcance en los componentes de Vue aseguran que los estilos solo se apliquen al componente en el que están definidos, evitando efectos secundarios no deseados y conflictos globales de CSS.
     Animación de Carga: Se utiliza una simple animación de fotogramas clave de CSS para animar la Pokébola durante el estado de carga.
     ```