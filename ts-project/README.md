# comando de tsc

- comando para conocer la version

npx tsc typescript

- Comando para transpilar codigo Typescript a Javascript.

npx tsc src/<filename>

- Comando para transpilar codigo Typescript a Javascript especificando el emacScript.

npx tsc src/<filename> --target es6


- Comando para transpilar codigo Typescript a Javascript especificando el emacScript y carpeta en cual guardar.

npx tsc src/<filename> --target es6 --outDir dist/

Notas: Node y browser no leen directamente typescript.
Por defecto target es ES3


- comando para inicializar tsconfig.json

npx tsc --init

- comando para transpilar codigo Typescript a Javascript tomando todo, despues de la configuración.

npx tsc

- comando para transpilar codigo Typescript a Javascript y dejarlo corriendo.

npx tsc --whatch

