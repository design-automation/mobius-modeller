import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modulebox',
  templateUrl: './modulebox.component.html',
  styleUrls: ['./modulebox.component.scss']
})
export class ModuleboxComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModuleboxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
