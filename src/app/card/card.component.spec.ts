import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DadJokeService } from '../dadjoke.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { of } from 'rxjs';
import { NavComponent } from '../nav/nav.component';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(async () => {
    TestBed.configureTestingModule({
      declarations: [
        CardComponent, NavComponent],
      imports: [RouterTestingModule.withRoutes([]), AppModule],
      providers: [
        {
          provide: DadJokeService
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
            }),
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render ellipses initially', () => {
    const ellipses = fixture.debugElement.query(By.css('.lds-ellipsis'));
    expect(component.showEllipses).toBeFalsy();
    expect(ellipses).toBeNull();
  });

  it('should not render buttons initially', () => {
    const buttons = fixture.debugElement.query(By.css('.btn'));
    expect(component.showButtons).toBeFalsy();
    expect(buttons).toBeNull();
  });
});
