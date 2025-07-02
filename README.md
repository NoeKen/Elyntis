# 🌀 Elyntis Monorepo

> Monorepo **Next.js + NestJS + Prisma** propulsé par **Turborepo**  

![Licence MIT](https://img.shields.io/badge/License-MIT-blue.svg)

Elyntis réunit un **frontend** React/Next.js et un **backend** NestJS connectés à une base **PostgreSQL** via **Prisma**. Le tout est organisé avec **Turborepo** pour des builds rapides, un cache intelligent et une expérience DX fluide.

---

## 🚀 Mise en route rapide

```bash
# 1. Installer toutes les dépendances
yarn install

# 2. Lancer Postgres en conteneur (facultatif mais recommandé)
docker run -d   --name elyntis-postgres   -e POSTGRES_USER=elyntisuser   -e POSTGRES_PASSWORD=changeme   -e POSTGRES_DB=elyntisdb   -p 5432:5432   postgres:latest

# 3. Copier / adapter la configuration d’environnement
cp apps/api/.env.example apps/api/.env

# 4. Démarrer le monorepo (frontend + backend simultanés)
yarn dev
```

---

## 📁 Arborescence

```
elyntis/
├── apps/
│   ├── web/        # Frontend – Next.js (TypeScript, Tailwind)
│   └── api/        # Backend – NestJS (TypeScript, Prisma)
├── packages/       # Librairies partagées (UI, utils…)
├── turbo.json      # Pipelines Turborepo
└── package.json    # Workspaces Yarn
```

---

## 🧰 Pile technique

| Couche              | Outils / Frameworks                           |
| ------------------- | --------------------------------------------- |
| **Frontend**        | Next.js 14 • React • TypeScript • TailwindCSS |
| **Backend**         | NestJS 10 • Prisma ORM                        |
| **Base de données** | PostgreSQL 15                                 |
| **Dev & CI**        | Turborepo • ESLint • Prettier • Husky         |

---

## 🔧 Scripts principaux

| Commande                      | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `yarn dev`                    | Démarre **web** et **api** en mode dev (watch)   |
| `yarn build`                  | Build de **tous** les apps/packages              |
| `yarn turbo … --filter=web`   | Exécute une tâche Turborepo sur un seul projet    |
| `yarn lint`                   | Lint + format check                               |
| `yarn prisma migrate dev`     | Applique les migrations dans `apps/api`          |
| `yarn prisma studio`          | Ouvre Prisma Studio (UI base de données)         |

---

## 🔐 Variables d’environnement (API)

```
# apps/api/.env
DATABASE_URL="postgresql://elyntisuser:changeme@localhost:5432/elyntisdb?schema=public"
```

N’oublie pas de créer le fichier `.env` (ou d’utiliser celui d’exemple) **avant** d’exécuter les migrations Prisma.

---

## 🧬 Prisma & Base de données

```bash
# Générer le client Prisma
cd apps/api
yarn prisma generate

# Appliquer la première migration
yarn prisma migrate dev --name init

# Visualiser / éditer les données
yarn prisma studio
```

---

## 🚅 Cache distant (optionnel)

Active le cache partagé Vercel pour accélérer les builds CI/CD :

```bash
yarn turbo login   # une seule fois
yarn turbo link    # dans la racine du repo
```

---

## 📚 Liens utiles

- [Turborepo Docs](https://turbo.build/repo/docs)
- [Next.js Docs](https://nextjs.org/docs)
- [NestJS Docs](https://docs.nestjs.com/)
- [Prisma Docs](https://www.prisma.io/docs)
- [PostgreSQL](https://www.postgresql.org/)

---

## 📝 Licence

Distribué sous licence **MIT**.  
© 2025 — Projet Elyntis
# Elyntis
