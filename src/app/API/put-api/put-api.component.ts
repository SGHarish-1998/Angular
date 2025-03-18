import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-put-api',
  imports: [CommonModule, FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent {
  departmentList: any[] = [];

  //for adding new row we need to send an object row to the API.
  deparmentRow: any = {
    departmentId: 0,
    departmentName: "",
    departmentLogo: ""
  };

  constructor(private deptService: DepartmentService) {

  }
  ngOnInit(): void {
    debugger;
    this.deptService.getAllDepartment().subscribe((result: any) => {
      this.departmentList = result.data;
    });
  }

  onEdit(value: any) {
    this.deparmentRow = value;
  }

  onUpdateForm() {
    this.deptService.updateDepartment(this.deparmentRow).subscribe((result: any) => {
      if (result.result) {
        alert('Table get updated');
        this.deptService.getAllDepartment().subscribe((result: any) => {
          this.departmentList = result.data;
        });
      }
      else {
        alert(result.message);
      }
    });
  }
}
