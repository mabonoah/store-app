import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './angular-material.module';
// Components
import { HeaderComponent, SpinnerComponent, ConfirmationDialogComponent } from '../components';
// Services
import { SnackBarService } from '../services/snack-bar.service';
// Pipes
import { TruncatePipe } from '../pipes/truncate.pipe';
import { SpinnerService } from '../services/spinner.service';

const components = [HeaderComponent, SpinnerComponent, ConfirmationDialogComponent];
const pipes = [TruncatePipe]
const modules = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule];

@NgModule({
    declarations: [...components, ...pipes],
    imports: [
        ...modules
    ],
    exports: [
        ...components,
        ...pipes,
        ...modules
    ],
    providers: [SnackBarService, SpinnerService]
})
export class SharedModule { }
