import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient) {
  }

  login(data) {
    return this.httpClient.post(this.URL + 'signin', data, httpOptions);
  }
}
