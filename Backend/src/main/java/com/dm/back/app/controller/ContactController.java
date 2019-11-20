package com.dm.back.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dm.back.app.entity.Contact;
import com.dm.back.app.exception.ResourceNotFoundException;
import com.dm.back.app.repository.ContactRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {

	@Autowired
	ContactRepository contactRepo;
	
	@GetMapping
	private List<Contact> findAllContacts() {
		return contactRepo.findAll();
	}
	
	@GetMapping("/{id}")
	private ResponseEntity<Contact> findContactById(@PathVariable("id") int id) throws ResourceNotFoundException {
		Contact contact = contactRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found for id: " + id));
		return ResponseEntity.ok().body(contact);
	}
	
	@PostMapping
	private Contact addContact(@Valid @RequestBody Contact contact) {
		return contactRepo.save(contact);
	}
	
	@PutMapping("/{id}")
	private ResponseEntity<Contact> updateContact(@PathVariable("id") int id, @Valid @RequestBody Contact contactDetails) throws ResourceNotFoundException {
		Contact contact = contactRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found for id: " + id));
		
		contact.setName(contactDetails.getName());
		contact.setAge(contactDetails.getAge());
		contact.setNickname(contactDetails.getNickname());
		contact.setPhone(contactDetails.getPhone());
		
		final Contact updatedContact = contactRepo.save(contact);
		return ResponseEntity.ok(updatedContact);
	}
	
	@DeleteMapping("/{id}")
	private ResponseEntity<Contact> deleteContact(@PathVariable("id") int id) throws ResourceNotFoundException {
		Contact contact = contactRepo.findById(id).orElseThrow(() -> new ResourceNotFoundException("Contact not found for id: " + id));
		
		contactRepo.delete(contact);
		return ResponseEntity.ok(null);
	}
}
