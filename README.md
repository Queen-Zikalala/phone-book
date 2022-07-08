# phone-book

#phone-book-service
(1) Is a spring boot application
(2) command to run is: mvn spring-boot:run
(3) it connects to H2 database
(4) Has Rest API's that are called by phoneBookWeb
(5) Runs on port 8080


#phoneBookWeb
(1) Is a angular 14 application
(2) Connects to phone-book-service for http requests
(3) install node modules command is: npm i
(4) command to run is: ng s
(5) User can add entry to phonebook by using Post method
(6) User can get list of entries by using Get method
(7) User can search by name
(8) Uses ngx-datatable library 
