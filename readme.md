# Challenge 

Este challenge está realizado para Conexa.

##  Instalación

Para instalar las dependencias correr 

```bash
npm install
```
El proyecto está realizado para ser probado mediante Postman. 

Se deberá levantar el servicio de Busisnees y LogIn por separado ejecutando
```bash
node app
```
en cada una de las carpetas.

## Rutas
  
   Registrar un usuario http://localhost:3000/logIn/addUser
   recibe por body "email" y "password".
   
   Autenticación de usuario http://localhost:3000/logIn/chek
   Recibe por body los mismos datos "email" y "password" y devuelve un mensaje y Token.
   
   Listar usuarios http://localhost:3000/logIn/listUsers
   Recibe por headers "emailchek" (con el que se inició sesión) y "authorization" (Token), además
   puede recibir por body un email para buscar de manera no sensitiva.
    
