# Despliegues rápidos a producción (Netlify)

<https://www.netlify.com/>

Se detallará cómo generar el build de producción de una aplicación y desplegarla en la web usando Netlify.
El proceso de despliegue en otros servidores es el mismo: tomar nuestra carpeta DIST (que contiene la aplicación con archivos HTML, CSS y JS) y desplegarla mediante FTP (preferiblemente sFTP) en el hosting deseado.

## Generar build de producción
1. Abrir proyecto en VSCode y ejecutarlo con `ng serve -o` para asegurarnos que funciona correctamente y sin errores.
2. Al hacer el build, Angular eliminará todos los comentarios para que no estén en producción.
3. Cerrar el proyecto y ejecutar, en la raíz del mismo, `ng build --prod` (esto generará la versión de producción).
4. Esto creará la carpeta DIST dentro del proyecto, la cual contendrá el build generado.

## Desplegar en Netlify
1. Entrar a Netlify e iniciar sesión.
2. Cogemos el build de la carpeta /dist y lo arrastramos a Netlify y dejamos que cargue.
3. Hacemos click en el enlace que facilita Netlify y listo.
