import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {
  msg !: string
  constructor(
    private _matDialogRef :MatDialogRef<GetConfirmComponent>,
  ) { }

  ngOnInit(): void {
  }
 
  onconfirm(flag : boolean){
    return this._matDialogRef.close(flag)
  }

}
