import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DropDownAnimation } from 'src/app/animations/navAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [DropDownAnimation],
})
export class HomeComponent implements OnInit {
  okayImReadyBtn: any;
  isOpen = false;
  isMobile = false;

  @ViewChild('homeVideo')
  homeVideo!: ElementRef<HTMLVideoElement>;
  isWaveText = false;
  videoHome: any;

  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.okayImReadyBtn = document.getElementById('okay-im-ready');
    this.breakpointObserver
      .observe(['(min-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  ngAfterViewInit() {
    this.homeVideo.nativeElement.muted = true;
    this.homeVideo.nativeElement.play();

    this.videoHome = document.querySelector('.landing-video-bg');
    this.videoHome.addEventListener('canplay', () => {
      setTimeout(() => {
        this.isWaveText = true;
      }, 100);
    });
  }

  okay() {
    this.isOpen = false;
  }
  openMenu() {
    this.isOpen = true;
    console.log(this.isOpen);
  }
  closeMenu() {
    this.isOpen = false;
    console.log(this.isOpen);
  }
  okayImReady(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    this.isOpen = false;
  }
}
