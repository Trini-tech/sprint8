import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function BalanceCard() {
  return (
    <div className="card w-full bg-accent text-white">
      <div className="card-body flex flex-row justify-between">
        <div>
          <p>Balanç setmanal</p>
          <h1 className="text-2xl font-semibold ">3323€</h1>
        </div>
        <div className="grid grid-cols-2 gap-3 place-items-center justify-end">
          <FontAwesomeIcon icon={faArrowLeft} className="p-4" />
          <FontAwesomeIcon icon={faArrowRight} className="p-4" />
        </div>
      </div>
    </div>
  );
}
export default BalanceCard;
