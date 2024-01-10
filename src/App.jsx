import { Suspense } from 'react';
import ChartCard from './components/Chartcarddd';
import BalanceCard from './components/BalanceCard';
import Languages from './components/Languages';

const locales = {
  en: { title: 'English' },
  es: { title: 'Español' },
  cat: { title: 'Català' },
};

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <div>loading...</div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="grid gap-4 w-[36rem]">
        <Languages />
        <BalanceCard />
        <ChartCard />
      </div>
    </Suspense>
  );
}

export default App;
