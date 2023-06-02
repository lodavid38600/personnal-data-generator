const table = document.querySelector('table');

// Créer un objet pour suivre l'état de tri de chaque colonne
const sortStates = {};

// Écouter les clics sur les en-têtes de colonnes
table.addEventListener('click', function(e) {
    if (e.target.tagName === 'TH') {
        const columnIndex = e.target.cellIndex;
        const isAscending = sortStates[columnIndex] === 'asc';

        // Réinitialiser l'état de tri pour toutes les colonnes
        Object.keys(sortStates).forEach(key => {
            sortStates[key] = null;
        });

        // Mettre à jour l'état de tri de la colonne actuelle
        if (isAscending) {
            sortStates[columnIndex] = 'desc';
        } else {
            sortStates[columnIndex] = 'asc';
        }

        // Trier le tableau en fonction de l'état de tri
        sortTable(columnIndex, sortStates[columnIndex]);
    }
});

// Fonction pour trier le tableau
function sortTable(columnIndex, sortOrder) {
    const rows = Array.from(table.tBodies[0].rows);

    // Supprimer la classe de tri sur tous les en-têtes de colonnes
    const thElements = table.querySelectorAll('th');
    thElements.forEach(th => th.classList.remove('asc', 'desc'));

    // Ajouter la classe de tri sur l'en-tête de colonne actuelle
    const currentTh = thElements[columnIndex];
    currentTh.classList.add(sortOrder);

    // Trier le tableau en fonction de l'état de tri
    rows.sort((a, b) => {
        const cellA = a.cells[columnIndex].textContent.trim();
        const cellB = b.cells[columnIndex].textContent.trim();

        if (sortOrder === 'asc') {
            return cellA.localeCompare(cellB);
        } else if (sortOrder === 'desc') {
            return cellB.localeCompare(cellA);
        } else {
            return a.rowIndex - b.rowIndex;
        }
    });

    table.tBodies[0].append(...rows);
}