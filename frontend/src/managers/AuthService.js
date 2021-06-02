import decode from "jwt-decode";
import sign from "jwt-encode";

export default class AuthService {
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // GEtting token from localstorage
    return !!token; // handwaiving here
  }

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
