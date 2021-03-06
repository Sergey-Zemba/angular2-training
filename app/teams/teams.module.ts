import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TeamsComponent } from './teams.component';
import { TeamsService } from './teams.service';

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
    ],
    providers: [TeamsService]
})

export class TeamsModule { }