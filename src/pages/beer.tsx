import ContentLayout from '@/containers/contentLayout';
import Menu from '@/components/menu';

import beerMenuData from '@/data/beerMenu.json';
import beerProductData from '@/public/beer.json';

export default function Beer() {
  return (
    <ContentLayout>
      <Menu
        title={beerMenuData.title}
        data={beerMenuData.menuCard}
        cardVariant="secondary"
        productData={beerProductData}
      />
    </ContentLayout>
  );
}
