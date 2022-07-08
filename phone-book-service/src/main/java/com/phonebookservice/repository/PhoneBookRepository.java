package com.phonebookservice.repository;

import com.phonebookservice.model.PhoneBook;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PhoneBookRepository extends JpaRepository<PhoneBook,Long> {

    public List<PhoneBook> findAll();

    @Query( value = "select * from PHONE_BOOK", nativeQuery = true)
    public List<PhoneBook> findAllSearch(String search);

}
