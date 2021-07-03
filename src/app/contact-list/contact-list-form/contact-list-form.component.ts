import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';


@Component({
  selector: 'contact-list-form',
  templateUrl: './contact-list-form.component.html'
})
export class ContactListFormComponent implements OnInit {
  @Output() itemCreated = new EventEmitter<{ labelText: string, value: string }>();

  ngOnInit() {
  }

  public addNewItem(labelText: HTMLInputElement, value: HTMLInputElement)
  {
    this.itemCreated.emit({
      labelText: labelText.value,
      value: value.value
    });
  }
}
