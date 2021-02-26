import { Component, Input } from '@angular/core'

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['../../app.component.css'],
})
export class PhotoComponent {
  @Input() description = 'Leão'
  @Input() url = ''
}
