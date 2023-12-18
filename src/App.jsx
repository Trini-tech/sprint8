import BalanceCard from './components/BalanceCard';
import ChartCard from './components/Chartcard';
import Languages from './components/Languages';

function App() {
  return (
    <>
      <div className="grid gap-4 w-[36rem]">
        <Languages />
        <BalanceCard />
        <ChartCard />
      </div>
    </>
  );
}

export default App;
