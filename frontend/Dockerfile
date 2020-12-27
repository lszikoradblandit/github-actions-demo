# Utilizamos la imagen base node 14 con la versión buster de Debian.
# Nombramos esta etapa como build-stage para poder llamarla luego.
FROM node:14-buster-slim as build-stage
# Creamos y seteamos como directorio de trabajo /app
WORKDIR /app
# Copiamos los archivos package.json y package-lock.json
COPY package*.json /app/
# Instalamos dependencias
RUN npm install
# Copiamos el contenido del directorio /curso-docker-base/backend en /app
# Recordar que el directorio node_modules no debe ser copiado ya que se obtiene del stage anterior, por eso utilizamos el archivo .dockerignore
COPY ./ /app/
# Construimos la aplicación React
RUN npm run build
# -------------- FIN ETAPA CONSTRUCCIÓN --------------
# Utilizamos como imagen base la version 1.19 de Nginx en su versión alpine.
FROM nginx:1.19-alpine
# Copiamos el contenido React creado por la etapa de construcción en el directorio que usa Nginx para servir el contenido
COPY --from=build-stage /app/build/ /usr/share/nginx/html
# Sobreescribimos el archivo de configuración que utiliza Nginx por el que creamos nosotros
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
# Utilizaremos el CMD que ya utiliza la imagen de Nginx, por lo tanto no vamos a especificar el comando CMD o ENTRYPOINT

