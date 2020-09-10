import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor(private router:Router){}

    canActivate():boolean
    {

        confirm("cannot access the componenet");
        this.router.navigateByUrl('');
        return false;
    }
}
