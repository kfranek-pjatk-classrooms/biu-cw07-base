import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ContactData} from '../../shared/contact-data.model';

@Component({
  selector: 'contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['contact-list-item.component.css']
})
export class ContactListItemComponent {
  @Input() public contactData: ContactData;
}
