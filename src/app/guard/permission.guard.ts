import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
export class PermissionGuard implements CanActivate {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    // boolean
    // | Observable<boolean>
    // | Promise<boolean> {
    //     throw new Error('Method not implemented.')
    // }
    canActivate() {
        var hasPermission:boolean = Math.random() < 0.5 ;
        if (!hasPermission) {
            console.log('user doesn\'t have access!')
        }
        return hasPermission;
    }
}
