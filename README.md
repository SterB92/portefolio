# Portfolio — Aurélie SITJA

Portfolio présentant mon parcours, mes compétences et mes projets dans le cadre de ma recherche d’alternance en informatique.

## Consulter le site

Ouvrir l’adresse publiée dans **Settings → Pages** du dépôt GitHub.

Le site propose :

- une présentation du parcours et des compétences ;
- une démonstration interactive d’un tour de cartes mathématique ;
- un lien vers les projets personnels et de stage sur GitHub ;
- des liens vers le CV et les rapports de stage sur Google Drive ;
- les coordonnées de contact et le profil LinkedIn.

## Technologies

HTML, CSS et JavaScript, sans bibliothèque externe ni étape de compilation.

## Organisation des fichiers

| Fichier | Rôle |
| --- | --- |
| `index.html` | Structure et textes du portfolio |
| `style.css` | Mise en page, dégradé bleu et adaptations aux écrans |
| `script.js` | Configuration du profil, activation des liens et fenêtre du tour |
| `tour-cartes/index.html` | Interface du tour de cartes |
| `tour-cartes/style.css` | Apparence des cartes et animations |
| `tour-cartes/script.js` | Manipulations du paquet et recherche des cartes candidates |
| `tour-cartes/README.md` | Explication du tour et de ses limites |

## Exécution et publication

Le site est prévu pour être servi par un hébergement statique, notamment GitHub Pages.

Pour un test local sur un ordinateur disposant de Python, ouvrir un terminal dans le dossier du projet et exécuter :

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Ouvrir ensuite `http://localhost:8000`. Arrêter le serveur avec `Ctrl+C`.

Sur Android, une ouverture directe par une adresse `content://` peut empêcher le chargement des fichiers voisins. Utiliser le site publié pour tester l’ensemble.

Pour publier avec GitHub Pages, placer `index.html`, `style.css`, `script.js` et le dossier `tour-cartes` à la racine du dépôt. Dans **Settings → Pages**, sélectionner la branche `main` et le dossier `/ (root)`.

## Personnalisation

- **Coordonnées et liens** : modifier `const profil` dans `script.js`.
- **Libellés des boutons** : modifier `const labels` dans `script.js`.
- **Textes de présentation et de stage** : modifier `index.html`.
- **Couleurs, tailles et espacements** : modifier `style.css`.
- **Affichage sur téléphone** : utiliser les blocs `@media` existants.

Une adresse vide laisse le lien correspondant inactif. Le texte du bouton e-mail reprend automatiquement l’adresse du profil.

## Documents et accès

Les PDF restent sur Google Drive. Le portfolio contient leurs liens, mais aucune copie des documents.

Les autorisations sont gérées dans Drive : un lien affiché sur le site ne donne pas automatiquement accès au document. Pour un fichier en accès limité, le visiteur doit utiliser un compte autorisé ou demander l’accès.

Les fichiers publiés dans le dépôt public, y compris les liens du profil, sont consultables par tous. La désactivation de la sélection du texte est un réglage d’interface, pas une protection contre la copie.

## Démonstration du tour

Le tour illustre les séquences conservées par deux mélanges riffle. La recherche analyse le paquet final sans utiliser la carte mémorisée. Plusieurs cartes peuvent rester candidates : voir le [README du tour](tour-cartes/README.md).

## Vérifications

Les versions préparées ont fait l’objet de vérifications de syntaxe JavaScript et de tests de certaines interactions par simulation du DOM. Ces contrôles ne remplacent pas une vérification du rendu et du fonctionnement sur les navigateurs et appareils ciblés.

## Réalisation

La personnalisation, les évolutions et les contributions personnelles peuvent être documentées dans l’historique du dépôt.
