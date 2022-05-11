# Motorway Vehicle database

## Introduction

An API that returns vehicle models from a database

Uses: **Node.js | Express | Sequelize | postgreSQL | Axios**

## Table of Contents

 - [Technologies-Used](#Technologies-Used)
 - [API Used](#API-Used)
 - [Install](#Install)

## Current Status

**Completed** : Database seeded with all currently available models manufactured and sold by Honda in the USA.

## Technologies Used

 - **Node.js** : A back-end JavaScript runtime environment 
 - **Sequelize** : A promise-based Node.js ORM
 - **postgreSQL** : A relational database

## API Used

Data sourced from the NHTSA Product Information Catalog Vehicle Listing at https://vpic.nhtsa.dot.gov/api/.

## Install

1. Install dependencies: <code>npm install</code>
2. Create an .env file with the following key/value pairs:
<code> DB_DEV, DB_DEV_USERNAME, DB_DEV_PASSWORD, DB_DEV_HOST </code>
3. Create vehicle table in your database <code>npx sequelize-cli db:migrate</code>
4. Seed Database <code>npx sequelize-cli db:seed:all</code>
5. Start development server: <code>npm run devstart</code>

## Testing

Route setup at: <code>/api/v1/vehicles/</code>
Insomnia (https://insomnia.rest/) collection file can be found in the api_test folder