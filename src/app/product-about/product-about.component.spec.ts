import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAboutComponent } from './product-about.component';

describe('ProductAboutComponent', () => {
  let component: ProductAboutComponent;
  let fixture: ComponentFixture<ProductAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
