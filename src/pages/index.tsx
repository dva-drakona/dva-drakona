import MainLayout from '@/containers/mainLayout';
import Menu from '@/components/menu';
import About from '@/components/about';
import Delivery from '@/components/delivery';
import Banner from '@/components/banner';

import aboutData from '@/data/about.json';
import menuData from '@/data/menu.json';
import deliveryData from '@/data/delivery.json';
import bannerData from '@/data/banner.json';

export default function Home() {
  return (
    <>
      <MainLayout>
        <Banner data={bannerData} />
        <Menu
          title={menuData.title}
          data={menuData.menuCard}
          cardVariant="primary"
        />
        <About title={aboutData.title} data={aboutData.aboutCard} />
        <Delivery title={deliveryData.title} data={deliveryData.deliveryCard} />
      </MainLayout>
    </>
  );
}
