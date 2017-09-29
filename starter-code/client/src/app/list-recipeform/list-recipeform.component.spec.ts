import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecipeformComponent } from './list-recipeform.component';

describe('ListRecipeformComponent', () => {
  let component: ListRecipeformComponent;
  let fixture: ComponentFixture<ListRecipeformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecipeformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecipeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
