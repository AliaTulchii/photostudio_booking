import React from "react";
import "../../sass/components/_modal.scss";
import { MdArrowForwardIos } from "react-icons/md";

interface RulesProps {
  onBackdropClick: () => void;
}

const Rules: React.FC<RulesProps> = ({ onBackdropClick }) => {
  return (
    <div className="modal__container ">
      <button
        type="button"
        onClick={onBackdropClick}
        className="modal__arrowforward"
      >
        <MdArrowForwardIos />
      </button>
      <h1 className="modal__title title">Правила бронювання студії:</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Бронювання студії:</span>
            Відбувається лише через <span className="modal__text--remark">ДОДАТОК У ШАПЦІ ПРОФІЛЮ</span>.
            В приватних повідомленнях наш менеджер лише надасть вам інформацію про
            вільні місця, всі деталі та правила.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">При відміні бронювання:</span>
            Більше ніж за 48 годин вам повертається ПОВНА вартість, при
            відміні більше ніж за 24 години – <span className="modal__text--remark">ПОЛОВИНА</span> 
            вартості, при відміні менше ніж за 24 години – вартість <span className="modal__text--remark">НЕ ПОВЕРТАЄТЬСЯ</span>,
            нажаль.
            <br />
            З наших причин вам повертається повна вартість та пропонується додатковий безкоштовний
            час на зйомку в інший день.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Мінімальний час продовження:</span>
            Продовження бронювання студії під час зйомки - 30 хвилин (300 грн).
            За наявністю вільного часу у студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">У разі запізнення:</span>
            Ваш час зйомки не продовжується, якщо після вас є заброньований
            час. Якщо час вільний, ви можете продовжити зйомку після
            зазначеного часу закінчення.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Одночасно у студії:</span>
            Комфортно може знаходитися до 5 людей + фотограф.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Домашні улюбленці:</span>
            З тваринами у студію <span className="modal__text--remark">МОЖНА</span>,
            тільки заздалегідь попередьте про це студію, щоб ми підготували мисочку
            з водою та смаколики.
          </p>
        </li>
      </ul>

      <h1 className="modal__title title">Правила користування студією:</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Після бронювання:</span>
            наша студія стає вашою на той час, що ви забронювали, тому
            просимо відноситися до речей, як до власних.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Смаколики для вас:</span>
            Чай, кава, цукерки, печиво, вода та все інше - <span className="modal__text--remark">БЕЗКОШТОВНО</span>
            і ви можете користуватися всім цим весь час знаходження у студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Заходити до студії:</span>
            Можна тільки в одноразових капцях та/або бахілах, які є у студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Ви можете:</span>
            Пересувати усі меблі, але після завершення часу все
            повинно бути у тому стані, в якому було до початку
            зйомки.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Одночасно у студії:</span>
            Комфортно може знаходитися до 5 людей + фотограф.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">При пошкодженні:</span>
            Меблів або обладнання <span className="modal__text--remark">ВИ</span> як арендатор сплачуєте повну
            вартість покупки або и хімчистки.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">При користуванні вініловим фотофоном:</span>
            У моделей має бути чисте взуття. Якщо матеріал підошви залишає слід,
            підошву необхідно заклеїти малярним скотчем.
          </p>
        </li>
      </ul>


      <h1 className="modal__title title">Що ЗАБОРОНЕНО робити у студії:</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Палити:</span>
            У студії цигарки та/або електронки.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Приносити із собою:</span>
            Каву, воду та їжу. Все це можна використовувати у
            гостьовій зоні, яка огорожена ширмою.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Заходити до студії:</span>
            Можна тільки в одноразових капцях та/або бахілах, які є у студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Використання декоративної косметики:</span>
            Якщо модель використовує крема, фарбу, тональний крем на все тіло,
            бронзер та/або автозасмагу – заборонено сідати на меблі тією
            частиною тіла, яка торкається меблів. Інакше доведеться
            сплачувати вартість хімчистки.
          </p>
        </li>
      </ul>

      <h1 className="modal__title title">Правила користування реквізитом та технікою:</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Фони:</span>
            Змінювати може лише студія перед вашою зйомкою,
            самостійно це робити заборонено - ви можете завдати собі шкоди.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Освітлення:</span>
            Може використовувати лише фотограф, який знає як ним
            користуватися. Якщо необхідно, адміністратори допоможуть
            увімкнути та/або налаштувати освітлення.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Заходити до студії:</span>
            Можна тільки в одноразових капцях та/або бахілах, які є у студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Використання декоративної косметики:</span>
            Якщо модель використовує крема, фарбу, тональний крем на все тіло,
            бронзер та/або автозасмагу – заборонено сідати на меблі тією
            частиною тіла, яка торкається меблів. Інакше доведеться
            сплачувати вартість хімчистки.
          </p>
        </li>
      </ul>

      <p className="modal__text">
        Дотримуючись цих правил, ви забезпечите собі приємний та ефективний час
        у фотостудії.
      </p>
    </div>
  );
};

export default Rules;
