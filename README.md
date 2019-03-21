# rocketseat-gostack5-gonode-modulo4

API REST desenvolvida utilizando a framework AdonisJS do NodeJS. Produto do módulo 4 de NodeJS do bootcamp da Rocketseat, GoStack 5.

CRUDs, autenticação, envio de e-mails, filas de processos (Kue & Redis) e validação de requisições.

# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
