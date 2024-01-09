import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weeklyBalance, changeCurrentWeek } from '../redux/slices/expensesSlice';
import { useTranslation } from 'react-i18next';

function BalanceCard() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const currentWeek = useSelector((state) => state.expenses.currentWeek);

  useEffect(() => {
    dispatch(weeklyBalance({ weekKey: currentWeek }));
  }, [dispatch, currentWeek]); // Asegúrate de incluir 'dispatch' y 'currentWeek' como dependencias

  const weekSum = useSelector((state) => state.expenses[currentWeek + 'Sum']);

  // Función para cambiar la semana actual al hacer clic en la flecha izquierda
  const handleArrowLeftClick = () => {
    const previousWeek = `week${parseInt(currentWeek.slice(-1)) - 1}`;
    dispatch(changeCurrentWeek({ currentWeek: previousWeek }));
  };

  // Función para cambiar la semana actual al hacer clic en la flecha derecha
  const handleArrowRightClick = () => {
    const nextWeek = `week${parseInt(currentWeek.slice(-1)) + 1}`;
    dispatch(changeCurrentWeek({ currentWeek: nextWeek }));
  };

  return (
    <div className="card w-full bg-accent text-white">
      <div className="card-body flex flex-row justify-between">
        <div>
          <p>{t('weeklyBalance')}</p>

          <h1 className="text-2xl font-semibold ">{weekSum}€</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 place-items-center justify-end">
          <FontAwesomeIcon icon={faArrowLeft} className="p-4" onClick={handleArrowLeftClick} />
          <FontAwesomeIcon icon={faArrowRight} className="p-4" onClick={handleArrowRightClick} />
        </div>
      </div>
    </div>
  );
}
export default BalanceCard;
