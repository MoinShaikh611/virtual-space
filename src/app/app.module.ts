import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientSlidersComponent } from './components/client-sliders/client-sliders.component';
import { HomeComponent } from './components/home/home.component';
import { CreativeExcellenceComponent } from './components/creative-excellence/creative-excellence.component';
import { PossibilitiesComponent } from './components/possibilities/possibilities.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LandingComponent } from './components/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AvatarCreationComponent } from './components/avatar-creation/avatar-creation.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
@NgModule({
  declarations: [
    AppComponent,
    ClientSlidersComponent,
    HomeComponent,
    CreativeExcellenceComponent,
    PossibilitiesComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent,
    AvatarCreationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    NgxIntlTelInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
