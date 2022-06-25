import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
declare var anime: any;
@Component({
  selector: 'app-creative-excellence',
  templateUrl: './creative-excellence.component.html',
  styleUrls: ['./creative-excellence.component.css'],
})
export class CreativeExcellenceComponent implements OnInit, AfterViewInit {
  @ViewChild('creativeWrapper', { static: true })
  creativeWrapper!: ElementRef<HTMLDivElement>;

  @ViewChild('creativeHeader', { static: true })
  creativeHeader!: ElementRef<HTMLHeadElement>;

  @ViewChild('creativePara', { static: true })
  creativePara!: ElementRef<HTMLParagraphElement>;

  @ViewChild('demoBtn', { static: true })
  demoBtn!: ElementRef<HTMLDivElement>;

  // @ViewChild('rightArrowAnim', { static: true })
  // rightArrowAnim!: ElementRef<HTMLImageElement>;

  @ViewChild('bubble1', { static: true })
  bubble1!: ElementRef<HTMLImageElement>;

  @ViewChild('bubble2', { static: true })
  bubble2!: ElementRef<HTMLImageElement>;

  @ViewChild('bubble3', { static: true })
  bubble3!: ElementRef<HTMLImageElement>;

  @ViewChild('bubble4', { static: true })
  bubble4!: ElementRef<HTMLImageElement>;

  @ViewChild('cloud', { static: true })
  cloud!: ElementRef<HTMLImageElement>;

  @ViewChild('cloud2', { static: true })
  cloud2!: ElementRef<HTMLImageElement>;

  @ViewChild('cloud3', { static: true })
  cloud3!: ElementRef<HTMLImageElement>;

  headerChars: any;
  constructor() {}
  textWrapper: any;

  ngOnInit(): void {
    this.isScrollAnimation();
  }

  ngAfterViewInit(): void {
    // Wrap every letter in a span
    this.textWrapper = document.querySelector('.an-1');
    this.textWrapper.innerHTML = this.textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime
      .timeline({ loop: true })
      .add({
        targets: '.an-1 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 950,
        delay: (el: any, i: any) => 70 * i,
      })
      .add({
        targets: '.an-1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000,
      });
  }

  isScrollAnimation() {
    ScrollTrigger.create({
      trigger: '.creative-excellence-content-p',
      toggleClass: 'is-show',
      start: 'top center',
      once: true,
    });

    // ScrollTrigger.create({
    //   trigger: '.demo-btn-img-wrapper',
    //   toggleClass: 'is-show',
    //   start: 'top center',
    //   once: true,
    // });

    // gsap.fromTo(
    //   this.rightArrowAnim.nativeElement,
    //   {
    //     opacity: 0,
    //     translateX: -10,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 1,
    //     translateX: 15,
    //     repeat: -1,
    //   }
    // );

    let tl = gsap.timeline({ repeat: -1 });
    let t2 = gsap.timeline({ repeat: -1 });
    let t3 = gsap.timeline({ repeat: -1 });
    let t4 = gsap.timeline({ repeat: -1 });

    let b1 = gsap.timeline({ repeat: -1 });
    let b2 = gsap.timeline({ repeat: -1 });
    let b3 = gsap.timeline({ repeat: -1 });

    tl.to(this.bubble1.nativeElement, 3, {
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
    });
    tl.to(this.bubble1.nativeElement, 2, {
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
    });

    tl.to(this.bubble1.nativeElement, 3, {
      y: '+=30',
      x: '+=20',
      rotation: '+=5',
    });
    tl.to(this.bubble1.nativeElement, 2, {
      y: '-=30',
      x: '-=20',
      rotation: '+=5',
    });

    t2.to(this.bubble2.nativeElement, 3, {
      y: '+=30',
      x: '+=20',
      rotation: '+=5',
    });
    t2.to(this.bubble2.nativeElement, 2, {
      y: '-=30',
      x: '-=20',
      rotation: '+=5',
    });

    t2.to(this.bubble2.nativeElement, 3, {
      y: '-=30',
      x: '+=20',
      rotation: '+=5',
    });
    t2.to(this.bubble2.nativeElement, 2, {
      y: '+=30',
      x: '-=20',
      rotation: '+=5',
    });

    t3.to(this.bubble3.nativeElement, 3, {
      y: '-=30',
      x: '+=20',
      rotation: '-=5',
    });
    t3.to(this.bubble3.nativeElement, 2, {
      y: '+=30',
      x: '-=20',
      rotation: '-=5',
    });

    t3.to(this.bubble3.nativeElement, 3, {
      y: '+=30',
      x: '+=20',
      rotation: '+=5',
    });
    t3.to(this.bubble3.nativeElement, 2, {
      y: '-=30',
      x: '-=20',
      rotation: '+=5',
    });

    t4.to(this.bubble4.nativeElement, 3, {
      y: '+=30',
      x: '+=20',
      rotation: '+=5',
    });
    t4.to(this.bubble4.nativeElement, 2, {
      y: '-=30',
      x: '-=20',
      rotation: '+=5',
    });

    t4.to(this.bubble4.nativeElement, 3, {
      y: '-=30',
      x: '+=20',
      rotation: '+=5',
    });
    t4.to(this.bubble4.nativeElement, 2, {
      y: '+=30',
      x: '-=20',
      rotation: '+=5',
    });

    b1.to(this.cloud.nativeElement, 3, {
      x: '-=50',
    });
    b1.to(this.cloud.nativeElement, 3, {
      x: '+=50',
    });

    b2.to(this.cloud2.nativeElement, 3, {
      x: '-=50',
    });
    b2.to(this.cloud2.nativeElement, 3, {
      x: '+=50',
    });

    b3.to(this.cloud3.nativeElement, 3, {
      x: '-=50',
    });
    b3.to(this.cloud3.nativeElement, 3, {
      x: '+=50',
    });
  }
}
