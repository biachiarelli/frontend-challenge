import { Routes } from '@angular/router';
import { GiveConsentComponent } from './pages/give-consent/give-consent.component';
import { CollectedConsentsComponent } from './pages/collected-consents/collected-consents.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: GiveConsentComponent },
    { path: 'add', component: GiveConsentComponent },
    { path: 'collected', component: CollectedConsentsComponent },
    { path: '**', component: NotFoundComponent }
];