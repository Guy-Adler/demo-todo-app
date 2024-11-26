# DevOps Onboarding

## Goals:

- Learn how to containerize frontend & backend code written in **TypeScript** and **NodeJS**
- Learn how to set up a **local environment** using **docker-compose**

## Things to do:

1. Create a Dockerfile for the backend
2. In [client/src/api/todos.ts](client/src/api/todos.ts), fill the `<server-container-name>` and `<server-container-port>` with appropriate values (this will be the route the frontend container sends HTTP requests to).
3. Create a Dockerfile for the frontend
4. Using docker-compose, set up a local environment that runs the containers.
5. (extra): Add a reverse proxy container using **nginx** that allows the requests from the frontend to be to `/api` instead of `http:<container-name>:<container-port>/api`, and allows you to only expose the nginx container locally.

## Keywords to Search & Understand

- NodeJS
  - NPM
  - package.json, package-lock.json
- TypeScript
  - Differences from JavaScript
  - `tsconfig.json`
  - `esm`, `commonjs`
  - `tsc`, `esbuild`
  - `vite`
- Docker
  - Docker Desktop for Windows
  - `docker-compose.yaml`, `docker compose`
