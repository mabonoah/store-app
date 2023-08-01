import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
    declarations: [PageNotFoundComponent],
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ]
})
export class SharedModule { }
