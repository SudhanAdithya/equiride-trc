import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HorsesComponent } from './horses.component';

describe('HorsesComponent', () => {
  let component: HorsesComponent;
  let fixture: ComponentFixture<HorsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HorsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
