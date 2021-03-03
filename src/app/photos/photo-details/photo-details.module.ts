import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShowIfLoggedModule } from 'src/app/shared/components/directives/show-if-logged/show-if-logged.module';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';

@NgModule({
  declarations: [
    PhotoDetailsComponent,
    PhotoOwnerOnlyDirective,
    PhotoCommentComponent,
  ],
  exports: [PhotoDetailsComponent, PhotoCommentComponent],
  imports: [
    CommonModule,
    RouterModule,
    PhotoModule,
    ShowIfLoggedModule,
    VMessageModule,
    ReactiveFormsModule,
  ],
})
export class PhotoDetailsModule {}
