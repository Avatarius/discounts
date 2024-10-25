import { createPortal } from "react-dom";
import { CardModal } from "../cardModal/cardModal";
import { IData } from "../../utils/types";
import { Button } from "../button/button";
import clsx from "clsx";
import { useState } from "react";

interface IModalProps {
  data: IData;
  handleClose: () => void;
  handleButtonClick: () => void;
  isBiggerDiscounts: boolean;
}

const modalRoot = document.getElementById("modal");

function Modal(props: IModalProps) {
  const { data, handleClose, handleButtonClick, isBiggerDiscounts } = props;
  const modalClassList = clsx(
    "fixed",
    "top-[50%]",
    "left-[50%]",
    "translate-x-modal-x",
    "translate-y-modal-y",
    "bg-modal-bg",
    "flex",
    "flex-col",
    "justify-center",
    "items-center",
    "font-['pt-root-ui']",
    "p-modal",
    "before:content-['горящее_предложение']",
    "before:absolute",
    "before:text-modal-before",
    "before:bg-accent",
    "before:p-modal-before",
    "before:inset-modal-before",
    "before:top-[0]",
    "before:left-[43px]",
    "backdrop:bg-red"
  );
  const [cardActive, setCardActive] = useState([true, false, false]);
  return createPortal(
    <div className={modalClassList}>
      <h3 className="uppercase font-rubik text-modal-title bg-modal-bg mb-[28px]">
        Не упусти свой <span className="text-accent">последний шанс</span>
      </h3>
      <p className=" text-modal-text leading-[1.3] mb-[8px]">
        Мы знаем, как трудно начать..{" "}
        <span className="font-rubik text-[#2d3242]">Поэтому!</span>
      </p>
      <p className="text-modal-text text-[#2d3242] font-[700] p-modal-discount border-modal-discount border-accent rounded-modal-discount mb-[40px]">
        Дарим скидку для <span className="text-accent">лёгкого старта</span> 🏃‍♂️
      </p>
      <div>
        <p className="font-[500] text-modal-text text-[#12191d] leading-[1.3] mb-[20px]">
          Посмотри, что мы для тебя приготовили 🔥
        </p>
        <div className="flex gap-[20px] justify-between">
          <CardModal
            name={data.week.name}
            defaultPrice={data.week.defaultPrice}
            discountedPrice={data.week.discountedPrice}
            active={cardActive[0]}
            handleClick={() => setCardActive([true, false, false])}
            isBiggerDiscounts={isBiggerDiscounts}
          />
          <CardModal
            name={data.month.name}
            defaultPrice={data.month.defaultPrice}
            discountedPrice={data.month.discountedPrice}
            active={cardActive[1]}
            handleClick={() => setCardActive([false, true, false])}
            isBiggerDiscounts={isBiggerDiscounts}
          />
          <CardModal
            name={data.threeMonths.name}
            defaultPrice={data.threeMonths.defaultPrice}
            discountedPrice={data.threeMonths.discountedPrice}
            active={cardActive[2]}
            handleClick={() => setCardActive([false, false, true])}
            isBiggerDiscounts={isBiggerDiscounts}
          />
        </div>
      </div>
      <Button
        text="Начать тренироваться"
        additionalClasses="p-button-modal normal-case mt-[40px]"
        onClick={() => {
          handleButtonClick();
          handleClose();
        }}
      />
      <button
        className="absolute bg-[url('../images/close.png')] w-[24px] h-[24px] right-[20px] top-[23px] cursor-pointer"
        onClick={handleClose}
      ></button>
    </div>,
    modalRoot!
  );
}

export { Modal };
