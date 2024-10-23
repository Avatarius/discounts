import check from "../../images/check.svg";

interface ICheckboxProps {
  areRulesAccepeted: boolean;
  handleChange: () => void;
}

function Checkbox({ areRulesAccepeted, handleChange }: ICheckboxProps) {
  return (
    <label>
      <input type="checkbox" name="checkbox" className="sr-only" value={''} checked={areRulesAccepeted} onChange={handleChange}/>
      <span className="block w-[24px] h-[24px] bg-checkbox rounded-checkbox flex justify-center items-center">
        {areRulesAccepeted && (
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 6.75789L5.56923 10.8L14.2 1.2"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </label>
  );
}

export { Checkbox };
