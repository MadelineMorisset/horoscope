# 🔮 Horoscope - Oracle du Jour

## ⭐ Objectif

Créer une application frontend complète et responsive.
Celle-ci doit afficher les oracles du jour pour chaque signe astrologique (sous forme de cards) après avoir appuyé sur le bouton "Tirer les 12 messages".
On affiche un loader lors du chargement des données.

## 👀 Démo en ligne

<!-- Ajouter le lien du site entre les parenthèses une fois déployé -->

[Lien vers le site]()

## 🛠️ Technologies utilisées

- HTML5 sémantique (avec balises <main>, <section>, etc.)
- CSS3 avec grid, flex, media queries (responsive design)
- JavaScript natif avec fetch() pour l'appel API (POST JSON)
- Manipulation du DOM : createElement, appendChild, innerHTML

## 📦 Fonctionnalités

- Tirage dynamique des 12 signes via un bouton
- Appel à une API avec clé secrète
- Loader visible pendant le chargement
- Cartes visuelles animées pour chaque signe
- Message d’erreur en cas de problème

## 📁 Organisation des fichiers

```
/ (Racine du projet)
├── assets/
│ ├── css/
│ │ └── style.css
│ ├── images/
│ │ └── signes/
│ │ │ ├── balance.webp
│ │ │ ├── belier.webp
│ │ │ ├── cancer.webp
│ │ │ ├── capricorne.webp
│ │ │ ├── gemeaux.webp
│ │ │ ├── lion.webp
│ │ │ ├── poissons.webp
│ │ │ ├── sagittaire.webp
│ │ │ ├── scorpion.webp
│ │ │ ├── taureau.webp
│ │ │ ├── verseau.webp
│ │ │ └── vierge.webp
│ │ ├── logo.png
│ │ └── stars.png
│ ├── js/
│ │ └── main.js
├── .gitignore
├── favicon.ico
├── index.html
└── README.md
```

## 🧑🏻‍🤝‍🧑🏻 Cloner et tester en local

```bash
git clone https://github.com/MadelineMorisset/horoscope.git
cd horoscope
# Ouvrir index.html dans le navigateur
```
