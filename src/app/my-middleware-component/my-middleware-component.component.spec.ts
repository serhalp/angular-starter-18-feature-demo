import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMiddlewareComponentComponent } from './my-middleware-component.component';

describe('MyMiddlewareComponentComponent', () => {
  let component: MyMiddlewareComponentComponent;
  let fixture: ComponentFixture<MyMiddlewareComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyMiddlewareComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyMiddlewareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
