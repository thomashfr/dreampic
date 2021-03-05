import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { ToastSevice } from 'src/app/shared/components/toast/toast.service';
import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html',
})
export class PhotoDetailsComponent implements OnInit {
  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private toastService: ToastSevice,
    private userService: UserService,
  ) {}
  ngOnInit(): void {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ = this.photoService.findById(this.photoId);
    this.photo$.subscribe(
      () => {},
      err => {
        this.router.navigate(['not-found']);
      },
    );
  }
  remove() {
    this.photoService.removePhoto(this.photoId).subscribe(
      () => {
        this.toastService.success('Photo removed!', true);
        this.router.navigate(['/user', this.userService.getUserName()], {
          replaceUrl: true,
        });
      },
      err => {
        this.toastService.warning('Could not delete the photo!');
      },
    );
  }

  like(photo: Photo) {
    this.photoService.like(photo.id).subscribe(liked => {
      if (liked) {
        this.photo$ = this.photoService.findById(photo.id);
      }
    });
  }
}
