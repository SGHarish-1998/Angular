import { Routes } from '@angular/router';
import { bindCallback } from 'rxjs';
import { DatabindingComponent } from './databinding/databinding.component';
import { GetApiComponent } from './API/get-api/get-api.component';
import { PostApiComponent } from './API/post-api/post-api.component';
import { PutApiComponent } from './API/put-api/put-api.component';
import { DelApiComponent } from './API/del-api/del-api.component';

export const routes: Routes = [
    { path: '', redirectTo: 'get', pathMatch: 'full' }, // Default route to GET
    { path: 'get', component: GetApiComponent },
    { path: 'post', component: PostApiComponent },
    { path: 'put', component: PutApiComponent },
    { path: 'delete', component: DelApiComponent },
];
