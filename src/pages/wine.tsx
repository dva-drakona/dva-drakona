import ContentLayout from '@/containers/contentLayout';
import Menu from '@/components/menu';

import wineMenuData from '@/data/wineMenu.json';
import wineProductData from '@/public/wine.json';

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
