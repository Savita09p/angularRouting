import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

   constructor(
     private _snackBarService : MatSnackBar
   ) { }
 
   openSnackBar(msg : string){
     this._snackBarService.open(msg, 'close',{
       verticalPosition : 'top',
       horizontalPosition : 'left',
       duration : 3500
     })
   }
  
}
