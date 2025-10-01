# React + Vite

Este es un proyecto de una aplicación de Retos diarios de creatividad, realizado usando React (Vite, JavaScript). La idea es crear, gestionar y guardar retos personales (como estudiar, hacer deporte, dibujar, etc.).  
Cada reto tiene su título, descripción, categoría, dificultad, progreso y se puede marcar como favorito ❤️

## ✨ Funcionalidades principales

- Crear un reto con:
  - Nombre
  - Descripción
  - Categoría (con iconos 🎨💪📚🌱)
  - Nivel de dificultad (usando un input `range` con etiquetas Fácil / Medio / Difícil)
- Listado de retos creados 📋
- Barra de progreso para cada reto (con botones para avanzar, reiniciar o eliminar).
- Posibilidad de marcar/desmarcar retos como favoritos ❤️.
- Sección aparte para ver los retos favoritos.
- Todo el estado de la aplicación se maneja con useReducer y props (sin bases de datos ni localStorage).

## 📂 Estructura del proyecto
src/
├── components/
│ ├── ChallengeForm/
│ │ ├── ChallengeForm.jsx
│ │ └── ChallengeForm.css
│ ├── ChallengeList/
│ │ ├── ChallengeList.jsx
│ │ └── ChallengeList.css
│ ├── ChallengeCard/
│ │ ├── ChallengeCard.jsx
│ │ └── ChallengeCard.css
│ ├── ProgressBar/
│ │ ├── ProgressBar.jsx
│ │ └── ProgressBar.css
│ ├── Favorites/
│ │ ├── Favorite.jsx
│ │ └── Favorite.css
├── hooks/
│ └── useChallengeForm.js
├── App.jsx
├── App.css
├── main.jsx

🙌 Autora
Proyecto realizado por Mónica Sánchez Carrillo. 