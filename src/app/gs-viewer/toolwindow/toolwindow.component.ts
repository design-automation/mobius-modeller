import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Component, OnInit } from '@angular/core';
import { AngularSplitModule } from 'angular-split';

@Component({
  selector: 'app-toolwindow',
  templateUrl: './toolwindow.component.html',
  styleUrls: ['./toolwindow.component.css']
})
export class ToolwindowComponent implements OnInit {

  Visible; 
  pan; 
  changegrid;

  ngOnInit() {

  }

  
}