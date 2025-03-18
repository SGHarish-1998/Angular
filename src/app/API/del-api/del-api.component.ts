import { Component } from '@angular/core';
import { DepartmentService } from '../../services/department.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-del-api',
  imports: [CommonModule],
  templateUrl: './del-api.component.html',
  styleUrl: './del-api.component.css'
})
export class DelApiComponent {

  departmentList:any[] = [];

  constructor(private deptService:DepartmentService)
  {

  }
  ngOnInit(): void {
    debugger;
      this.deptService.getAllDepartment().subscribe((result:any)=>{
        this.departmentList = result.data;
      });
  }


  onDelete(id: number) {
    if (confirm('Are you sure you want to delete this department?')) {
      this.deptService.deleteDepartment(id).subscribe((result: any) => {
        if (result.result) {
          alert('Department deleted successfully');
          this.deptService.getAllDepartment().subscribe((result: any) => {
            this.departmentList = result.data;
          });
        } else {
          alert(result.message);
        }
      });
    }
  }
}
