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
if (profil.nom) {
  document.getElementById('identity').textContent = profil.nom;
  document.getElementById('footerName').textContent = profil.nom + ' · Portfolio';
}
document.querySelectorAll('[data-link]').forEach(a => {
  const k = a.dataset.link;
  if (profil[k]) {
    a.href = k === 'email' ? 'mailto:' + profil[k] : profil[k];
    a.textContent = labels[k];
    if (k !== 'email') {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  } else {
    a.classList.add('disabled');
    a.setAttribute('aria-disabled', 'true');
    a.title = 'Lien à compléter dans la configuration de la page';
  }
});
// Le tour est chargé depuis son propre sous-dossier.
const dialog = document.getElementById('tourDialog');
document.getElementById('openTour').onclick = () => {
  dialog.showModal();
};
document.getElementById('closeTour').onclick = () => dialog.close();
dialog.addEventListener('click', e => {
  if (e.target === dialog) dialog.close();
});
