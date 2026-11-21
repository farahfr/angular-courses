import { Component, computed, effect, signal } from '@angular/core';
import { Tache } from '../models/tache.model';
import { Task } from '../models/task';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  taches = signal<Tache[]>([
    { id: 1, title: 'Tâche 1', completed: false },
    { id: 2, title: 'Tâche 2', completed: true },
    { id: 3, title: 'Tâche 3', completed: false },
  ]);

  newItem = signal('');

  availableTaches = computed(() => this.taches().filter(tache => !tache.completed));

  emptyTaches = computed(() => this.availableTaches().length === 0);

  tasks = signal<Task[]>([]);

  count = computed(() => this.tasks().length);

  private nextTaskId = 1;

  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }

  clear() {
    this.tasks.set([]);
  }

  addOnClick() {
    this.add({
      id: this.nextTaskId,
      title: `Tâche ${this.nextTaskId}`,
      date: new Date().toISOString().slice(0, 10),
    });
    this.nextTaskId++;
  }

  addWithPush() {
    this.tasks().push({
      id: this.nextTaskId,
      title: `Tâche ${this.nextTaskId} (push)`,
      date: new Date().toISOString().slice(0, 10),
    });
    this.nextTaskId++;
  }

  constructor() {
    effect(() => {
      console.log('Tâches disponibles:', this.availableTaches());
    });
  }

  addTache() {
    const nom = this.newItem().trim();
    if (!nom) return;
    const nextId = Math.max(0, ...this.taches().map(t => t.id)) + 1;
    this.taches.update(taches => [...taches, { id: nextId, title: nom, completed: false }]);
    this.newItem.set('');
  }

  emptyTachesList() {
    this.taches.set([]);
  }

  deleteTache(tacheId: number) {
    this.taches.update(taches => taches.filter(tache => tache.id !== tacheId));
  }
}
