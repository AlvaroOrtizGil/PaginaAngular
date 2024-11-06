import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreMiEmpresaComponent } from './sobre-mi-empresa.component';

describe('SobreMiEmpresaComponent', () => {
  let component: SobreMiEmpresaComponent;
  let fixture: ComponentFixture<SobreMiEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreMiEmpresaComponent]
    });
    fixture = TestBed.createComponent(SobreMiEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
