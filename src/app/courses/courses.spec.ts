import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Courses } from './courses';

describe('Courses', () => {
  let component: Courses;
  let fixture: ComponentFixture<Courses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courses],
    }).compileComponents();

    fixture = TestBed.createComponent(Courses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('devrait calculer les tâches disponibles', () => {
    expect(component.taches().length).toBe(3);
    expect(component.availableTaches().length).toBe(2);
  });

  it('devrait ajouter une tâche', () => {
    component.addOnClick();
    expect(component.tasks().length).toBe(1);
    expect(component.count()).toBe(1);
  });

  it('devrait vider les tâches', () => {
    component.addOnClick();
    component.clear();
    expect(component.tasks().length).toBe(0);
    expect(component.count()).toBe(0);
  });

  it('devrait ajouter une tâche dans la liste', () => {
    component.newItem.set('Nouvelle tâche');
    component.addTache();
    expect(component.taches().length).toBe(4);
  });

  it('devrait supprimer une tâche de la liste', () => {
    component.deleteTache(1);
    expect(component.taches().length).toBe(2);
  });
});
