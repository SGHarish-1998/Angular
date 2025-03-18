import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
    name : string = "sgharish.."

    namek = "sgh123"

    type = "checkbox"

   constructor()
   {
    this.namek = "fghjk";
   }

   showMessage(message:string)
   {
      alert(message);
   }
}
