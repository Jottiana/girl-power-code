# 🚀 Girl Power Code

**Girl Power Code** est une application web éducative destinée aux jeunes filles de **7 à 13 ans**, conçue pour les initier à la **programmation informatique** et leur faire découvrir les **femmes inspirantes** de la tech.  

🌟 L’objectif est d’encourager la nouvelle génération à s’intéresser aux métiers du numérique à travers **des jeux interactifs** et **des portraits de figures emblématiques de l’informatique**.

---

## 🎯 **Fonctionnalités principales**

✅ **📚 Découvrir les femmes inspirantes** : Liste de pionnières et d’expertes actuelles du monde de l’informatique.  
✅ **🎮 Apprendre en s’amusant** : Accès à des jeux interactifs pour apprendre à coder.  
✅ **🔧 Espace administrateur·ice** (CRUD) : Gestion dynamique des femmes et jeux (ajout, modification, suppression).  
✅ **🔒 Sécurité** (en cours) : Authentification admin avec **Argon2** et **JWT** (à venir).  

---

## 🛠 **Stack technique utilisée**

| Technologie | Usage |
|------------|-------|
| **React (Vite + TypeScript)** | Frontend |
| **Node.js & Express** | Backend |
| **MySQL** | Base de données |
| **Argon2** | Sécurisation des mots de passe (à venir) |
| **JWT** | Authentification (à venir) |

---

## 📌 **Installation & lancement**

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.

```sh
git clone https://github.com/Jottiana/girl-power-code.git
cd girl-power-code
```

3. Exécutez la commande `npm install`.
4. Créez des fichiers d'environnement (`.env`) dans les répertoires `server` et `client` : vous pouvez copier les fichiers `.env.sample` comme modèles (**ne les supprimez pas**).

---

![Checkpoint 4](./client/src/assets/ressources/checkpoint_4.md)

---

Cette application utilise le framework pédagogique JS-monorepo de la Wild Code School, suivant l'architecture React-Express-MySQL (v7.1.7)
![Create JS-Monorepo](https://github.com/WildCodeSchool/create-js-monorepo)


### Commandes de Base

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |
| `npm run test`         | Exécute les tests unitaires et d'intégration                                |
