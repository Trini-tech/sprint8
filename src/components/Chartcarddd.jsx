import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const { currentWeek, weeksData, today: currentMondayCost } = useSelector((state) => state.expenses);

  // Obtén el nombre de la semana anterior
  const previousWeek = `week${parseInt(currentWeek.substring(4), 10) - 1}`;

  const lastMondayCost = weeksData.find((week) => week.week === previousWeek)?.data.find((day) => day.day.toLowerCase() === 'dilluns')?.cost || null;

  const percentageChange = lastMondayCost ? ((currentMondayCost - lastMondayCost) / lastMondayCost) * 100 : null;

  return (
    <div className="card w-full bg-base-100">
      <div className="card-body">
        <h1 className="card-title">{t('balanceCard.lastExpenses')}</h1>
        <div>
          <BarsChart />
        </div>
        <div className="flex justify-between border-t-2 pt-5">
          <div>
            <p className="text-gray-400">{t('balanceCard.mondayExpenses')}</p>
            <h2 className="text-3xl font-bold">{currentMondayCost} €</h2>
          </div>
          <div className="text-left">
            {percentageChange !== null ? (
              <>
                <p>
                  {percentageChange > 0 ? '+' : ''}
                  {percentageChange.toFixed(2)}%
                </p>
                <p>{t('balanceCard.lastMonday')}</p>
              </>
            ) : (
              <p>{t('balanceCard.noData')}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChartCard;
