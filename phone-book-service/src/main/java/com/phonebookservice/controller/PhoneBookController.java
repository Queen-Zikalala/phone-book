package com.phonebookservice.controller;

import com.phonebookservice.model.PhoneBook;
import com.phonebookservice.request.PhoneBookRequest;
import com.phonebookservice.service.PhoneBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/api/v1/phoneBook")
public class PhoneBookController {

    @Autowired
    private PhoneBookService phoneBookService;

    @GetMapping("/entryList")
    ResponseEntity<Object> listPhoneBook( @RequestParam(value = "search", required = false) String search) throws Exception {
        List<PhoneBook> phoneBookList;
        if (null != search) {
            phoneBookList = phoneBookService.findAll( search);
        } else {
            phoneBookList = phoneBookService.findAll();
        }

        return new ResponseEntity<>(phoneBookList, HttpStatus.OK);
    }

    @PostMapping(consumes = "application/json")
    public @ResponseBody
    ResponseEntity<Object> createPhoneBook(@RequestBody PhoneBookRequest phoneBookRequest)
            throws Exception {
        return new ResponseEntity<>(phoneBookService.savePhoneBook(phoneBookRequest),
                HttpStatus.OK);

    }

}
