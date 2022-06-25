import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
declare var anime: any;
@Component({
  selector: 'app-client-sliders',
  templateUrl: './client-sliders.component.html',
  styleUrls: ['./client-sliders.component.css'],
})
export class ClientSlidersComponent implements OnInit {
  textWrapper: any;
  constructor() {}

  @ViewChild('clientHeader', { static: true })
  clientHeader!: ElementRef<HTMLDivElement>;

  customOptions: OwlOptions = {
    loop: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin: 20,

    center: false,
    navSpeed: 500,
    nav: true,
    navText: [
      '<img src="../../../assets/images/left-arrow.png" />',
      '<img src="../../../assets/images/right-arrow.png" />',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      940: {
        items: 4,
      },
    },
  };

  ngOnInit(): void {
    this.isScrollAnimation();
  }
  isScrollAnimation() {
    ScrollTrigger.create({
      trigger: '.client-header-text',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
  }
  ngAfterViewInit(): void {
    // Wrap every letter in a span
    this.textWrapper = document.querySelector('.explore-letter');
    this.textWrapper.innerHTML = this.textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.explore-letter .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el: any, i: any) => 70 * i,
      })
      .add({
        targets: '.explore-letter',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }

  slidesStore: any = [
    {
      caseStudy: '../../../assets/images/case-studies/case-study-1.jpg',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-2.png',
      title: 'DANCE DEEWANE JUNIOR',
      tvShow: 'COLORS TV',
      caseStudyLink: 'https://ddj.v-verse.space/',
    },
    {
      caseStudy: '../../../assets/images/case-studies/case-study-2.png',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-1.png',
      title: 'RUDRA:THE EDGE OF DARKNESS',
      tvShow: 'HOTSTAR',
      caseStudyLink: 'https://rudra-lobby.v-verse.space/',
    },
    {
      caseStudy: '../../../assets/images/case-studies/case-study-1.jpg',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-2.png',
      title: 'DANCE DEEWANE JUNIOR',
      tvShow: 'COLORS TV',
      caseStudyLink: 'https://ddj.v-verse.space/',
    },
    {
      caseStudy: '../../../assets/images/case-studies/case-study-2.png',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-1.png',
      title: 'RUDRA:THE EDGE OF DARKNESS',
      tvShow: 'HOTSTAR',
      caseStudyLink: 'https://rudra-lobby.v-verse.space/',
    },
    {
      caseStudy: '../../../assets/images/case-studies/case-study-1.jpg',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-2.png',
      title: 'DANCE DEEWANE JUNIOR',
      tvShow: 'COLORS TV',
      caseStudyLink: 'https://ddj.v-verse.space/',
    },
    {
      caseStudy: '../../../assets/images/case-studies/case-study-2.png',
      overlayImage:
        '../../../assets/images/case-studies-overlay/cs-overlay-1.png',
      title: 'RUDRA:THE EDGE OF DARKNESS',
      tvShow: 'HOTSTAR',
      caseStudyLink: 'https://rudra-lobby.v-verse.space/',
    },
  ];
}
