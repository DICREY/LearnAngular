// Librarys 
import { Routes } from '@angular/router';

// Imports 
import { HomeComponent } from '../Component/Home/home.component'
import { CounterComponent } from '../Component/Pages/counter/counter.component';
import { HeroComponent } from '../Component/Pages/Hero/hero.component';

// Routes
export const routes: Routes = [
    {
        path:  '',
        component: CounterComponent
    },
    {
        path:  'home',
        component: HomeComponent
    },
    {
        path:  'hero',
        component: HeroComponent
    },
];
