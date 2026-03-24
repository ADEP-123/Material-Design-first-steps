# EduPanel

Dashboard educativo construido con **React + Material UI**, basado en los principios de **Material Design 3**. Implementa un layout list-detail adaptativo con navegación responsiva, sistema de color centralizado y componentes MUI.

---

## Requisitos previos

Asegúrate de tener instalado lo siguiente antes de continuar:

| Herramienta | Versión mínima | Verificar con |
|-------------|---------------|---------------|
| Node.js | 18.x o superior | `node -v` |
| npm | 9.x o superior | `npm -v` |
| Git | cualquiera | `git --version` |

---

## Clonar el repositorio

```bash
git clone https://github.com/ADEP-123/Material-Design-first-steps.git
cd edupanel
```

---

## Instalar dependencias

```bash
npm install
```

Esto instalará automáticamente todas las dependencias declaradas en `package.json`, incluyendo:

- `react` y `react-dom`
- `@mui/material` — componentes de Material UI
- `@mui/icons-material` — íconos de Material Design
- `@emotion/react` y `@emotion/styled` — motor de estilos requerido por MUI

> Si ves advertencias de versiones (`peer dependency warnings`), puedes ignorarlas con seguridad, no afectan el funcionamiento.

---

## Levantar la aplicación

```bash
npm start
```

La aplicación estará disponible en:

```
http://localhost:3000
```

Para detener el servidor de desarrollo, presiona `Ctrl + C` en la terminal.

---

## Estructura del proyecto

```
src/
├── App.jsx                          # Raíz de la aplicación
├── theme/
│   ├── index.js                     # Tema MUI con createTheme
│   └── palette.js                   # Colores y roles por categoría
├── data/
│   ├── courses.js                   # Cursos mock (sin backend)
│   └── navigation.js                # Ítems del menú de navegación
├── utils/
│   ├── categoryHelpers.js           # Colores por categoría de curso
│   └── avatarHelpers.js             # Color de avatar por nombre
├── hooks/
│   └── useCourseFilter.js           # Lógica de filtrado y selección
└── components/
    ├── layout/
    │   ├── MainLayout.jsx           # Wrapper raíz del layout
    │   ├── TopBar.jsx               # Barra superior (AppBar)
    │   ├── Sidebar.jsx              # Panel lateral (desktop)
    │   └── BottomNav.jsx            # Navegación inferior (móvil)
    └── courses/
        ├── CourseList.jsx           # Panel izquierdo: lista de cursos
        ├── CourseCard.jsx           # Tarjeta individual de curso
        ├── CourseDetail.jsx         # Panel derecho: detalle del curso
        └── EmptyState.jsx           # Estado vacío (sin resultados)
```

---

## Cómo interactuar con la interfaz

### Navegación principal

- **En desktop y tablet** — usa el panel lateral izquierdo para moverte entre las secciones: Inicio, Cursos, Calendario y Perfil.
- **En móvil** — la navegación lateral se reemplaza por una barra inferior fija con los mismos destinos. Toca cada ícono para cambiar de sección.

### Explorar cursos

1. Al cargar la aplicación verás la lista de cursos en el panel izquierdo (o en pantalla completa en móvil).
2. Cada tarjeta muestra el **título**, la **categoría**, el **instructor**, el **estado** del curso y una **barra de progreso**.
3. Haz clic en cualquier tarjeta para seleccionarla — se resaltará con un borde de color primario.

### Ver el detalle de un curso

- **En desktop/tablet** — al seleccionar una tarjeta, el panel derecho se actualiza inmediatamente con toda la información del curso: descripción, progreso, instructor, tecnologías y botones de acción.
- **En móvil** — al tocar una tarjeta, la lista desaparece y se muestra el detalle en pantalla completa. Usa el botón **← Volver a cursos** (en la parte superior) para regresar a la lista.

### Buscar cursos

- Escribe en el campo **"Buscar cursos..."** del encabezado para filtrar la lista en tiempo real.
- La búsqueda funciona por **título** y por **categoría** (ej: escribe "Datos" o "React").
- Si no hay resultados, aparece un estado vacío con un mensaje informativo.
- Borra el campo para restaurar la lista completa.

### Acciones dentro del detalle

| Botón | Comportamiento |
|-------|---------------|
| **Continuar** | Acción principal del curso (en cursos completados cambia a "Revisar") |
| **Ver recursos** | Acción secundaria para acceder al material del curso |

> Nota: estos botones no tienen navegación real ya que la aplicación usa datos mock sin backend. Son funcionales visualmente para demostrar la jerarquía de acciones de Material Design 3.

### Botón "Nuevo curso"

- Ubicado en el encabezado superior, a la derecha.
- En móvil se comprime y muestra solo "Nuevo".
- Actualmente no abre ningún formulario (la funcionalidad puede extenderse conectando un estado o un dialog de MUI).

---

## Comportamiento responsivo

| Tamaño de pantalla | Navegación | Layout de cursos |
|--------------------|-----------|-----------------|
| **Móvil** (< 600px) | BottomNavigation fija | Una columna: lista → detalle alternados |
| **Tablet** (600–900px) | Drawer lateral permanente | Una columna ampliada |
| **Desktop** (> 900px) | Drawer lateral permanente | Dos columnas: lista fija + detalle flexible |

Puedes probar el comportamiento responsivo directamente en el navegador con las **DevTools** (`F12` → ícono de dispositivo móvil) y cambiando el ancho de la ventana.

---

## Personalizar los datos

Los cursos son datos mock definidos en `src/data/courses.js`. Para agregar, editar o eliminar cursos, modifica el array `COURSES` directamente en ese archivo. Cada objeto de curso tiene la siguiente estructura:

```js
{
  id: 1,
  title: "Nombre del curso",
  category: "Diseño",          // Diseño | Desarrollo | Datos | Marketing | Arte
  instructor: "Nombre Apellido",
  duration: "24 horas",
  progress: 72,                // 0–100
  status: "En progreso",       // "En progreso" | "Completado" | "Nuevo"
  statusColor: "primary",      // "primary" | "success" | "warning"
  rating: 4.8,
  tags: ["Figma", "UX"],
  description: "Descripción del curso...",
  lessons: 32,
  enrolled: 1240,
}
```

---

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo (Vite) |
| `npm run build` | Genera el build de producción en `/dist` |
| `npm run preview` | Previsualiza el build de producción localmente |
| `npm start` | Inicia el servidor de desarrollo (Create React App) |

---

## Tecnologías utilizadas

- [React 18](https://react.dev/)
- [Material UI v5](https://mui.com/)
- [Material Design 3](https://m3.material.io/)
- [Vite](https://vitejs.dev/) *(o Create React App según la configuración del proyecto)*

---

## Autor

**Andrés David Elizalde Peralta** — Ingeniería de Software, Universidad de Santander (UDES)  
Asignatura: Interacción Hombre Computador · 2026