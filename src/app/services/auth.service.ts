import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
constructor() { }
  
//vériier si l'utilisateur est déja connecté
   getUserDetails() {
    if(localStorage.getItem('utilisateurInfos')){
return localStorage.getItem('utilisateurInfos')
}else{
      return null
    }
    
  }
setDataInLocalStorage(variableName:string, data:string) {
      localStorage.setItem(variableName, data);
  }

  //récupérer le token from localStorage
getToken() {
      return localStorage.getItem('token');
  }
  

  //déconnecter et vider le localStorage
clearStorage() {
      localStorage.clear();
  }
}