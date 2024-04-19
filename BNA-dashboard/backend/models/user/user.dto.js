//User DTO est utilisé comme miroir du modéle User, il est recommandé d'utiliser cette approche pour éviter les actions directement sur le modéle.

//firstname, lastname, photo, etat_civil, gender,
// adresse, code_postal, ville, nationality
// edu_lvl, etablissement,
//pere, mere, profpere, profmere, contact_pr, contact_mr nbfr, nbsr, 
//email, phone_number
//status_account
class UserDTO {
  constructor(firstname,lastname,email,phone_number,CIN,password){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone_number = phone_number;    
    this.CIN = CIN;     
    this.password = password;
}
}
module.exports = UserDTO;
