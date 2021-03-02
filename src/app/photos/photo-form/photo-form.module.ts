import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ImmediateClickModule } from 'src/app/shared/components/directives/immediate-click/immediate-click.module';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoFormComponent } from './photo-form.component';

@NgModule({
  declarations: [PhotoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PhotoModule,
    ImmediateClickModule,
    RouterModule,
    VMessageModule,
  ],
})
export class PhotoFormModule {}
