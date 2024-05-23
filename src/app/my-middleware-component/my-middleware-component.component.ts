import { Component, Inject, Optional } from '@angular/core';
import type { Context } from '@netlify/edge-functions';

@Component({
  selector: 'app-my-middleware-component',
  standalone: true,
  imports: [],
  templateUrl: './my-middleware-component.component.html',
  styleUrl: './my-middleware-component.component.css',
})
export class MyMiddlewareComponent {
  constructor(
    // ...
    @Inject('netlify.request') @Optional() request?: Request,
    @Inject('netlify.context') @Optional() context?: Context,
  ) {
    console.log(
      `Rendering Foo for path ${request?.url} from location ${context?.geo?.city}`,
    );
    // ...
  }
}
