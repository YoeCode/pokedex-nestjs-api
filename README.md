<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
npm install
```
3. Tener nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Reconstruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```
6. Clonar archivo __.env.template__ y renombrar la copia a __.env__

7. Llenar las variables de entonrno definidas en el __.env__

8. Ejecutar la aplicación en dev: 

```
npm run start:dev
```



## Stack usado

* MongoDB
* Nest

# Build de producción
1. Crear el archivo ```.env.prod```
2. Rellenar las variables de entorno en prod
3. Crear la nueva imagen
```
docker compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```