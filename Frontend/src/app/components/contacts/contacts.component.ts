import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
  contacts: Observable<Contact[]>;

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.contacts = this.contactService.getContacts();
  }

  addContact() {
    this.router.navigate(['add']);
  }

  updateContact(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteContact(id: number) {
    this.contactService.deleteContact(id)
      .subscribe(res => {
        console.log(res);
        this.reloadData();
      }, err => console.log(err));
  }

}
