//User DTO est utilisé comme miroir du modéle User, il est recommandé d'utiliser cette approche pour éviter les actions directement sur le modéle.
class UserDTO {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
}
module.exports = UserDTO;
