// Informations affichées et adresses des documents partagés.
const profil = {
  nom: "Aurélie SITJA",
  cv: "https://drive.google.com/file/d/13ylbXoNkAmYjeAxes7RDOfkK6wEDdoOy/view?usp=drivesdk",
  githubPerso: "https://github.com/asitja/Perso",
  rapport1: "",
  rapport2: "",
  rapport3: "https://drive.google.com/file/d/1h7RQQ08qfOHf-dVKfCZjWIlzxImsYj2I/view?usp=drivesdk",
  linkedin: "https://linkedin.com/in/aur%C3%A9lie-sitja-ba26543a7",
  email: "asitja@free.fr"
};

const labels = {
  cv: "Consulter mon CV ↗",
  githubPerso: "Voir mes projets sur GitHub ↗",
  rapport1: "Lire le rapport PDF ↗",
  rapport2: "Lire le rapport PDF ↗",
  rapport3: "Lire le rapport PDF ↗",
  linkedin: "Voir mon profil LinkedIn ↗",
  email: profil.email
};

function afficherIdentite() {
  if (!profil.nom) {
    return;
  }

  document.getElementById("identity").textContent = profil.nom;
  document.getElementById("footerName").textContent = profil.nom + " · Portfolio";
}

// Un champ vide désactive le lien correspondant dans la page.
function configurerLiens() {
  document.querySelectorAll("[data-link]").forEach((lien) => {
    const cle = lien.dataset.link;
    const adresse = profil[cle];

    if (!adresse) {
      lien.classList.add("disabled");
      lien.setAttribute("aria-disabled", "true");
      lien.title = "Lien à compléter dans la configuration de la page";
      return;
    }

    lien.href = cle === "email" ? "mailto:" + adresse : adresse;
    lien.textContent = labels[cle];

    if (cle !== "email") {
      lien.target = "_blank";
      lien.rel = "noopener noreferrer";
    }
  });
}

function configurerFenetreDuTour() {
  const fenetre = document.getElementById("tourDialog");

  document.getElementById("openTour").addEventListener("click", () => {
    fenetre.showModal();
  });

  document.getElementById("closeTour").addEventListener("click", () => {
    fenetre.close();
  });

  // Fermer au clic hors du cadre, sans intercepter les clics à l'intérieur.
  fenetre.addEventListener("click", (evenement) => {
    const cadre = fenetre.getBoundingClientRect();
    const horsDuCadre =
      evenement.clientX < cadre.left ||
      evenement.clientX > cadre.right ||
      evenement.clientY < cadre.top ||
      evenement.clientY > cadre.bottom;

    if (evenement.target === fenetre && horsDuCadre) {
      fenetre.close();
    }
  });
}

// Le script est chargé avec defer : les éléments HTML sont déjà disponibles.
afficherIdentite();
configurerLiens();
configurerFenetreDuTour();
