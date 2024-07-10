import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServicesService {

  constructor(private http: HttpClient) {}

  authenticate(data: any) {
    localStorage.setItem('email', data.username);
    return this.http.post(environment.login_Url + '/authenticate', data);
  }

  saveRole(data:any){
    return this.http.post(environment.login_Url + '/api/user/saveRole', data);
  }

  isAuthenticated(): boolean {
    const email = localStorage.getItem('email');
    const currentUser=localStorage.getItem("currentUser");
    const token =localStorage.getItem("token");

    const setEmail=email !== null && email !== undefined && email.trim() !== '';
    const setCurrentUser=currentUser !== null && currentUser !== undefined && currentUser.trim() !== '';
    const setToken=token !== null && token !== undefined && token.trim() !== '';

    return setEmail && setCurrentUser && setToken;
  }
 
}
