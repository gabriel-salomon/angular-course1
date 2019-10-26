import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: "root"})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    this.http.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA6_Hu_6qnO2s48IAAwKKu2uBzeMWSy5e8',
     {
       email: email,
       password: password,
       returnSecureToken: true
     }
    );
  }
}
