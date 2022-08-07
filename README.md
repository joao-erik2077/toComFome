# To Com Fome
NodeJS, Express, MySQL RESTful API.

## Requirements
- NodeJS
- npm
- MySQL

## Installation
- First clone the project
``` bash
git clone https://github.com/joao-erik2077/toComFome.git
```
- Then install dependencies
```bash
npm install
```
- Finally, run this project
```bash
npm start
```

## Http Requisitions
> `GET` /restaurante
> Returns a list of all restaurants

> `GET` /restaurante/{id}
> Returns restaurant based on id

> `POST` /restaurante
> Insert the restaurant
> `BODY`
> ```json
> {
>   "cnpj": "XX.XXX.XXX/XXXX-XX",
>   "nome": "Restaurante",
>   "telefone": "XX XXXXX-XXXX",
> }
> ```

> `PUT` /restaurante/{id}
> Update all restaurant data based on id
> `BODY`
> ```json
> {
>   "cnpj": "XX.XXX.XXX/XXXX-XX",
>   "nome": "Restaurante",
>   "telefone": "XX XXXXX-XXXX",
> }
> ```

> `DELETE` /restaurante/{id}
> Excludes restaurant based on id

## MySQL Tables
> ##### RESTAURANTES
> ```sql 
> id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
> cnpj VARCHAR(18) NOT NULL,
> nome VARCHAR(255) NOT NULL,
> telefone VARCHAR(13)
> ```