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
      <h1 className="modal__title title">Правила студії</h1>
      <ul className="modal__list">
        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Запис на зйомку:</span>
            Перед візитом обов'язково зарезервуйте час на зйомку. Це допоможе
            уникнути непорозумінь та забезпечить вам комфортний досвід.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Пунктуальність:</span>
            Будьте на місці в зазначений час. Затримки можуть вплинути на ваш
            час зйомки та час інших клієнтів.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Одяг і макіяж:</span>
            Підготуйтеся до зйомки, обираючи одяг, що вам подобається та
            підходить для конкретної сесії. Якщо вам потрібен макіяж, вкажіть це
            заздалегідь.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">
              Поведінка та приватність:
            </span>
            Будьте поважні до фотографа та інших клієнтів. Зберігайте
            приватність інших осіб, якщо вони також перебувають в студії.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Комунікація:</span>
            Якщо у вас є специфічні побажання або ідеї щодо зйомки, будь ласка,
            повідомте про це заздалегідь. Чим більше інформації ми маємо, тим
            краще ми зможемо задовольнити ваші потреби.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Особисті речі:</span>
            Будь ласка, дотримуйтесь правил стосовно особистих речей. Не
            залишайте цінні речі без нагляду.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">Послуги та оплата:</span>
            Уточніть умови та вартість послуг заздалегідь. Оплата може
            здійснюватися різними способами, тому уточніть це перед зйомкою.
          </p>
        </li>

        <li className="modal__item">
          <p className="modal__text">
            <span className="modal__text--accent">
              Відгуки та рекомендації:
            </span>
            Після завершення зйомки поділіться своїми враженнями та залиште
            відгук про свій досвід. Ваші рекомендації можуть бути корисними для
            інших клієнтів.
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
