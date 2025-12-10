// Importation du contenu du package 'express'
// dans la variable express
// Avec typescript j'écrirais :
// import nomvariable from 'nomdupackage';

// Avec nodejs on utilise 'require' pour importer un package
// npm i express
const express1 = require('express');
// npm i cors
const cors=require('cors');

// Creation d'un server web
const app = express1();

// Donnees des employes
let employes=[{id:1,name:"Alice", surname:"Dupont",  salary:{
    amount:5000,periodicity:"monthly"
    }, birthDate:"1985-06-20", cool:true},
 {id:2,name:"Bob", surname:"Martin",  salary:{
    amount:60000,periodicity:"yearly"
    }, birthDate:"1978-11-02", cool:false},
 {id:3,name:"Charlie", surname:"Durand",  salary:{
    amount:3000,periodicity:"monthly"
    }, birthDate:"1990-01-15"}];

// Mettre à disposition dess clients le contenu du dossier 'wwwroot'
app.use(express1.static('wwwroot'));

// Activer le CORS pour toutes les requêtes
// CORS = Cross Origin Resource Sharing
// Par defaut, si mon server est à l'adresse http://localhost:4201
// seuls les clients hébergés sur la même adresse peuvent consommer mes apis
app.use(cors(["http://localhost:4200"]));

// Mise en place de la réponse à l'url /api/salarie
app.get("/api/salarie",(req,res)=>{
    res.send(employes.map(e=>({id:e.id,l:e.name+" "+e.surname})));
});
// Mise en place de la réponse à l'url /api/salarie/3
app.get("/api/salarie/:id",(req,res)=>{
    // Récupération de l'id dans les paramètres de l'url
    let id=parseInt(req.params.id);
    // Recherche de l'employé correspondant
    let emp=employes.find(e=>e.id===id);
    res.send(emp);
})

// lancement du serveur web sur le port 4201
app.listen(4201,
    // function callback appelee une fois le serveur demarre
    ()=>{
    console.log("Le serveur est demarre sur le port 4201");
});