import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DadJokeService } from '../dadjoke.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { NavComponent } from '../nav/nav.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent, NavComponent],
      imports: [RouterTestingModule.withRoutes([]), HttpClientModule],
      providers: [
        {
          provide: DadJokeService,
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an empty search field', () => {
    const inputField = fixture.debugElement.nativeElement.querySelector(
      '#search-input',
    );
    expect(inputField).toBeTruthy();
    expect(inputField.value).toEqual('');
  });
});
