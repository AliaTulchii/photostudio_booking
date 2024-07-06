import { useState } from "react";
import Button from "../Button/Button";
import RightModal from "../Modals/RightModal/RightModal";

const Booking = () => {
  const [showBooked, setShowBooked] = useState(false);
  const [selectedHours, setSelectedHours] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const openModalBooked = (hours: number, price: number) => {
    setShowBooked(true);
    setSelectedHours(`${hours}`);
    setSelectedPrice(`${price}`);
  };

  const closeModal = () => {
    setShowBooked(false);
  };
  return (
    <div>
      <ul className="start__list">
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"1 година  - 1 грн"}
            onClick={() => openModalBooked(1, 1)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"2 години  - 2 грн"}
            onClick={() => openModalBooked(2, 2)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"3 години  - 3 грн"}
            onClick={() => openModalBooked(3, 3)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"4 години  - 4 грн"}
            onClick={() => openModalBooked(4, 4)}
          />
        </li>
        <li className="start__item">
          <Button
            type="button"
            className={"btn btn__booking"}
            text={"5 годин  - 5 грн"}
            onClick={() => openModalBooked(5, 5)}
          />
        </li>
      </ul>
      <RightModal
        showBooked={showBooked}
        closeModal={closeModal}
        selectedHours={parseInt(selectedHours)}
        selectedPrice={parseInt(selectedPrice)}
      />
    </div>
  );
};

export default Booking;
