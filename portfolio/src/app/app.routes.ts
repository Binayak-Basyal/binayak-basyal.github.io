import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Resume } from './resume/resume';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'resume', component: Resume },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact }
];
