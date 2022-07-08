package com.phonebookservice.service;

import com.phonebookservice.model.PhoneBook;
import com.phonebookservice.repository.PhoneBookRepository;
import com.phonebookservice.request.PhoneBookRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


public interface PhoneBookService {


    public List<PhoneBook> findAll() throws Exception;

    public List<PhoneBook> findAll(String searchText) throws Exception;

    PhoneBook savePhoneBook(PhoneBookRequest phoneBookRequest) throws Exception;
}
