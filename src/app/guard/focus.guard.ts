import { CanDeactivate } from '@angular/router';
import { StockComponent } from '../stock/stock.component';
export class FocusGuard implements CanDeactivate<StockComponent> {
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    // boolean
    // | Observable<boolean>
    // | Promise<boolean> {
    //     throw new Error('Method not implemented.')
    // }
    canDeactivate(component: StockComponent) {
        // return undefined
        if(component.isFocus()){
            return true
        }else{
            return window.confirm("add to your favourite!")
        }
        // return undefined
    }
}
