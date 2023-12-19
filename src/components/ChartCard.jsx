import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

function BarsChart() {
  const { currentWeek, weeksData } = useSelector((state) => state.expenses);

  // Obtén los datos de la semana actual
  const currentWeekData = weeksData.find((week) => week.week === currentWeek)?.data || [];

  const daysOfWeek = currentWeekData.map((day) => day.day);
  const costs = currentWeekData.map((day) => day.cost);

  const chartData = {
    labels: daysOfWeek,
    datasets: [
      {
        label: 'Costes',
        data: costs,
        backgroundColor: 'rgb(236, 118, 92)',
        borderRadius: 4,
        borderSkipped: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: Math.max(...costs) + 100, // Ajusta el rango máximo según tus datos
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={chartData} options={chartOptions} />;
}

function ChartCard() {
  return (
    <div className="card w-full bg-base-100">
      <div className="card-body">
        <h1 className="card-title">Despeses última setmana</h1>
        <div>
          <BarsChart />
        </div>
        <div className="flex justify-between border-t-2 pt-5">
          <div>
            <p className="text-gray-400">Despeses avui</p>
            <h2 className="text-3xl font-bold">557,46€</h2>
          </div>
          <div className="text-left">
            <p>+2.4%</p>
            <p>respecte ahir</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChartCard;
