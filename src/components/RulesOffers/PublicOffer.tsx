import "../../sass/components/_title.scss";
import "../../sass/components/_modal.scss";
import { MdArrowForwardIos } from "react-icons/md";

interface PublicOfferProps {
  onBackdropClick: () => void;
}

const PublicOffer: React.FC<PublicOfferProps> = ({ onBackdropClick }) => {
  return (
    <div className=" modal__container">
      <button
        type="button"
        onClick={onBackdropClick}
        className="modal__arrowforward"
      >
        <MdArrowForwardIos />
      </button>
      <h1 className="modal__title  title ">Договір публічної оферти</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <h2 className="modal__subtitle subtitle">Загальні положення</h2>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                "Фотостудія" - Focus Photolab, зареєстрована
                за адресою: Дніпро, вулиця Троїцька 21-г, офіс 504, представлена ______________ (ПІБ
                власника) в особі ______________ (посада), що діє на підставі
                ______________ (статуту, установчого документа).
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                "Клієнт" - будь-яка фізична або юридична особа, яка звертається
                до фотостудії з метою отримання фотографічних послуг.
              </p>
            </li>
          </ul>
        </li>

        <li className="modal__item">
          <h2 className="modal__subtitle subtitle">Предмет договору</h2>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                Фотостудія зобов'язується надати клієнту фотографічні послуги
                відповідно до тарифів, умов та обмежень, встановлених
                фотостудією.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                Клієнт зобов'язується оплатити вартість послуги відповідно до
                обраних ним тарифів та умов.
              </p>
            </li>
          </ul>
        </li>

        <li className="modal__item">
          <h2 className="modal__subtitle subtitle">Умови надання послуг</h2>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                Умови надання фотографічних послуг (включаючи терміни, вартість,
                перелік послуг тощо) визначаються тарифами, які публікуються на
                офіційному веб-сайті фотостудії або надаються клієнтові на його
                запит.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                Клієнт зобов'язаний ознайомитися з умовами надання послуг перед
                укладанням договору та зверненням до фотостудії.
              </p>
            </li>
          </ul>
        </li>

        <li className="modal__item">
          <h2 className="modal__subtitle subtitle">
            Вартість послуг та оплата
          </h2>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                Вартість фотографічних послуг визначається відповідно до
                тарифів, що діють на момент укладення договору.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                Оплата за надані послуги здійснюється клієнтом на умовах і в
                порядку, визначених фотостудією.
              </p>
            </li>
          </ul>
        </li>

        <li className="modal__item">
          <h2 className="modal__subtitle subtitle">Відповідальність сторін</h2>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                Фотостудія несе відповідальність перед клієнтом за якість
                наданих послуг та виконання умов договору.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                Клієнт несе відповідальність за достовірність інформації,
                наданої фотостудії для надання послуг.
              </p>
            </li>
          </ul>
        </li>

        <li className="modal__item">
          <span className="modal__subtitle subtitle">Заключні положення</span>
          <ul className="modal__sublist">
            <li className="modal__subitem">
              <p className="modal__text">
                Цей договір вважається укладеним з моменту прийняття клієнтом
                публічної оферти, шляхом запиту фотографічних послуг.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                У разі виникнення спорів або непорозумінь, сторони зобов'язані
                вирішувати їх шляхом переговорів.
              </p>
            </li>
            <li className="modal__item">
              <p className="modal__text">
                Цей договір складено у двох примірниках, який набуває однакової
                юридичної сили, по одному для кожної зі сторін.
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default PublicOffer;
