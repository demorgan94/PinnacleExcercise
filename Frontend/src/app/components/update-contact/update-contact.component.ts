import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html'
})
export class UpdateContactComponent implements OnInit {

  id:number;
  contact: Contact;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contact = new Contact();

    this.id = this.route.snapshot.params.id;

    this.contactService.getContact(this.id)
      .subscribe(data => {
        console.log(data);
        this.contact = data;
      }, error => console.log(error));
  }

  updateContact() {
    this.contactService.updateContact(this.id, this.contact)
      .subscribe(data => console.log(data), error => console.log(error));

    this.contact = new Contact();
    this.goToList();
  }

  onSubmit() {
    this.updateContact();
  }

  goToList() {
    this.router.navigate(['/contacts']);
  }
}
