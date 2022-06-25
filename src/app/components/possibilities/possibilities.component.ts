import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollMagic } from 'scrollmagic';
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-possibilities',
  templateUrl: './possibilities.component.html',
  styleUrls: ['./possibilities.component.css'],
})
export class PossibilitiesComponent implements OnInit {
  @ViewChild('posibilityHeaderWrapper', { static: true })
  posibilityHeaderWrapper!: ElementRef<HTMLHeadElement>;

  @ViewChild('posibilityHeader', { static: true })
  posibilityHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('posibilityHeaderImage', { static: true })
  posibilityHeaderImage!: ElementRef<HTMLDivElement>;

  @ViewChild('posibilityWrapper', { static: true })
  posibilityWrapper!: ElementRef<HTMLDivElement>;

  @ViewChild('virtualPartyHeader', { static: true })
  virtualPartyHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('virtualPartyPara', { static: true })
  virtualPartyPara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('retailSpaceHeader', { static: true })
  retailSpaceHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('retailSpacePara', { static: true })
  retailSpacePara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('avatarCreationHeader', { static: true })
  avatarCreationHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('avatarCreationPara', { static: true })
  avatarCreationPara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('experienceCenterHeader', { static: true })
  experienceCenterHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('experienceCenterPara', { static: true })
  experienceCenterPara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('brandZoneHeader', { static: true })
  brandZoneHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('brandZonePara', { static: true })
  brandZonePara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('brandZoneImage', { static: true })
  brandZoneImage!: ElementRef<HTMLImageElement>;

  // @ViewChild('videoOnScroll', { static: true })
  // videoOnScroll!: ElementRef<HTMLVideoElement>;

  // controller = new ScrollMagic.Controller();

  constructor() {}

  ngOnInit(): void {
    this.isScrollAnimation();
    // this.videoOnScrolling();
  }
  isScrollAnimation() {
    ScrollTrigger.create({
      trigger: '.possibility-header-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.possibility-header-image',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.possibility-virtual-parties-header-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
    ScrollTrigger.create({
      trigger: '.possibility-virtual-parties-header-p',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.retail-spaces-bg-content-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.retail-spaces-bg-content-p',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.avatar-creation-header-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.avatar-creation-content',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.experience-center-bg-content-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.experience-center-bg-content-p',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.brand-zone-content-h1',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.brand-zone-content-p',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    ScrollTrigger.create({
      trigger: '.brand-zone-content-image',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });
  }

  // videoOnScrolling() {
  //   let scene = new ScrollMagic.Scene({
  //     duration: 9000, // the scene should last for a scroll distance of 100px,
  //     triggerElement: this.posibilityHeaderWrapper,
  //     triggerHook: 50, // start this scene after scrolling for 50px
  //   }).addIndicators()
  //     .setPin(this.posibilityHeader) // pins the element for the the scene's duration
  //     .addTo(this.controller);

  //   let accelAmount = 0.1;
  //   let scrollPos = 0;
  //   let delay = 0;
  //   scene.on('update', e => {
  //     scrollPos = e.scrollPos;

  //   })
  // }
}
