# Notas y comandos del curso

- Se usará Angular CLI:

|Comando|Explicación|
|:----------|:-----------|
|`ng --version`|Comprobar la versión de Angular CLI.<br>https://angular.io/cli/version|
|`ng new nombre_proyecto`|Crear un nuevo proyecto en el directorio actual.<br>https://angular.io/cli/new|
|`ng serve`|Construir e iniciar el proyecto. Con `-o` ordenamos que se abra al acabar.<br>https://angular.io/cli/serve|
|||
|||

- Explicación breve de algunos ficheros del directorio raíz del proyecto:
  
|Fichero|Explicación|
|:----------|:-----------|
|`tsconfig.json`|Configuraciones de TypeScript en este proyecto.|
|`tsconfig.spec.json`|Añade funcionalidades para pruebas (tests) al fichero `tsconfig.json`.|
|`tsconfig.app.json`|Añade funcionalides para el proyecto al fichero `tsconfig.json`.
|`package.json`|Incluye los paquetes y dependencias del proyecto. Se genera automáticamente.|
|`package-lock.json`|Generado automáticamente.|
|`karma.conf.js`|Configuraciones para las pruebas unitarias basadas en <i>Karma</i>.|
|`angular.json`|Contiene configuraciones importantes del proyecto (entre ellas: favicon, assets, styles, etc...).|
|`.editorconfig`|Definición de algunas reglas del editor.|
|`.browserslistrc`|Se usa en caso de querer incrementar la compatibilidad con Internet Explorer, por ejemplo.|
|`/src`|Carpeta principal (source) del proyecto.|

- Explicación breve de algunos ficheros de la carpeta `/src`:
  
|Fichero|Explicación|
|:----------|:-----------|
|`/app/app.component.spec.ts`|Ficheros para pruebas (no los usaremos en este curso).|
|`/app/app.component.ts`|Clase de TypeScript.|
|`/app/app.module.ts`|Clase con un decorador especial.|
|`/assets`|Contendrá recursos estáticos que no se compilarán (imágenes, sonidos, etc...).|
|`/environments`|Ficheros que contendrán las variables de entorno (ya sea de producción o desarrollo).|
|`polyfills.ts`|Ayuda a tener una mejor compatibilidad con los navegadores web. Por lo normal no debe tocarse.|
|`styles.css`|Estilos globales que se aplicarán a nivel general en todo el proyecto.|
|`test.ts`|Configuración del entorno de pruebas.|
