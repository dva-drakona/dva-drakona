export interface ProductCardProps {
  title: string;
  img: string;
  size: number;
  price?: number;
  variant: string;
  onBtnCloseClick?: any;
  onMinusClick?: any;
  onPlusClick?: any;
  count?: number;
  description?: string;
}
