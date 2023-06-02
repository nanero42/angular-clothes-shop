import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { EIcon } from 'src/app/enums';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryItemComponent implements OnInit {
  @Input() brand = '';
  @Input() itemName = '';
  @Input() currency = '$';
  @Input() price = 15;
  @Input() discountPercent = 20;
  @Input() discountAmount = 0;
  @Input() image = '';
  @Input() isNew = true;

  hasDiscount = false;
  discountPrice = 0;
  discountLabel = '';

  style: any = {};

  eIcon = EIcon;

  ngOnInit(): void {
    this.calcDiscount();
    this.calcDiscountPrice();
    this.getDiscountText();
    this.calcStyle();
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

  calcStyle(): void {
    console.log(this.image);

    this.style = {
      'background-image': `url(${this.image})`,
    };
  }
}
