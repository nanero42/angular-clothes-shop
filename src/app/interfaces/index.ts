export interface IGalleryItem {
  id: number;
  brand: string;
  itemName: string;
  currency?: string;
  price: number;
  discountPercent?: number;
  discountAmount?: number;
  image: string;
}
