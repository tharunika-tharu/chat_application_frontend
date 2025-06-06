// import { Component, input } from '@angular/core';
// import { Message } from '../../conversations/model/message.model';
// import { FaIconComponent } from '@fortawesome/angular-fontawesome';

// @Component({
//   selector: 'wac-send-state-display',
//   standalone: true,
//   imports: [FaIconComponent],
//   templateUrl: './send-state-display.compoe',
//   styleUrls: ['./send-state-display.component.scss'],
// })
// export class SendStateDisplayComponent {
//   message = input.required<Message>();
// }

import { Component, input } from '@angular/core';
import { Message } from '../../conversations/model/message.model';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'wac-send-state-display',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './send-state-display.component.html',
  styleUrls: ['./send-state-display.component.scss'],
})
export class SendStateDisplayComponent {
  message = input.required<Message>();
}
