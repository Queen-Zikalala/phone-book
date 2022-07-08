import { Component, OnInit } from '@angular/core';
import { SelectionType } from '@swimlane/ngx-datatable';
import { PhoneBook } from 'src/app/core/model/phone-book';
import { PhoneBookService } from 'src/app/core/services/phone-book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public phoneBookList: PhoneBook[]=[];
  selected=[];
  searchData:PhoneBook[]=[];
  single:SelectionType
  searchValue: string='';

  constructor(
    private phoneBookService:PhoneBookService
  ) {}

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts():void{
    this.phoneBookService.getAll().subscribe((Response:PhoneBook[])=>{
    this.phoneBookList=Response; 
    this.searchData=Response;
    console.log('phoneBookList',this.phoneBookList);})
  }


  search(event:any):void{
    console.log(event)
    this.phoneBookList=this.searchData.filter(data => data.name.toLowerCase()
    .indexOf(this.searchValue.toLowerCase())!== -1 ||!this.searchValue.toLowerCase())
  }





}
