import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
import { SnackBarService } from '../services/snack-bar.service';

const modules = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
    declarations: [],
    imports: [
        ...modules
    ],
    exports: [
        ...modules
    ],
    providers: [SnackBarService]
})
export class SharedModule { }
