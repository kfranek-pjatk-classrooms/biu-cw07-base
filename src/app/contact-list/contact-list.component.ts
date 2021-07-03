import {Component, Input} from '@angular/core';
import {ContactData} from '../shared/contact-data.model';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html'
})
export class ContactListComponent {
  public contactData: ContactData[];
  @Input() public newValue: string;

  constructor() {
    this.contactData = [
      new ContactData("Telefon", "123"),
      new ContactData("E-mail", "fo@bar.com")
    ];
    this.newValue = '';
  }

  onItemAdded(contactItemData: {labelText: string, value: string}) {
    this.contactData.push(
      new ContactData(contactItemData.labelText, contactItemData.value)
    );
  }
}
