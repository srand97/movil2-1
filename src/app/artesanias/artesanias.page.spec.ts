import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArtesaniasPage } from './artesanias.page';

describe('ArtesaniasPage', () => {
  let component: ArtesaniasPage;
  let fixture: ComponentFixture<ArtesaniasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArtesaniasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
