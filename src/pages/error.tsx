import MainLayout from '@/containers/mainLayout';
import HelpPage from '@/components/helpPage';

export default function Error() {
  return (
    <MainLayout>
      <HelpPage title="Не вдалось здійснити оплату. Спробуйте пізніше!" />
    </MainLayout>
  );
}
