import Header from '@/components/header';
import Footer from '@/components/footer';
import { ContentLayoutProps } from './types';

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <>
      <div className="body body--secondary">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default ContentLayout;
