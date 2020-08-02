import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlotComponent } from './slot.component';

describe('SlotComponent', () => {
  let component: SlotComponent;
  let fixture: ComponentFixture<SlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlotComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
