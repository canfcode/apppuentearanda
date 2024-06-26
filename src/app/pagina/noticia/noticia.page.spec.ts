import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
/* agregado cesar prueba borrar */
import { DomSanitizer } from '@angular/platform-browser';
/* termina */

import { NoticiaPage } from './noticia.page';

describe('NoticiaPage', () => {
  let component: NoticiaPage;
  let fixture: ComponentFixture<NoticiaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
