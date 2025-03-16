import { Routes } from '@angular/router';
import { bindCallback } from 'rxjs';
import { DatabindingComponent } from './databinding/databinding.component';

export const routes: Routes = [
    {
        path:'data-bind',
        component:DatabindingComponent
    }
];
