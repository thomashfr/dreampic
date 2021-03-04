import { HttpEvent, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { ToastSevice } from 'src/app/shared/components/toast/toast.service';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
  photoForm: FormGroup;
  file: File;
  preview: string;
  percentDone = 0;
  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private toastService: ToastSevice,
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    const allowComments = this.photoForm.get('allowComments').value;
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() => {
          this.router.navigate(['/user', this.userService.getUserName()]);
        }),
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.percentDone = Math.round((100 * event.loaded) / event.total);
          } else if (event.type == HttpEventType.Response) {
            this.toastService.success('Upload complete', true);
          }
        },
        err => {
          this.toastService.danger('Upload error', true);
        },
      );
  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
