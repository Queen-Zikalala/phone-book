package com.phonebookservice.serviceImpl;

import com.phonebookservice.model.PhoneBook;
import com.phonebookservice.repository.PhoneBookRepository;
import com.phonebookservice.request.PhoneBookRequest;
import com.phonebookservice.service.PhoneBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhoneBookServiceImpl implements PhoneBookService {

    @Autowired
    private PhoneBookRepository phoneBookRepository;


    @Override
    public List<PhoneBook> findAll() throws Exception {
        try{
            return phoneBookRepository.findAll();
        }catch (Exception e){
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public List<PhoneBook> findAll(String searchText) throws Exception {
        try {
            return phoneBookRepository.findAllSearch(searchText);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }


    @Override
    public PhoneBook savePhoneBook(PhoneBookRequest phoneBookRequest) throws Exception {
//        return phoneBookRepository.save(phoneBookRequest);
        PhoneBook phoneBook=new PhoneBook();
        phoneBook.setName(phoneBookRequest.getName());
        phoneBook.setPhoneNumber(phoneBookRequest.getPhoneNumber());
        return phoneBookRepository.save(phoneBook);
    }
}
