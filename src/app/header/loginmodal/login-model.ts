export class LoginModel {
  username: String;
  password: String;

  constructor(_username: String,_password: String){
    this.username = _username;
    this.password = _password;
  }
}
