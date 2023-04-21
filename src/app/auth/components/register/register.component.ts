import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin: boolean = false;
  errorMessage: any;
constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }

//afin de remplir la liste des roles
listeRoles:any=[];
file:any;
status:number=0;
messageStatus:string="";
ngOnInit() {
this.isUserLogin();
//charger la liste des roles from la table roles
 this._api.get('roles/').subscribe(data => {
            this.listeRoles=data;
            console.log(this.listeRoles);
        }); 

}

selectFile(event: any): void {
  this.file = event.target.files[0];
}

//valider l'inscription
onSubmit(form: NgForm) {
const utilisateur=form.value;
const formData: FormData = new FormData();
    formData.append("file", this.file);
    formData.append("fileName", this.file.name);
    formData.append("userInfo", JSON.stringify(utilisateur));
    console.log(formData);
    
this._api.post('utilisateurs/inscription', formData).subscribe((res: any) => {
    this.status=res.status;
      if (this.status==2) { 
this.messageStatus="Votre compte est crée Veuillez attendre la validation par l'admin";
      } 
      else { 
        console.log(res)
        alert(res.msg)
      }
    });
}

//vérifier si utilisateur infos existe déjà dans localStorage
isUserLogin(){
  if(this._auth.getUserDetails() != null){
this.isLogin = true;
    }
}
}