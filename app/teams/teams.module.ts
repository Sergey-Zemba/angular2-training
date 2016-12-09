import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeamsComponent } from './teams.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [
        TeamsComponent
    ],
    exports: [
        TeamsComponent
    ]
})

export class TeamsModule { }