class UserRegisterDTO {
    constructor(firstname,lastname,email,phone_number,password){
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.phone_number = phone_number;    
        this.password = password;
    }
}

module.exports = UserRegisterDTO;