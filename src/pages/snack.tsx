import ContentLayout from '@/containers/contentLayout';
import Product from '@/components/product';

import snackProductData from '@/public/snack.json';

export default function Snack() {
  return (
    <ContentLayout>
      <Product data={snackProductData.productList} />
    </ContentLayout>
  );
}