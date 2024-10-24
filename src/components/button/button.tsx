import clsx from "clsx";

interface IButtonProps {
  text: string;
  additionalClasses?: string;
}

function Button({ text, additionalClasses }: IButtonProps) {

  const classList = clsx(
    "font-rubik",
    "bg-button-background",
    "text-button",
    "rounded-button",
    "p-button",
    "uppercase",
    additionalClasses && additionalClasses,

  );
  return <button className={classList}>{text}</button>;
}
export { Button };
