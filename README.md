# Parcial II

Aplicación React Native y Expo hecha por Martin Silva

## Requisitos Previos

Necesitarás tener instalado:
- Node.js
- npm o yarn
- Expo Go en tu dispositivo móvil (opcional)

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd parcial-II
```

2. Instala las dependencias:
```bash
npm install
```

3. Instala las librerías necesarias:
```bash
npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-paper
```

## Librerías Utilizadas

El proyecto utiliza las siguientes librerías:

- **@react-navigation/native & @react-navigation/native-stack**: 
  Para manejar la navegación entre pantallas de la aplicación

- **react-native-screens & react-native-safe-area-context**: 
  Requeridas por React Navigation para un funcionamiento correcto

- **react-native-paper**: 
  Proporciona componentes de UI prediseñados siguiendo Material Design

## Cómo Ejecutar la Aplicación

1. Inicia el servidor de desarrollo:
```bash
npx expo start
```

2. Opciones para ejecutar:
   - Escanea el código QR con Expo Go en tu celular
   - Presiona 'a' para abrir en emulador de Android
   - Presiona 'i' para abrir en simulador de iOS (solo Mac)

## Estructura del Proyecto

```
app/
├── _layout.tsx             # Layout principal
├── +not-found.tsx          # Pantalla 404
├── (tabs)/                 # Grupo de tabs
│   ├── _layout.tsx         # Configuración de tabs
│   ├── index.tsx           # Lista de equipos
└── team/                   # Rutas de equipos
    ├── update/             # Grupo de actualización
    │   └── [teamid].tsx    # Actualizar equipo específico
    ├── [id].tsx            # Detalles del equipo
    └── add.tsx             # Agregar equipo nuevo
```
