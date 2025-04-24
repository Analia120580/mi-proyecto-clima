# Corrección del Proyecto de Consulta del Clima

Este archivo documenta las malas prácticas identificadas en el código original del proyecto y las soluciones aplicadas para mejorar su funcionalidad, estructura y mantenibilidad.

---

## 1. Inclusión incorrecta del archivo JavaScript

### ❌ Mala práctica:
El archivo `main.js` estaba siendo abierto directamente en el navegador (por ejemplo: `localhost/CORRECCION_CLIMA/main.js`) en lugar de ejecutarse como parte del `index.html`.

### 💡 ¿Por qué es una mala práctica?
El archivo `main.js` no está diseñado para ser visualizado directamente, sino para ejecutarse dentro del contexto del HTML.

### ✅ Solución aplicada:
Se vinculó correctamente el archivo JS desde el `index.html` con la línea:
```html
<script src="main.js"></script>

