import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() buttonText = '';
  @Input() galleryItems: IGalleryItem[] = [];
}
