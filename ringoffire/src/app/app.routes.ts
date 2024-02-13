import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { GameComponent } from './game/game.component';
import {MatButtonModule} from '@angular/material/button';


export const routes: Routes = [
    { path: '', component: StartScreenComponent },
    { path: 'game', component: GameComponent }

];
