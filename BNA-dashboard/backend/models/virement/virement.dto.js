class VirementDTO {
  constructor(beneficiaire, montant, date, description) {
    this.beneficiaire = beneficiaire;
    this.montant = montant;
    this.date = date;
    this.description = description;
  }
}
module.exports = VirementDTO;
