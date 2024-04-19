//User DTO est utilisé comme miroir du modéle User, il est recommandé d'utiliser cette approche pour éviter les actions directement sur le modéle.
class UpdateUserDTO {
    constructor(firstname,lastname,email,phone_number,password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone_number = phone_number;    
        this.password = password;
    }
}
module.exports = UpdateUserDTO;