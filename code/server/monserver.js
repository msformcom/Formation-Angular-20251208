// Importation du contenu du package 'express'
// dans la variable express
// Avec typescript j'écrirais :
// import nomvariable from 'nomdupackage';

// Avec nodejs on utilise 'require' pour importer un package
const express1 = require('express');

// Creation d'un server web
const app = express1();

// Mettre à disposition dess clients le contenu du dossier 'wwwroot'
app.use(express1.static('wwwroot'));

// lancement du serveur web sur le port 4201
app.listen(4201,
    // function callback appelee une fois le serveur demarre
    ()=>{
    console.log("Le serveur est demarre sur le port 4201");
});