import { useState } from "react";
import { IData } from "../../utils/types";
import { Card } from "../card/card";
import { Checkbox } from "../checkbox/checkbox";
import { Button } from "../button/button";

interface IInfoProps {
  data: IData;
}

function Info({ data }: IInfoProps) {
  const [areRulesAccepeted, setAreRulesAccepeted] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-3 content-start gap-x-[12px] grow">
        <Card data={data.week} description="Чтобы просто начать 👍🏻" />
        <Card data={data.month} description="Привести тело впорядок 💪🏻" />
        <Card data={data.threeMonths} description="Изменить образ жизни 🔥" />
        <Card
          data={data.forever}
          description="Всегда быть в форме и поддерживать своё здоровье ⭐️"
          isHorizontal={true}
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
      <Button />
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
