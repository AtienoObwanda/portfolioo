import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.css'],
  providers: [ContactService],

})
export class CaseStudyComponent implements OnInit {

  FormData: any;
  project:any;

  // constructor(private builder: FormBuilder) { }
  constructor(private builder: FormBuilder, private contact: ContactService, private router: Router, private activatedRoute: ActivatedRoute ,private http: HttpClient) { }


  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(id)
    this.project = this.http.get("https://pfolioapi.herokuapp.com/portfolio/project-detail/"+id+"/").subscribe(
    data => this.project = data )

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

