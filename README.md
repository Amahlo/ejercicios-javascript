# Ejercicios Básicos de JavaScript 🚀

Este repositorio contiene una colección de proyectos y ejercicios prácticos desarrollados en JavaScript puro (Vanilla JS). El objetivo principal de este repositorio no es solo resolver algoritmos, sino aplicar buenas prácticas de ingeniería de software desde el frontend.

## 🧠 Enfoque y Buenas Prácticas
Durante el desarrollo de estos ejercicios se aplican los siguientes conceptos:
- **Clean Code:** Naming conventions (camelCase, SCREAMING_SNAKE_CASE), legibilidad y prevención de errores.
- **Modularidad (ES6 Modules):** Uso de `import` y `export` para separar la lógica de negocio de la interfaz de usuario.
- **Principio de Responsabilidad Única (SRP):** Funciones puras e independientes que realizan una sola tarea.

## 📂 Estructura del Proyecto

Cada ejercicio está aislado en su propia carpeta para mantener el contexto limpio:

* **`/profile`** - Conceptos básicos: Declaración de variables (`let`, `const`), tipado dinámico y Template Literals.
* **`/calculadora-restaurante`** - Lógica de negocio y UI: Captura de datos (`prompt`), conversión de tipos (`parseFloat`), validaciones tempranas (`isNaN`) y encapsulamiento en funciones.
* **`/calculadora-basica`** *(En desarrollo)* - Arquitectura modular: Separación de archivos matemáticos y de interfaz utilizando ES6 Modules.

## 🛠️ Tecnologías
- HTML5
- JavaScript (ES6)

## 🚀 Cómo ejecutar los proyectos
Dado que este proyecto utiliza **ES6 Modules** (`type="module"`), no se pueden abrir los archivos HTML directamente en el navegador por políticas de seguridad (CORS). 

Para ejecutarlos localmente:
1. Clona este repositorio.
2. Abre la carpeta del proyecto en Visual Studio Code.
3. Instala la extensión **Live Server**.
4. Haz clic derecho sobre el archivo `index.html` del ejercicio que deseas ver y selecciona "Open with Live Server".