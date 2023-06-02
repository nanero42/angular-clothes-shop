import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EIcon } from 'src/app/enums';
import { IGalleryItem } from 'src/app/interfaces';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent implements OnInit {
  @Input() title = '';
  @Input() subTitle = '';
  @Input() buttonText = '';
  @Input() galleryItems: IGalleryItem[] = [];

  @Input() brand = 'Dorothy Perkins';
  @Input() itemName = 'Evening Dress';
  @Input() currency = '$';
  @Input() price = 15;
  @Input() discountPercent = 20;
  @Input() discountAmount = 0;

  hasDiscount = false;
  discountPrice = 0;
  discountLabel = '';

  eIcon = EIcon;

  style = {
    'background-image': `url(/assets/images/hero.jpeg)`,
  }

  ngOnInit(): void {
    this.calcDiscount();
    this.calcDiscountPrice();
    this.getDiscountText();
  }

  calcDiscountPrice(): void {
    if (!this.price) {
      throw new Error('Error. Price must be above zero');
    }

    if (this.discountPercent) {
      this.discountPrice = Math.round(this.price * ((100 - this.discountPercent) / 100));
    } else if (this.discountAmount) {

      if (this.price - this.discountAmount < 0) throw new Error('Error. Discount price cannot be lower zero');

      this.discountPrice = Math.round(this.price - this.discountAmount);
    }
  }

  getDiscountText(): void {
    if (this.discountPercent) {
      this.discountLabel = `-${this.discountPercent}%`;
    } else if (this.discountAmount) {
      this.discountLabel = `-${this.discountAmount}${this.currency}`;
    } else {
      this.discountLabel = '';
    }
  }

  calcDiscount(): void {
    this.hasDiscount = !!(this.discountPercent || this.discountAmount);
  }
}
