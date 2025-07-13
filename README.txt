# Proyecto CRUD Usuarios - Frontend + Backend

Integrantes:
	Leandro de la Fuente
	Gonzalo Carvajal
	Francisco Otárola
	Bastián Romero

## Descripción

Este proyecto implementa un CRUD de usuarios con formularios en frontend y una API REST en backend que conecta con una base de datos MongoDB.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Requisitos

- Node.js instalado
	node -v (abre una terminal y ejecuta este comando para ver la vesion de node.js, si no aparece nada o manda error es que no cuentas con node.js)
- MongoDB instalado y corriendo localmente
	mongo --version (lo mismo que node pero para saber la version de mongo)

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Estructura del proyecto

Trabajo-front-CRUD-nodeJS-y-MongoDB-main/
│
├── backend/            → Código backend (API REST con Node.js + Express)
│   ├── routes/         → Rutas para CRUD
│   │   └── crud.js
│   ├── server.js       → Servidor principal
│   └── package.json    → Configuración del backend
│   
├── forms/              → Formularios para crear, buscar, actualizar y eliminar usuarios
│   ├── insertar.html
│   ├── insertar-scripts.js
│   ├── insertar-styles.css
│   ├── buscar.html
│   ├── buscar-scripts.js
│   ├── buscar-styles.css
│   ├── actualizar.html
│   ├── actualizar-scripts.js
│   ├── actualizar-styles.css
│   ├── borrar.html
│   ├── borrar-scripts.js
│   ├── borrar-styles.css
│
├── index.html          → Página principal (menú)
├── index-style.css	→ Estilos pagina principal
└── README.txt          → Este archivo

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instrucciones para ejecutar el proyecto

1. Asegúrate de tener MongoDB corriendo localmente:

   	- Abre una terminal nueva y ejecuta:

    	 mongod

2. Entra a la carpeta `backend`, abre otra terminal (click derecho abrir terminal dentro de la carpeta) y ejecuta el servidor con el siguiente comando:

	npm install (descarga y prepara las librerias del proyecto)
	node server.js

	El servidor quedará disponible en `http://localhost:3000`

3. Abre el archivo `index.html` desde la carpeta principal `Trabajo-front-CRUD-nodeJS-y-MongoDB-main` en tu navegador.

	- Puedes hacer doble clic o arrastrarlo al navegador.

