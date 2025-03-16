import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { DirectivesComponent } from './app/Directives/directives/directives.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
