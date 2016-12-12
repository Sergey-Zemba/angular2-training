import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';

const tabRoutes: Routes = [
    { path: 'one', component: Tab1Component },
    { path: 'two', component: Tab2Component },
    { path: '', redirectTo: '/one', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forChild(tabRoutes)
    ],
    exports: [RouterModule]
})

export class TabsRoutingModule { }

