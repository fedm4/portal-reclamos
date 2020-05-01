# Portal de Reclamos
## Pre-requisitos
1. Instalar yarn
2. Crear un nuevo proyecto de [Firebase](https://firebase.google.com/) 
## Cómo levantar el proyecto
1. ```git clone git@github.com:fedm4/challenge-wingu.git```
2. ```cd challenge-wingu```
3. ```yarn install```
4. Obtener los siguientes datos del proyecto creado en firebase:
    - API_KEY
    - AUTH_DOMAIN
    - DATABASE_URL
    - PROJECT_ID
    - STORAGE_BUCKET
    - MESSAGING_SENDER_ID
    - APP_ID
5. ```cp .env.dist .env```
6. Agregar los datos obtenidos en Firebase y modificar el archivo .env recién creado.
7. Para levantar el proyecto en local ejecutar ```yarn start```. Si el browser no abre el proyecto automáticamente, ingresar a http://localhost:3000



### Deploy
Para hacer deploy, simplemente correr ```yarn build``` y se creará una carpeta ```build/``` para subir a cualquier servidor.