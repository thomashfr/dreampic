import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './signup/signup.component';
import { SignUpService } from './signup/signup.service';

@NgModule({
  declarations: [SignInComponent, HomeComponent, SignUpComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule,
    CommonModule,
    VMessageModule,
  ],
  providers: [SignUpService],
})
export class HomeModule {}
