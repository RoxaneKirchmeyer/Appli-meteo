
// display block et none sur la carte
// une seule carte de description qui se modifie en fonction de la ville choisie

// méthode simple
btnParis = document.querySelector("#paris");
btnLille = document.querySelector("#lille");
btnBordeaux = document.querySelector("#bordeaux");
btnStrasbourg = document.querySelector("#strasbourg");
btnMontpellier = document.querySelector("#montpellier");
btnNantes = document.querySelector("#nantes");
btnNice = document.querySelector("#nice");
btnToulouse = document.querySelector("#toulouse");
btnLyon = document.querySelector("#lyon");
btnMarseille = document.querySelector("#marseille");

// Au clic d'un button ayant l'id de la ville, un evenement au clic qui va fetch et affiche le climat de la ville

// Méthode optimisé
buttonsVilles = document.querySelectorAll('button')
divClimat = document.createElement('div')

buttonsVilles.forEach(ville => {
    ville.addEvenListener('click', () => {
        fetch('http://api.weatherstack.com/current')
            .then(response => response.json())
            .then(data => {

            })

        console.log(data)
    })

})

