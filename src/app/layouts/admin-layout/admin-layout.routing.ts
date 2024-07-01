import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { ProjetComponent } from '../../pages/projet/projet.component';
import { AjouterProjetComponent } from 'src/app/pages/ajouter-projet/ajouter-projet.component';
import { AddSessionComponent } from 'src/app/pages/add-session/add-session.component';
import {AddeventComponent} from "../../pages/addevent/addevent.component";
import {VieweventComponent} from "../../pages/viewevent/viewevent.component";
export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },

    { path: 'event',         component: VieweventComponent },
    { path: 'addevent',     component: AddeventComponent },
    { path: 'addproject',     component: AjouterProjetComponent },
    { path: 'addsession', component: AddSessionComponent},
];
