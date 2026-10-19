# Gym Command Center 🏋️

Entrenador personal digital en React + TypeScript + Vite. Interfaz responsive en español, diseñada para consultarse durante el entrenamiento desde un móvil.

## Funcionalidades
- Semana de lunes a viernes configurable desde la app; sábado y domingo quedan para recuperación opcional.
- Cinco sesiones de ejemplo con calentamiento, técnica, errores frecuentes y alternativas.
- Modo entrenamiento: series marcables, peso/repeticiones por serie, descanso con temporizador, sustitución de ejercicios y resumen.
- Persistencia local en `localStorage`; al recargar se conserva el estado.
- Biblioteca con filtros por músculo y equipamiento.
- Historial, volumen estimado, sesiones semanales y récords locales.
- Sugerencias prudentes de progresión: cuando completas el rango alto en todas las series, propone valorar un pequeño aumento; nunca cambia la carga automáticamente.
- Ajustes de rutina y controles de datos.

## Requisitos
Node.js 20+ recomendado y npm.

## Ejecutar
```bash
npm install
npm run dev
```
Abre la URL local que muestra Vite.

## Compilar y probar
```bash
npm run build
npm test
npm run preview
```

## Publicar en GitHub Pages
1. Crea un repositorio llamado `gym-command-center` y sube todo el contenido del proyecto (no solo `index.html`).
2. En GitHub, abre **Settings → Pages** y selecciona **GitHub Actions** como fuente.
3. El workflow `.github/workflows/deploy.yml` compila y publica al hacer push a `main`.
4. URL esperada: `https://TU-USUARIO.github.io/gym-command-center/`.

El `base` de Vite está configurado para el nombre de repositorio `gym-command-center`. Si usas otro nombre, actualiza `vite.config.ts` y la ruta del workflow.

## Estructura
- `src/data.ts`: rutina semanal y biblioteca de ejercicios.
- `src/types.ts`: tipos TypeScript.
- `src/main.tsx`: aplicación, estado y vistas.
- `src/styles.css`: tema visual responsive.
- `src/core.test.ts`: pruebas de lógica básica.
- `.github/workflows/deploy.yml`: compilación y despliegue.

## Nota de salud
Las cargas y los volúmenes son sugerencias generales, no prescripción médica. Prioriza la técnica, deja aproximadamente 1–3 repeticiones en reserva en la mayoría de series, y adapta o suspende cualquier ejercicio que provoque dolor agudo. El programa no diagnostica ni sustituye a un profesional.
