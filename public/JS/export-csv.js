const exportCSVButton = document.getElementById('export-csv-button');
exportCSVButton.addEventListener('click', function() {
  exportToCSV('table-body', 'personnes');
});

function exportToCSV(tableId, filename) {
    const table = document.getElementById(tableId);
    const rows = Array.from(table.querySelectorAll('tr'));

    // Créer une chaîne CSV en concaténant les données de chaque ligne avec un point-virgule comme délimiteur
    let csvContent = 'Numéro;Nom;Prénom;Âge;Email;Téléphone;Adresse;Profession;Entreprise;Centres d\'intérêt;Salaire;Numéro de sécurité sociale;Nationalité;Date de Naissance;Genre;Couleur des Yeux;Couleur des Cheveux;Taille;Poids;Groupe Sanguin;Adresse IP;User Agent\n';

    // Parcourir chaque ligne du tableau et ajouter les données au contenu CSV avec le point-virgule comme délimiteur
    rows.forEach(row => {
        const cells = Array.from(row.querySelectorAll('td'));
        const rowData = cells.map(cell => {
            const cellText = cell.textContent.trim();
            if (cell.classList.contains('user-agent')) {
                // Remplacer tous les point-virgules par des "/ " dans le champ User-Agent
                return cellText.replace(/;/g, '/ ');
            }
            return cellText.replace(/;/g, ','); // Remplacer les points-virgules par des virgules dans les autres champs
        }).join(';');
        csvContent += rowData + '\n';
    });

    // Créer un lien de téléchargement pour le fichier CSV
    const link = document.createElement('a');
    const csvData = new Blob([`\uFEFF${csvContent}`], { type: 'text/csv;charset=utf-8;' });
    const csvUrl = URL.createObjectURL(csvData);
    link.href = csvUrl;
    link.download = filename + '.csv';
    link.style.display = 'none';

    // Ajouter le lien au document et le déclencher
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

  
  
  
  
  