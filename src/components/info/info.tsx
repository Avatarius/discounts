import { IData } from "../../utils/types";
import { Card } from "../card/card";

interface IInfoProps {
  data: IData;
}

function Info({ data }: IInfoProps) {
  return (
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
  );
}

export { Info };
