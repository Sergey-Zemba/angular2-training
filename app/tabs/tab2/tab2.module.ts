import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../../shared/shared.module';

import { Tab2Component } from './tab2.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        SharedModule
    ],
    declarations: [
        Tab2Component
    ],
    exports: [
        Tab2Component
    ]
})

export class Tab2Module { }