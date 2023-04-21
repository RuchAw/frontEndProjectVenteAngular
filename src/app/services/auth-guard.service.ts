import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, RouteConfigLoadEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {
constructor(
    private _authService: AuthService,
    private _router: Router
  ) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
   //si connecter vous pouvez continuer vers la route voulue
  if (this._authService.getToken()) {
      return true;
    }
    //si on vous devrez se connecter
    this._router.navigate(['/login']);
    return false;
  }
}