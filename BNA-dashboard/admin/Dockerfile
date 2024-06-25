# Utiliser une image de base Node.js pour le build
FROM node:14 AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installer les dépendances de l'application
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Utiliser une image de base Nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits vers le répertoire de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier le fichier de configuration Nginx personnalisé, si nécessaire
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port que Nginx utilisera
EXPOSE 80

# Commande pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
