import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [ContactService],
  
})
export class LandingComponent implements OnInit {
  prec : any;
  suiv:any;
  FormData: any;
  // FormData: FormGroup;


  // constructor(private builder: FormBuilder) { }
  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router,) { }


  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required])
    });
  }


  onSubmit(FormData: any) {
    console.log(FormData)
    this.contact.PostMessage(FormData)
      .subscribe(response => {
        alert('message sent successfully!')
        this.router.navigate(["home"])
        console.log(response)
      }, error => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }
}




