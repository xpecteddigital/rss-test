# Utiliser une image Node.js 20
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source dans le conteneur
COPY . .

# Exécuter l'application
CMD ["npm", "start"]
