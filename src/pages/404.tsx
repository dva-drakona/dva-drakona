import MainLayout from '@/containers/mainLayout';
import HelpPage from '@/components/helpPage';

export default function Error() {
  return (
    <MainLayout>
      <HelpPage title="Сторінку не знайдено" />
    </MainLayout>
  );
}
