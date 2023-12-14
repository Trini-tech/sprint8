import BalanceCard from './components/BalanceCard';
import ChartCard from './components/Chartcard';
import Languages from './components/Languages';
import { TodoReduxToolKitComponent } from './components/todo';

function App() {
  return (
    <>
      <div className="grid gap-4 w-[36rem]">
        <Languages />
        <BalanceCard />
        <ChartCard />
        <TodoReduxToolKitComponent />
      </div>
    </>
  );
}

export default App;
