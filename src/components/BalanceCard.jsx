import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { weeklyBalance, changeCurrentWeek } from '../redux/slices/expensesSlice';

function BalanceCard() {
  const dispatch = useDispatch();
  const currentWeek = useSelector((state) => state.expenses.currentWeek);

  useEffect(() => {
    // Dispatch de la acción para calcular la suma de costos para la semana actual
    dispatch(weeklyBalance({ weekKey: currentWeek }));
  }, [dispatch, currentWeek]); // Asegúrate de incluir 'dispatch' y 'currentWeek' como dependencias

  const weekSum = useSelector((state) => state.expenses[currentWeek + 'Sum']);

  // Función para cambiar la semana actual al hacer clic en la flecha izquierda
  const handleArrowLeftClick = () => {
    // Calcular la semana anterior (puedes personalizar la lógica según tus necesidades)
    const previousWeek = `week${parseInt(currentWeek.slice(-1)) - 1}`;
    // Dispatch de la acción para cambiar la semana actual
    dispatch(changeCurrentWeek({ currentWeek: previousWeek }));
  };

  // Función para cambiar la semana actual al hacer clic en la flecha derecha
  const handleArrowRightClick = () => {
    // Calcular la semana siguiente (puedes personalizar la lógica según tus necesidades)
    const nextWeek = `week${parseInt(currentWeek.slice(-1)) + 1}`;
    // Dispatch de la acción para cambiar la semana actual
    dispatch(changeCurrentWeek({ currentWeek: nextWeek }));
  };

  return (
    <div className="card w-full bg-accent text-white">
      <div className="card-body flex flex-row justify-between">
        <div>
          <p>Balanç setmanal</p>
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
