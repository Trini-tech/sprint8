import { useTranslation } from 'react-i18next';

function Languages() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end">
      <div className="grid gap-4 grid-cols-3">
        <button onClick={() => changeLanguage('en')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" />
            </div>
          </div>
        </button>
        <button onClick={() => changeLanguage('es')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/750px-Flag_of_Spain_%28Civil%29.svg.png?20110426012613" />
            </div>
          </div>
        </button>
        <button onClick={() => changeLanguage('cat')}>
          <div className="avatar justify-center">
            <div className="w-10 rounded-full">
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Languages;
