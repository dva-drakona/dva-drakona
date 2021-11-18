import Header from '@/components/header';
import Footer from '@/components/footer';
import { MainLayoutProps } from './types';

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="body body--primary">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
