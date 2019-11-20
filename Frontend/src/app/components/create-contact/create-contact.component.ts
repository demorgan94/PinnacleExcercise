import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/service/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html'
})
export class CreateContactComponent implements OnInit {

  contact: Contact = new Contact();

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.contactService.addContact(this.contact)
      .subscribe(data => console.log(data), err => console.log(err));

    this.contact = new Contact();
    this.goToList();
  }

  onSubmit() {
    this.save();
  }

  goToList() {
    this.router.navigate(['/contacts']);
  }

}
