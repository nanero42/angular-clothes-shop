import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EIcon } from 'src/app/enums';

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
  @Input() brand = 'Dorothy Perkins';
  @Input() itemName = 'Evening Dress';
  @Input() currency = '$';
  @Input() price = 15;
  @Input() discountPercent = 20;
  @Input() discountAmount = 0;

  hasDiscount = false;

  eIcon = EIcon;

  style = {
    'background-image': `url(/assets/images/hero.jpeg)`,
  }

  ngOnInit(): void {
    this.calcDiscount();
  }

  getDiscountPrice(): number {
    if (!this.price) {
      throw new Error('Error. Price must be above zero');
    }

    if (this.discountPercent) {
      return Math.round(this.price * ((100 - this.discountPercent) / 100));
    } else if (this.discountAmount) {

      if (this.price - this.discountAmount < 0) throw new Error('Error. Discount price cannot be lower zero');

      return Math.round(this.price - this.discountAmount);
    }

    return this.price;
  }

  getDiscountText(): string {
    if (this.discountPercent) {
      return `-${this.discountPercent}%`;
    } else if (this.discountAmount) {
      return `-${this.discountAmount}${this.currency}`;
    }

    return '';
  }

  calcDiscount(): void {
    console.log('discount calced!');

    this.hasDiscount = !!(this.discountPercent || this.discountAmount);
  }
}
