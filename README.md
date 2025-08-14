
# Proyecto React Native + Backend Luces/Puertas 💡🚪

Este proyecto es una **aplicación móvil completa** desarrollada con **React Native** para el frontend y **Node.js / Express** para el backend, que permite controlar **luces y puertas** de manera remota desde un dispositivo móvil.

---

## 🗂 Estructura principal del proyecto

```

proyectoCLASE
│
├── client/           # Aplicación móvil en React Native
│   ├── android/      # Archivos del proyecto Android
│   ├── ios/          # Archivos del proyecto iOS
│   └── src/          # Código fuente de la app
│       ├── context/  # Contextos globales (ej. login)
│       ├── screen/   # Pantallas de la app (login, home, settings, etc.)
│       └── usuarios/ # Funcionalidades relacionadas con usuarios
│
├── server/           # Backend Node.js / Express
│   ├── src/
│   │   ├── BD/       # Configuración de base de datos
│   │   ├── molulos/  # Rutas y controladores (clientes, luces, puertas, users)
│   │   └── red/      # Configuración de red / sockets (si aplica)
│   └── node\_modules/
│
├── package.json
├── package-lock.json
└── README.md

````

---

## ⚙️ Instalación y ejecución

### 1️⃣ Backend
```bash
cd server
npm install
````

Configura tu archivo `.env` con los valores necesarios (puerto, base de datos, etc.), luego inicia el servidor:

```bash
node src/index.js
# o si usas nodemon
nodemon src/index.js
```

El servidor correrá en `http://0.0.0.0:4000` (asegúrate de que tu dispositivo móvil esté en la **misma red WiFi** para conectar desde Expo Go).

---

### 2️⃣ Frontend (React Native / Expo)

```bash
cd client
npm install
```

Inicia la app con Expo:

```bash
npx expo start
```

Esto abrirá **Metro Bundler**. Escanea el QR desde **Expo Go** en tu dispositivo móvil para probar la app.

---

## 🚀 Funcionalidades principales

* Login y registro de usuarios
* Control de luces y puertas desde la app
* Navegación entre pantallas: Home, Login, Settings, Acerca de
* Gestión de usuarios desde frontend y backend
* Comunicación con backend vía **HTTP / API REST**

---

## 📝 Notas importantes

* **IP y puerto:** Asegúrate de que el backend escuche en `0.0.0.0` para permitir conexiones externas.
* **Red:** El dispositivo móvil y el servidor deben estar en la **misma red WiFi**.
* **CORS:** El backend utiliza CORS para permitir peticiones desde la app.
* **Errores comunes:** Si `fetch` falla con `Network request failed`, revisa que el backend esté encendido y accesible desde tu red.

---

## 💻 Tecnologías utilizadas

* **Frontend:** React Native, Expo, React Context, React Native Paper
* **Backend:** Node.js, Express, CORS
* **Base de datos:** MySQL / MariaDB (según configuración en `server/src/BD`)
* **Otros:** JSON, fetch API, manejo de estado global

---

## 📌 Cómo contribuir

1. Haz un fork del repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Realiza tus cambios y haz commit: `git commit -m "Descripción de cambios"`
4. Sube tu rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

