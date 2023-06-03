import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IGalleryItem } from 'src/app/interfaces';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  showSectionSale = true;
  showSectionNew = true;

  galleryItems: IGalleryItem[] = [
    {
      id: 0,
      brand: 'Dorothy Perkins',
      itemName: 'Evening Dress',
      currency: '$',
      price: 15,
      discountPercent: 20,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: true,
    },
    {
      id: 1,
      brand: 'brand 1',
      itemName: 'item name 1',
      currency: '$',
      price: 150,
      discountPercent: 35,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: false,
    },
    {
      id: 2,
      brand: 'brand 2',
      itemName: 'item name 2',
      currency: '$',
      price: 1200,
      discountPercent: 0,
      discountAmount: 150,
      image: '/assets/images/hero.jpeg',
      isNew: false,
    },
    {
      id: 3,
      brand: 'brand 3',
      itemName: 'item name 3',
      currency: '$',
      price: 1500,
      discountPercent: 30,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: false,
    },
  ];

  galleryItemsNew: IGalleryItem[] = [
    {
      id: 0,
      brand: 'Dorothy Perkins',
      itemName: 'Evening Dress',
      currency: '$',
      price: 15,
      discountPercent: 0,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: true,
    },
    {
      id: 1,
      brand: 'brand 1',
      itemName: 'item name 1',
      currency: '$',
      price: 150,
      discountPercent: 0,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: true
    },
    {
      id: 2,
      brand: 'brand 2',
      itemName: 'item name 2',
      currency: '$',
      price: 1200,
      discountPercent: 0,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: true
    },
    {
      id: 3,
      brand: 'brand 3',
      itemName: 'item name 3',
      currency: '$',
      price: 1500,
      discountPercent: 0,
      discountAmount: 0,
      image: '/assets/images/hero.jpeg',
      isNew: true
    },
  ];
}
