import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineCard } from './magazine-card';

describe('MagazineCard', () => {
  let component: MagazineCard;
  let fixture: ComponentFixture<MagazineCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MagazineCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MagazineCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
