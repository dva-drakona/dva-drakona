import ContentLayout from '@/containers/contentLayout';
import Menu from '@/components/menu';
import Product from '@/components/product';

import wineMenuData from '@/data/wineMenu.json';
import wineProductData from '@/data/wineProduct.json';

export default function Wine() {
  return (
    <ContentLayout>
      <Menu
        title={wineMenuData.title}
        data={wineMenuData.menuCard}
        cardVariant="secondary"
        productData={wineProductData}
      />
    </ContentLayout>
  );
}
