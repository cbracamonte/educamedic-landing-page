# Usa la imagen de Node.js 20
FROM node:20

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala @angular/cli globalmente
RUN npm i -g @angular/cli

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias
COPY package.json pnpm-lock.yaml angular.json ./

# Instala las dependencias
RUN pnpm install

# Run the command to build the application

RUN pnpm run build

# Copia el resto del código de la aplicación en el contenedor
COPY . .

# Expone el puerto 4200 para la aplicación Angular
EXPOSE 4200

# Define el comando por defecto para iniciar la aplicación en modo desarrollo
CMD ["pnpm", "ng", "serve", "--host", "0.0.0.0"]