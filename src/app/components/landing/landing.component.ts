import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  isMobile = false;

  constructor(
    private router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}
  @ViewChild('rightArrowAnim', { static: true })
  rightArrowAnim!: ElementRef<HTMLImageElement>;

  @ViewChild('landingVideo')
  landingVideo!: ElementRef<HTMLVideoElement>;

  video: any;
  isWaveText = false;

  ngOnInit(): void {
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
    this.landingVideo.nativeElement.muted = true;
    this.landingVideo.nativeElement.play();
    this.video = document.querySelector('.landing-video-bg');
    this.isAnimation();
    this.video.addEventListener('canplay', () => {
      setTimeout(() => {
        this.isWaveText = true;
      }, 100);
    });
  }

  gotoHome() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  isAnimation() {
    gsap.fromTo(
      this.rightArrowAnim.nativeElement,
      {
        opacity: 0,
        translateX: -10,
      },
      {
        opacity: 1,
        duration: 1,
        translateX: 15,
        repeat: -1,
      }
    );
  }
}
