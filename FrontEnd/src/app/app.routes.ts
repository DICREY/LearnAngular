// Librarys 
import { Routes } from '@angular/router';

// Imports 
import { HomeComponent } from './Pages/Home/home.component'
import { CounterComponent } from './Pages/counter/counter.component';
import { HeroComponent } from './Pages/Hero/hero.component';
import { DragonBallComponent } from './Pages/dragon-ball/dragon-ball.component';

// Routes
export const routes: Routes = [
    {
        path:  'counter',
        component: CounterComponent
    },
    {
        path:  'home',
        component: HomeComponent
    },
    {
        path:  'home',
        component: HomeComponent
    },
    {
        path:  'hero',
        component: HeroComponent,
    },
    {
        path:  'dragonball',
        component: DragonBallComponent,
        title: 'Dragon'
    },
    {
        path:  '**',
        redirectTo: 'home'
    },
    
];
