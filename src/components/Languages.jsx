import { useTranslation } from 'react-i18next';

function Languages() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex justify-end">
      <div className="grid gap-4 grid-cols-3">
        <div className="avatar justify-center">
          <div className="w-10 rounded-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1280px-Flag_of_the_United_Kingdom_%281-2%29.svg.png" onClick={() => changeLanguage('en')} />
          </div>
        </div>
        <div className="avatar justify-center">
          <div className="w-10 rounded-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Flag_of_Spain_%28Civil%29.svg/750px-Flag_of_Spain_%28Civil%29.svg.png?20110426012613" onClick={() => changeLanguage('es')} />
          </div>
        </div>
        <div className="avatar justify-center">
          <div className="w-10 rounded-full">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg" onClick={() => changeLanguage('cat')} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
