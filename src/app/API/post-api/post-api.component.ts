import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

    departmentList:any[] = [];

    deparmentRow:any = {
      departmentId:0,
      departmentName:"",
      departmentLogo:""
    };
   
    constructor(private http:HttpClient)
    {

    }
   ngOnInit(): void {
      this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((result:any)=>{
        this.departmentList = result.data;
      });
   }


   onSummitForm()
   {
    this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deparmentRow).subscribe((result:any)=>{
      if(result.result)
      {
        alert(result.result.data);
      }
      else{
        alert("no result");
      }
    });
   }

  

}
