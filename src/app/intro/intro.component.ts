import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Router, ActivatedRoute,  ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
  providers: [ContactService],

})
export class IntroComponent implements OnInit {
  FormData: any;
  projects:any;


  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router, private http: HttpClient,) { }
  
  goToUrl (id:number) {
    this.router.navigate(['/case-study/','id'])
  }

  ngOnInit(): void {

  
    this.projects = this.http.get("https://portfolioapi.up.railway.app/project/").subscribe(
     data => this.projects = data )

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
