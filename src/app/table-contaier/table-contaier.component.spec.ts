import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableContaierComponent } from './table-contaier.component';

describe('TableContaierComponent', () => {
  let component: TableContaierComponent;
  let fixture: ComponentFixture<TableContaierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableContaierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContaierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
