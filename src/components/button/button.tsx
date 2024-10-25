import clsx from "clsx";

interface IButtonProps {
  text: string;
  additionalClasses?: string;
  onClick?: () => void;
}

function Button({ text, additionalClasses, onClick }: IButtonProps) {

  const classList = clsx(
    "font-rubik",
    "bg-button-background",
    "text-button",
    "rounded-button",
    "p-button",
    "uppercase",
    additionalClasses && additionalClasses,

  );

  function handleClick() {
    if (onClick) onClick();
  }


  return <button className={classList} onClick={handleClick}>{text}</button>;
}
export { Button };
