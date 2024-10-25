import { useRef, useState } from "react";
import { IData } from "../../utils/types";
import { Card } from "../card/card";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface IInfoProps {
  data: IData;
  timeInSeconds: number;
}

function Info({ data, timeInSeconds }: IInfoProps) {
  const [areRulesAccepeted, setAreRulesAccepeted] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const [cardActive, setCardActive] = useState([true, false, false, false]);

  useGSAP(
    () => {
      if (timeInSeconds === 0) {
        const timeline = gsap.timeline();
        timeline
          .to(".card .card__no-discount", {
            x: -150,
            duration: 0.3,
            ease: "power1",
          })
          .addLabel("start")
          .to(
            ".card .card__no-discount",
            { scaleY: 0, duration: 0.1, ease: "power1" },
            "<"
          )
          .to(
            ".card .card__no-discount",
            { autoAlpha: 0, duration: 0.05, delay: 0.1 },
            "<"
          )
          .to(".card .card__star", { autoAlpha: 0, duration: 0.2 }, "start");
      }
    },
    { scope: cardsContainerRef, dependencies: [timeInSeconds] }
  );
  const descriptionList = [
    "Чтобы просто начать 👍🏻",
    "Привести тело впорядок 💪🏻",
    "Изменить образ жизни 🔥",
    "Всегда быть в форме и поддерживать своё здоровье ⭐️",
  ];
  return (
    <div>
      <div
        className="grid grid-cols-3 content-start gap-x-[12px] grow"
        ref={cardsContainerRef}
      >
        <Card
          data={data.week}
          description="Чтобы просто начать 👍🏻"
          timeInSeconds={timeInSeconds}
          active={cardActive[0]}
          handleClick={() => setCardActive([true, false, false, false])}
        />
        <Card
          data={data.month}
          description="Привести тело впорядок 💪🏻"
          timeInSeconds={timeInSeconds}
          active={cardActive[1]}
          handleClick={() => setCardActive([false, true, false, false])}
        />
        <Card
          data={data.threeMonths}
          description="Изменить образ жизни 🔥"
          timeInSeconds={timeInSeconds}
          active={cardActive[2]}
          handleClick={() => setCardActive([false, false, true, false])}
        />
        <Card
          data={data.forever}
          description="Всегда быть в форме и поддерживать своё здоровье ⭐️"
          isHorizontal={true}
          timeInSeconds={timeInSeconds}
          active={cardActive[3]}
          handleClick={() => setCardActive([false, false, false, true])}
        />
      </div>
      <p className="font-['pt-root-ui'] text-text mt-[15px]">
        Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем
        за 1 месяц
      </p>
      <div className="flex items-center gap-[12px] mt-checkbox-container">
        <Checkbox
          areRulesAccepeted={areRulesAccepeted}
          handleChange={() => setAreRulesAccepeted((prev) => !prev)}
        />
        <p className="font-['pt-root-ui'] text-checkbox-text max-w-[400px] tracking-[0.07px]">
          Я соглашаюсь с{" "}
          <span className="text-checkbox-link cursor-pointer">
            Правилами сервиса
          </span>{" "}
          и условиями{" "}
          <span className="text-checkbox-link cursor-pointer">
            Публичной оферты
          </span>
          .
        </p>
      </div>
      <Button text="Купить" additionalClasses="mt-[50px]" />
      <p className="font-['pt-root-ui'] text-warning mt-warning">
        Нажимая «Купить», Пользователь соглашается на автоматическое списание
        денежных средств по истечению купленного периода. Дальнейшие списания по
        тарифам участвующим в акции осуществляются по полной стоимости согласно
        оферте.
      </p>
    </div>
  );
}

export { Info };
