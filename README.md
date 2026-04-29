# Hevin va réussir sa L1 🚀

Site interactif de révision pour la **macroéconomie L1 LEA** (AMU). Cours simplifiés et ludiques, QCM par chapitre avec correction immédiate, examens blancs en conditions réelles avec notation auto, exercices guidés pas-à-pas.

## Fonctionnalités

- **5 chapitres** de cours simplifié avec mémo-techniques et pièges classiques.
- **50 QCM** classés par chapitre — feedback immédiat à chaque réponse.
- **2 examens blancs** de 40 QCM (chrono 2h) avec notation /20, détail par chapitre, correction question par question.
- **22 exercices guidés** avec indice, méthode pas-à-pas et réponse cachée.
- **Formulaire complet** avec rendu KaTeX et 18 chiffres clés.

## Stack

- Vite + React + TypeScript
- Tailwind CSS
- React Router
- KaTeX (rendu des formules mathématiques)

## Démarrage local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Déploiement

Configuré pour [Vercel](https://vercel.com). Le `vercel.json` gère le routing SPA pour que `/chapitres/ch1`, `/examens/examen-1`, etc. fonctionnent en deep-link.

---

Fait avec 💙 pour Hevin — révise, transpire un peu, et cartonne.
