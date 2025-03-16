import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-directives',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  btnShow:boolean = false;

  cityArrray: string[] = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

  studentList:any[] = 
  [
    {Id:1,Name:'Harish',Mark:85,Active:true},
    {Id:2,Name:'SG',Mark:95,Active:false},
    {Id:3,Name:'Mark',Mark:65,Active:true},
    {Id:4,Name:'Antony',Mark:85,Active:true},
    {Id:5,Name:'Cibu',Mark:95,Active:false},
  ];

  sec:string = '';

  toggleCheck()
  {
    this.btnShow = !this.btnShow;
  }
}
