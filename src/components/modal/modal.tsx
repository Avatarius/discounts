import { createPortal } from "react-dom";
import { CardModal } from "../cardModal/cardModal";
import { IData } from "../../utils/types";
import { Button } from "../button/button";

interface IModalProps {
  data: IData;
}

const modalRoot = document.getElementById("modal");

function Modal({ data }: IModalProps) {
  return createPortal(
    <div className="fixed top-[50%] left-[50%] translate-x-modal-x translate-y-modal-y bg-modal-bg flex flex-col justify-center items-center font-['pt-root-ui'] p-modal">
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
          <CardModal data={data.week} />
          <CardModal data={data.month} />
          <CardModal data={data.threeMonths} />
        </div>
      </div>
      <Button
        text="Начать тренироваться"
        additionalClasses="p-button-modal normal-case mt-[40px]"
      />
    </div>,
    modalRoot!
  );
}

export { Modal };
