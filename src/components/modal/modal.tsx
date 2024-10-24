import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

function Modal() {
  return createPortal(
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-modal-bg flex flex-col items-center font-['pt-root-ui'] p-modal">
      <h3 className="uppercase font-rubik text-modal-title bg-modal-bg mb-[30px]">
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
        <p className="font-[500] text-modal-text text-[#12191d] leading-[1.3]">
          Посмотри, что мы для тебя приготовили 🔥
        </p>
        <div className="flex gap-[20px]">

        </div>
      </div>
    </div>,
    modalRoot!
  );
}

export { Modal };
