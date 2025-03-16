import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  imports: [FormsModule,JsonPipe,CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.css'
})
export class TemplateComponent {
    
   simpleForm: any =
   {
     email : "",
     password:"",
     check:false
   };

   formVal:any;

   onSubmit()
   {
      debugger;
      this.formVal = this.simpleForm;
   }
}
