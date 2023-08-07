import { RatingComponent } from './components/rating/rating.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './modules/angular-material.module';
// Components
import { HeaderComponent, SpinnerComponent, ConfirmationDialogComponent } from './components';
// Pipes
import { TruncatePipe } from './pipes/truncate.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

const components = [HeaderComponent, SpinnerComponent, ConfirmationDialogComponent, RatingComponent];
const pipes = [TruncatePipe]
const modules = [CommonModule, FormsModule, ReactiveFormsModule, AngularMaterialModule, NgbRatingModule];

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
    providers: []
})
export class SharedModule { }
