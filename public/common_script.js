// script.js

// Fonction de recherche
function searchButtons() {
    // Récupère la valeur saisie dans le champ de recherche
    var searchText = document.getElementById("search-input").value.toLowerCase();

    // Sélectionne tous les boutons
    var buttons = document.querySelectorAll(".button");

    // Parcourt chaque bouton pour vérifier s'il correspond à la recherche
    buttons.forEach(function(button) {
        var buttonText = button.textContent.toLowerCase();
        if (buttonText.includes(searchText)) {
            // Affiche le bouton s'il correspond à la recherche
            button.style.display = "inline-block";
        } else {
            // Masque le bouton s'il ne correspond pas à la recherche
            button.style.display = "none";
        }
    });
}

// Ajoute un gestionnaire d'événement pour déclencher la recherche à chaque saisie
document.getElementById("search-input").addEventListener("input", searchButtons);

// Appelle la fonction de recherche au chargement de la page pour afficher tous les boutons
window.onload = function() {
    searchButtons();
};

document.getElementById("back-button").addEventListener("click", function() {
    window.location.replace("/")
});