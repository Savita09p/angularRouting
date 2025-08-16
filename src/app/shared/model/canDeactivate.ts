
import { Observable } from "rxjs";

export interface IcanDeactivate {
    canDeactive:() => boolean | Promise <boolean> | Observable<boolean>
}