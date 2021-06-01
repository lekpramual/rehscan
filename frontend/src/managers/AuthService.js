import decode from "jwt-decode";
import sign from "jwt-encode";

export default class AuthService {
  setToken(data) {
    const secret = "secret";
    const jwt = sign(data, secret);
    // Saves user token to localStorage
    localStorage.setItem("id_token", jwt);
  }
  getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem("id_token");
  }
  getProfile() {
    // Using jwt-decode npm package to decode the token
    return decode(this.getToken());
  }
}
