import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

import { GetApiComponent } from './API/get-api/get-api.component';
import { PostApiComponent } from './API/post-api/post-api.component';

@Component({
  selector: 'app-root',
  imports: [PostApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';

  constructor(private router:Router)
  {
    
  }

  switchHarish()
  {
    this.router.navigateByUrl("data-bind");
  }
}
