const express = require("express");
const app = express();
const fs = require('fs');

const port = 80

app.use(express.static("public"))

app.get('/common_style', (req, res) => {
    res.sendFile("./public/common_style.css");
});

app.get('/common_script', (req, res) => {
    res.sendFile("./public/common_script.js");
});

app.get('/download', (req, res) => {
    if (typeof req.query.file !== "string" || req.query.file.includes('..')) {
        res.status(403).sendFile("public/nan arrete.png",{root:"."});
    }
    else res.download('cracks/' + req.query.file);
});

app.get('/adobe', (req, res) => {

    let category = "Adobe"
    let torrents = []
    fs.readdirSync("./cracks/Adobe").forEach(file => {
        torrents.push(file.replace(".torrent",""))
    });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Crack Sylab</title>
        <link rel="stylesheet" type="text/css" href="/common_style.css">
    </head>
    <body>
        <div class="title-bar"></div>
        <h1>Crack ${category}</h1>
        <!-- Bouton "Retour" -->
        <button id="back-button">Retour</button>
        <!-- Ajout du champ de recherche -->
        <input type="text" id="search-input" placeholder="Rechercher un bouton...">
        <ul>
            ${torrents.map((torrent) => `<li><a href="/download?file=${category}/${torrent}.torrent" class="button">${torrent}</a></li>`).join('\n')}
        </ul>
    <script src="/common_script.js"></script>
    <div class="footer">
        ©Crrytos
    </div>
    </body>
    </html>
    `)
})

app.get('/jeux_pc', (req, res) => {

    let category = "Jeux PC"
    let torrents = []
    fs.readdirSync("./cracks/Jeux PC").forEach(file => {
        torrents.push(file.replace(".torrent",""))
    });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Crack Sylab</title>
        <link rel="stylesheet" type="text/css" href="/common_style.css">
    </head>
    <body>
        <div class="title-bar"></div>
        <h1>Crack ${category}</h1>
        <!-- Bouton "Retour" -->
        <button id="back-button">Retour</button>
        <!-- Ajout du champ de recherche -->
        <input type="text" id="search-input" placeholder="Rechercher un bouton...">
        <ul>
            ${torrents.map((torrent) => `<li><a href="/download?file=${category}/${torrent}.torrent" class="button">${torrent}</a></li>`).join('\n')}
        </ul>
    <script src="/common_script.js"></script>
    <div class="footer">
        ©Crrytos
    </div>
    </body>
    </html>
    `)
})

app.get('/jeux_consoles', (req, res) => {

    let category = "Jeux Consoles"
    let torrents = []
    fs.readdirSync("./cracks/Jeux Consoles").forEach(file => {
        torrents.push(file.replace(".torrent",""))
    });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Crack Sylab</title>
        <link rel="stylesheet" type="text/css" href="/common_style.css">
    </head>
    <body>
        <div class="title-bar"></div>
        <h1>Crack ${category}</h1>
        <!-- Bouton "Retour" -->
        <button id="back-button">Retour</button>
        <!-- Ajout du champ de recherche -->
        <input type="text" id="search-input" placeholder="Rechercher un bouton...">
        <ul>
            ${torrents.map((torrent) => `<li><a href="/download?file=${category}/${torrent}.torrent" class="button">${torrent}</a></li>`).join('\n')}
        </ul>
    <script src="/common_script.js"></script>
    <div class="footer">
        ©Crrytos
    </div>
    </body>
    </html>
    `)
})

app.get('/films', (req, res) => {

    let category = "Films"
    let torrents = []
    fs.readdirSync("./cracks/Films").forEach(file => {
        torrents.push(file.replace(".torrent",""))
    });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Crack Sylab</title>
        <link rel="stylesheet" type="text/css" href="/common_style.css">
    </head>
    <body>
        <div class="title-bar"></div>
        <h1>Crack ${category}</h1>
        <!-- Bouton "Retour" -->
        <button id="back-button">Retour</button>
        <!-- Ajout du champ de recherche -->
        <input type="text" id="search-input" placeholder="Rechercher un bouton...">
        <ul>
            ${torrents.map((torrent) => `<li><a href="/download?file=${category}/${torrent}.torrent" class="button">${torrent}</a></li>`).join('\n')}
        </ul>
    <script src="/common_script.js"></script>
    <div class="footer">
        ©Crrytos
    </div>
    </body>
    </html>
    `)
})

app.get('/soundboards', (req, res) => {

    let category = "SoundBoard"
    let torrents = []
    fs.readdirSync("./cracks/Soundboards").forEach(file => {
        torrents.push(file.replace(".torrent",""))
    });

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Crack Sylab</title>
        <link rel="stylesheet" type="text/css" href="/common_style.css">
    </head>
    <body>
        <div class="title-bar"></div>
        <h1>Crack ${category}</h1>
        <!-- Bouton "Retour" -->
        <button id="back-button">Retour</button>
        <!-- Ajout du champ de recherche -->
        <input type="text" id="search-input" placeholder="Rechercher un bouton...">
        <ul>
            ${torrents.map((torrent) => `<li><a href="/download?file=${category}/${torrent}.torrent" class="button">${torrent}</a></li>`).join('\n')}
        </ul>
    <script src="/common_script.js"></script>
    <div class="footer">
        ©Crrytos
    </div>
    </body>
    </html>
    `)
})

app.listen(port, () => console.log(`Le site s'est ouvert sur l'adresse : http://localhost:${port}`));