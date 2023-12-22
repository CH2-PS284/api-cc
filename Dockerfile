ARG NODE_VERSION=lts
FROM node:${NODE_VERSION}-alpine

# FROM gcr.io/cloud-builders/gcloud

WORKDIR /app

# Salin package.json dan yarn.lock ke dalam direktori kerja
COPY package.json ./

# Install dependensi menggunakan Yarn
RUN npm install

# Salin seluruh kode sumber ke dalam direktori kerja
COPY ./ .

# ENV HOST 0.0.0.0
ENV DB_NAME='capstone'
ENV DB_PORT='3306'
ENV DB_HOST='34.16.40.205'
ENV DB_USER='root'
ENV DB_PASS='password123456789'
ENV SECRET_KEY='Password123'

EXPOSE 5000

# Eksekusi perintah start aplikasi
CMD ["node", "./src/index.js"]