# Pizzería Mamma Mia!

Hito 1 - Introducción a React · Hito 2 - Estado de los componentes y eventos | Desafío Latam - Fullstack JS

## Accesos al proyecto

 Demo en vivo (vercel) **[pizzeria-mama-mia-one.vercel.app](https://pizzeria-mama-mia-one.vercel.app/)** |


## Descripción

Landing page de una pizzería desarrollada con **React + Vite**. Muestra un menú de pizzas cargado mediante *props*, un navbar con estado simulado de sesión y un footer institucional.

## Componentes

```
App.jsx
├── Navbar.jsx      → menú de navegación, variables `total` y `token`
├── Home.jsx
│   ├── Header.jsx  → título y descripción de la pizzería
│   └── CardPizza.jsx (x3) → nombre, precio, ingredientes e imagen (vía props)
├── Register.jsx    → formulario de registro con validaciones (useState)
├── Login.jsx       → formulario de login con validaciones (useState)
│   └── Message.jsx → alerta de éxito/error, visible solo cuando hay mensaje
└── Footer.jsx      → derechos reservados
```

- **Navbar.jsx**: botones Home y Total (siempre visibles) + Login/Register o Profile/Logout según la variable booleana `token`. El total se formatea con separador de miles usando `toLocaleString`.
- **CardPizza.jsx**: Recibe `name`, `price`, `ingredients` e `img` por props, usado 3 veces desde `Home.jsx`.
- **utils/helpers.js**: función `formatPrice` reutilizada en `Navbar` y `CardPizza`.

## Tecnologías

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)

## Cómo correr el proyecto en local

```bash
git clone https://github.com/cesarscl/pizzeria-mamma-mia.git
cd pizzeria-mamma-mia
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Otros scripts

```bash
npm run build     # genera la versión de producción en /dist
npm run preview   # sirve la build de producción localmente
npm run lint      # revisa el código con ESLint
```

## Requerimientos del Hito 1

- [x] `App.jsx` muestra `Navbar`, `Home` y `Footer`
- [x] `Header.jsx` con título y descripción, llamado desde `Home.jsx`
- [x] `Navbar.jsx` con menú Home, Profile, Logout, Login, Register y Total
- [x] Botones Home y Total visibles independientemente del `token`
- [x] `CardPizza.jsx` recibe nombre, precio, ingredientes e imagen por props
- [x] `Footer.jsx` con el texto de derechos reservados

## Requerimientos del Hito 2

- [x] `Register.jsx` con campos Email, Contraseña y Confirmar contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Contraseña y confirmación deben coincidir
  - Muestra mensaje de éxito o de error al enviar
- [x] `Login.jsx` con campos Email y Contraseña
  - Todos los campos obligatorios
  - Contraseña de al menos 6 caracteres
  - Muestra mensaje de éxito o de error al enviar
- [x] Los botones Home, Login y Register del `Navbar` cambian la vista mostrada en `App.jsx` (estado `view`)

## Autor

Cesar — Desafío Latam, Fullstack JS, Módulo 04
