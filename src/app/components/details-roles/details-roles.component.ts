import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service'
import { AuthService } from './../../services/auth.service'
import { Router } from '@angular/router';
import { ActivatedRoute,ParamMap  } from '@angular/router';


@Component({
  selector: 'app-details-roles',
  templateUrl: './details-roles.component.html',
  styleUrls: ['./details-roles.component.css']
})
export class DetailsRolesComponent implements OnInit {

  isLogin: boolean = false;
  status: number=-1;
  messageStatus: any;
  userinfo: any;
  //afin de remplir la liste des roles
role:any={};
constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
    private route:ActivatedRoute
  ) { }

ngOnInit() {
this.isUserLogin();
//récupérer le paramètre
 this.route.paramMap.subscribe((params: ParamMap) => {
    let RoleId = Number(params.get('id'));
      console.log(RoleId);

 this._api.getSecureAvecParam('roles/details',RoleId).subscribe((data:any) => {
            this.role=data.role;
console.log(this.role);         
        }); 

});
}


//vérifier si utilisateur infos existe déjà dans localStorage
isUserLogin(){
this.userinfo=this._auth.getUserDetails();
 if( this.userinfo!= null){
this.isLogin = true;
this.userinfo=JSON.parse(this.userinfo);
 }
 else
 {
      this._router.navigate(['/login']);
 }
}

}