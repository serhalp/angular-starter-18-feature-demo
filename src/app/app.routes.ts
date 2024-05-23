import { Routes } from '@angular/router';

import { MyFormComponent } from './my-form/my-form.component';
import { MyMiddlewareComponent } from './my-middleware-component/my-middleware-component.component';

export const routes: Routes = [
  { path: 'my-form', component: MyFormComponent },
  { path: 'blorp-form', redirectTo: '/my-form' },
  { path: 'middleware-test', component: MyMiddlewareComponent },
];
