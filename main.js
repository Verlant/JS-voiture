class Voiture {
  /**
   * Constructeur de la class voiture
   * @param {string} marque
   * @param {string} modele
   * @param {int} annee
   * @param {int} cylindre
   * @param {string} couleur
   */
  constructor(marque, modele, annee, cylindre, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.cylindre = cylindre + " CV";
    this.couleur = couleur;
  }
  /**
   * méthode pour modifier la couleur d'une voiture
   * @param {string} color
   */
  repeindre(color) {
    this.couleur = color;
  }
  get_attributs() {
    console.log(
      "Marque : " +
        this.marque +
        " | Modèle : " +
        this.modele +
        " | Année : " +
        this.annee +
        " | Cylindrée : " +
        this.cylindre +
        " | Couleur : " +
        this.couleur
    );
  }
}

const voiture_perso = new Voiture("Renault", "Mégane 3", 2011, 130, "blanche");
const voiture_sport = new Voiture("Porsche", "Carrera GT", 2005, 612, "noire");
const voiture_rallie = new Voiture("Lancia ", "Delta S4", 1985, 450, "blanche");

console.log(voiture_perso);
console.log(voiture_sport);
console.log(voiture_rallie);

voiture_perso.get_attributs();
voiture_sport.get_attributs();
voiture_rallie.get_attributs();
