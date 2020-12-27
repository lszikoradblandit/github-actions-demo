# Utilizamos la imagen base node 14 con la versión buster de Debian.
FROM node:14-buster-slim
# Seteamos la variable de entorno PORT para que el servicio esté publicado en dicho puerto.
ENV PORT=80
# Creamos y seteamos como directorio de trabajo /app
WORKDIR /app
# Copiamos los archivos package.json y package-lock.json
COPY package*.json /app/
# Instalamos dependencias
RUN npm install
# Copiamos el contenido del directorio /curso-docker-base/backend en /app
# Recordar que el directorio node_modules no debe ser copiado ya que se obtiene del stage anterior, por eso utilizamos el archivo .dockerignore
COPY ./ /app/
# Seteamos como punto de entrada o ejecución, el comando para iniciar el server backend
ENTRYPOINT npm start
# Por último documentamos en qué puerto está expuesto el servicio
EXPOSE 80