package com.phonebookservice.model;



import javax.persistence.*;


@Entity
@Table(name="phoneBook")
public class PhoneBook {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequence")
    @Column(name="id")
    @SequenceGenerator(name = "sequence", sequenceName = "phoneBook_sequence", allocationSize = 1)
    private Long id;

    @Column(name="Name")
    private String name;

    @Column(name="Phone_number")
    private String phoneNumber;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
