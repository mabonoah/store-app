import { Component} from '@angular/core';
import { MatButtonColor } from '../../enums/mat.enums';

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  title: string = 'Delete';
  message: string = 'Would you like to delete it?';
  okButtonColor: string = MatButtonColor.accent;

  constructor() { }

}
