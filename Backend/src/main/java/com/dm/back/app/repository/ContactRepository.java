package com.dm.back.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.dm.back.app.entity.Contact;

public interface ContactRepository extends JpaRepository<Contact, Integer> {

}
