import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVerifyComponent } from './code-verify.component';

describe('CodeVerifyComponent', () => {
  let component: CodeVerifyComponent;
  let fixture: ComponentFixture<CodeVerifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeVerifyComponent]
    });
    fixture = TestBed.createComponent(CodeVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
