import { Routes } from '@angular/router';
import {MeComponent} from "./components/me/me.component";
import {HomeComponent} from "./pages/home/home.component";

export default [
    { path: '',
        component: HomeComponent,
    },
    {
        path: 'project/:slug',
        loadComponent: () => import('./pages/project-detail/project-detail.component').then(m => m.ProjectDetailComponent),
    },

    { path: '**', redirectTo: '' }, ] as Routes;


;
