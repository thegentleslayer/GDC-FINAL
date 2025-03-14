document.getElementById("quoteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const frequency = document.getElementById("frequency").value;
    const comments = document.getElementById("comments").value.trim();

    // Récupération des services sélectionnés
    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(checkbox => {
        services.push(checkbox.value);
    });

    // Vérification des champs obligatoires
    if (!name || !email || !phone || !address || services.length === 0) {
        alert("Veuillez remplir tous les champs obligatoires et sélectionner au moins un service.");
        return;
    }

    // Affichage du message de succès
    document.getElementById("responseMessage").innerText = "Votre demande a été envoyée avec succès !";
    
    // Simuler l'envoi (ici tu peux ajouter un envoi à un serveur via fetch ou AJAX)
    console.log({
        name, email, phone, address, services, frequency, comments
    });

    // Réinitialiser le formulaire
    document.getElementById("quoteForm").reset();
});
