import MainLayout from '@/containers/mainLayout';
import Image from 'next/image';

export default function Delivery() {
  return (
    <MainLayout>
      <div className="d-flex align-items-center justify-content-center py-5">
        <Image src="/images/lviv.png" alt="lviv map" width={700} height={500} />
      </div>
    </MainLayout>
  );
}
