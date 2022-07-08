import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { PhoneBookService } from 'src/app/core/services/phone-book.service';
import { MOBILE_NUMBER_REGEX } from 'src/app/core/util/Validator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
addContactForm:FormGroup
public isSubmitted$: Subject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(
    private fb:FormBuilder,
    private phoneBookService:PhoneBookService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.addContactForm=this.fb.group({
      name:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(MOBILE_NUMBER_REGEX)])
    })
  }
  get name(): any { return this.addContactForm.get('name'); }
  get phoneNumber(): any { return this.addContactForm.get('phoneNumber'); }

  save():void{
    this.isSubmitted$.next(true);
    if(this.addContactForm.valid){
      const formData = this.addContactForm.value;

      this.phoneBookService.create(formData).subscribe(Response=>{
        console.log(Response);
        this.isSubmitted$.next(false);
        this.router.navigateByUrl('/confirmation')
      },(err)=>{
        this.isSubmitted$.next(false);
        const errormessage=err;
      })
    }else{
      return;
    }
  }

}
