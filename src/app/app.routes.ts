import { Routes } from '@angular/router';
import { Header } from './header/header';
import { Courses } from './courses/courses';

export const routes: Routes = [
  {
    path: '',
    component: Header,
  },
  {
    path: 'courses',
    component: Courses,
  },
];
