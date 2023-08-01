import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';

import { HeaderComponent } from '../components';

import { SnackBarService } from '../services/snack-bar.service';

const components = [HeaderComponent];
const modules = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
    declarations: [...components],
    imports: [
        ...modules
    ],
    exports: [
        ...components,
        ...modules
    ],
    providers: [SnackBarService]
})
export class SharedModule { }
