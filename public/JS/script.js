const form = document.getElementById('person-form');
const nombreInput = document.getElementById('input-count');
const tableBody = document.getElementById('table-body');
let num = 1; // Variable pour le numéro
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = parseInt(nombreInput.value, 10);
    if (isNaN(nombre) || nombre < 1) {
        return;
    }
    for (let i = 0; i < nombre; i++) {
        const row = document.createElement('tr');
        const numeroCell = document.createElement('td');
        const nomCell = document.createElement('td');
        const prenomCell = document.createElement('td');
        const ageCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const telephoneCell = document.createElement('td');
        const adresseCell = document.createElement('td');
        const professionCell = document.createElement('td');
        const entrepriseCell = document.createElement('td');
        const centresInteretCell = document.createElement('td');
        const salaireCell = document.createElement('td');
        const numeroSecuCell = document.createElement('td');
        const nationaliteCell = document.createElement('td');
        const dateNaissanceCell = document.createElement('td');
        const genreCell = document.createElement('td');
        const couleurYeuxCell = document.createElement('td');
        const couleurCheveuxCell = document.createElement('td');
        const tailleCell = document.createElement('td');
        const poidsCell = document.createElement('td');
        const groupeSanguinCell = document.createElement('td');
        const adresseIpCell = document.createElement('td');
        const userAgentCell = document.createElement('td');


        const nom = faker.name.lastName();
        const prenom = faker.name.firstName();
        const age = faker.random.number({
            min: 20,
            max: 49
        });
        const email = faker.internet.email();
        const telephone = faker.phone.phoneNumberFormat();
        const adresse = faker.address.streetAddress();
        const profession = faker.name.jobTitle();
        const entreprise = faker.company.companyName();
        const centresInteret = faker.random.words(3);
        const salaire = faker.finance.amount(30000, 100000, 2);
        const numeroSecu = faker.random.number({
            min: 100000000000000,
            max: 999999999999999
        });
        const nationalite = faker.address.country();
        const dateNaissance = faker.date.past(60, new Date('2000-01-01'));
        const genre = faker.random.arrayElement(['M', 'F']);
        const couleurYeux = faker.internet.color();
        const couleurCheveux = faker.internet.color();
        const taille = faker.random.number({
            min: 150,
            max: 200
        });
        const poids = faker.random.number({
            min: 40,
            max: 120
        });
        const groupeSanguin = faker.random.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']);
        const adresseIp = faker.internet.ip();
        const userAgent = faker.internet.userAgent();


        numeroCell.textContent = num;
        nomCell.textContent = nom;
        prenomCell.textContent = prenom;
        ageCell.textContent = age;
        emailCell.textContent = email;
        telephoneCell.textContent = telephone;
        adresseCell.textContent = adresse;
        professionCell.textContent = profession;
        entrepriseCell.textContent = entreprise;
        centresInteretCell.textContent = centresInteret;
        salaireCell.textContent = salaire;
        numeroSecuCell.textContent = numeroSecu;
        nationaliteCell.textContent = nationalite;
        dateNaissanceCell.textContent = dateNaissance.toLocaleDateString('fr-FR');
        genreCell.textContent = genre;
        couleurYeuxCell.textContent = couleurYeux;
        couleurCheveuxCell.textContent = couleurCheveux;
        tailleCell.textContent = taille;
        poidsCell.textContent = poids;
        groupeSanguinCell.textContent = groupeSanguin;
        adresseIpCell.textContent = adresseIp;
        userAgentCell.textContent = userAgent;


        // Ajout du code hexadécimal et du carré de couleur pour les yeux
        const couleurYeuxHex = faker.internet.color();
        const couleurYeuxCarre = document.createElement('div');
        couleurYeuxCarre.style.backgroundColor = couleurYeuxHex;
        couleurYeuxCarre.style.width = '20px';
        couleurYeuxCarre.style.height = '20px';
        couleurYeuxCell.textContent = ''; // Supprime le contenu existant
        couleurYeuxCell.appendChild(couleurYeuxCarre);
        couleurYeuxCell.appendChild(document.createTextNode(` ${couleurYeuxHex}`));

        // Ajout du code hexadécimal et du carré de couleur pour les cheveux
        const couleurCheveuxHex = faker.internet.color();
        const couleurCheveuxCarre = document.createElement('div');
        couleurCheveuxCarre.style.backgroundColor = couleurCheveuxHex;
        couleurCheveuxCarre.style.width = '20px';
        couleurCheveuxCarre.style.height = '20px';
        couleurCheveuxCell.textContent = ''; // Supprime le contenu existant
        couleurCheveuxCell.appendChild(couleurCheveuxCarre);
        couleurCheveuxCell.appendChild(document.createTextNode(` ${couleurCheveuxHex}`));

        row.appendChild(numeroCell);
        row.appendChild(nomCell);
        row.appendChild(prenomCell);
        row.appendChild(ageCell);
        row.appendChild(emailCell);
        row.appendChild(telephoneCell);
        row.appendChild(adresseCell);
        row.appendChild(professionCell);
        row.appendChild(entrepriseCell);
        row.appendChild(centresInteretCell);
        row.appendChild(salaireCell);
        row.appendChild(numeroSecuCell);
        row.appendChild(nationaliteCell);
        row.appendChild(dateNaissanceCell);
        row.appendChild(genreCell);
        row.appendChild(couleurYeuxCell);
        row.appendChild(couleurCheveuxCell);
        row.appendChild(tailleCell);
        row.appendChild(poidsCell);
        row.appendChild(groupeSanguinCell);
        row.appendChild(adresseIpCell);
        row.appendChild(userAgentCell);

        tableBody.appendChild(row);

        num++; // Incrémentation du numéro à chaque itération

    }
});