import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
  
})
export class LandingComponent implements OnInit {
  prec : any;
  suiv:any;

constructor() { }

  ngOnInit(): void {
    this.prec()
    this.suiv()
    // var swiper = new Swiper('.blog-slider', {
    //   spaceBetween: 30,
    //   effect: 'fade',
    //   loop: true,
    //   mousewheel: {
    //     invert: false,
    //   },
    //   // autoHeight: true,
    //   pagination: {
    //     el: '.blog-slider__pagination',
    //     clickable: true,
    //   }
    // });
    
  }

}
