import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  galleryItems: IGalleryItem[] = [
    {
      id: 0,
      brand: 'Dorothy Perkins',
      itemName: 'Evening Dress',
      price: 15,
      discountPercent: 20,
      image: '/assets/images/hero.jpeg',
    },
    {
      id: 1,
      brand: 'brand 1',
      itemName: 'item name 1',
      price: 150,
      discountPercent: 35,
      image: '/assets/images/hero.jpeg',
    },
    {
      id: 2,
      brand: 'brand 2',
      itemName: 'item name 2',
      price: 1200,
      discountAmount: 150,
      image: '/assets/images/hero.jpeg',
    },
    {
      id: 3,
      brand: 'brand 3',
      itemName: 'item name 3',
      price: 1500,
      discountPercent: 30,
      image: '/assets/images/hero.jpeg',
    },
  ];
}
