import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public protectedData: any
  constructor(
    private _auth:AuthService
    
  ) { }
  ngOnInit(): void {
    //récupérer localStorage pour vérifier s'il est connecté
   let userinfo= this._auth.getUserDetails()
   if(userinfo!=null)
   {
     console.log(userinfo);
   }
   
      this.protectedData = userinfo

  }
}