# Proyecto CRUD Usuarios - Frontend + Backend

Integrantes:
	Leandro de la Fuente
	Gonzalo Carvajal
	Francisco Otárola
	Bastián Romero

## Descripción

Este proyecto implementa un CRUD de usuarios con formularios en frontend y una API REST en backend que conecta con una base de datos MongoDB.

---

## Requisitos

- Node.js instalado (https://nodejs.org/)
- MongoDB instalado y corriendo localmente (https://www.mongodb.com/try/download/community)

---

## Estructura del proyecto

CRUD2/
│
├── backend/            → Código backend (API REST con Node.js + Express)
│   ├── routes/         → Rutas para CRUD
│   │   └── crud.js
│   ├── server.js       → Servidor principal
│   └── package.json    → Configuración del backend
│   └── node_modules/   → Dependencias necesarias (ya incluidas)
│
├── forms/              → Formularios para crear, buscar, actualizar y eliminar usuarios
│   ├── insertar.html
│   ├── insertar-scripts.js
│   ├── buscar.html
│   ├── buscar-scripts.js
│   ├── actualizar.html
│   ├── actualizar-scripts.js
│   ├── borrar.html
│   ├── borrar-scripts.js
│
├── index.html          → Página principal (menú)
└── README.md           → Este archivo

---

## Instrucciones para ejecutar el proyecto

1. Asegúrate de tener MongoDB corriendo localmente:

   	- Abre una terminal nueva y ejecuta:

    	 ```
    	 mongod
    	 ```

2. Abre otra terminal, entra a la carpeta `backend` y ejecuta el servidor con el siguiente comando:

	node server.js


	El servidor quedará disponible en `http://localhost:3000`

3. Abre el archivo `index.html` desde la carpeta principal `CRUD2` en tu navegador.

	- Puedes hacer doble clic o arrastrarlo al navegador.

