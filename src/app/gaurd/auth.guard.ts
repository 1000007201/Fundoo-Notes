import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/authservive/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private route:Router){}
  canActivate(){
    if (!this.authService.gettoken()){
      console.log('redirect')
      this.route.navigateByUrl('/login')
      return false;
    }
    return this.authService.gettoken();
  }
}
