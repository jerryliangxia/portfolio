import { Tooltip } from "@radix-ui/themes";

export const ToggleOff = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16"
      width="16"
    >
      <path
        d="M8 7C5.23858 7 3 9.23858 3 12C3 14.7614 5.23858 17 8 17H16C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7H8ZM8 5H16C19.866 5 23 8.13401 23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5ZM8 15C6.34315 15 5 13.6569 5 12C5 10.3431 6.34315 9 8 9C9.65685 9 11 10.3431 11 12C11 13.6569 9.65685 15 8 15Z"
        fill="rgba(177,177,177,1)"
      ></path>
    </svg>
  );
};

export const ToggleOn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16"
      width="16"
    >
      <path
        d="M8 5H16C19.866 5 23 8.13401 23 12C23 15.866 19.866 19 16 19H8C4.13401 19 1 15.866 1 12C1 8.13401 4.13401 5 8 5ZM16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z"
        fill="rgba(177,177,177,1)"
      ></path>
    </svg>
  );
};

export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16"
      width="16"
      style={{
        marginLeft: "3px",
        transition: "transform 0.3s ease-in-out", // Add transition here
        position: "relative", // Add position here
        top: "2px", // Adjust vertical position here
      }}
      className="arrow-icon"
    >
      <path
        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
        fill="rgba(177,177,177,1)"
      ></path>
    </svg>
  );
};

export const DropdownArrowDown = ({ color = "rgba(177,177,177,1)" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16"
      width="16"
    >
      <path
        d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"
        fill={color}
      ></path>
    </svg>
  );
};

export const DropdownArrowUp = ({ color = "rgba(177,177,177,1)" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="16"
      width="16"
    >
      <path
        d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"
        fill={color}
      ></path>
    </svg>
  );
};

export const Look = () => {
  return (
    <Tooltip content="Able to rotate" radius="small">
      <svg
        height="16"
        width="16"
        style={{ paddingLeft: "6px" }}
        viewBox="0 0 1145 624"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M163.5 186L129.023 210.486C36.631 276.104 24.7856 408.772 104.091 489.72V489.72C115.973 501.849 129.475 512.277 144.212 520.709L155.861 527.374C197.271 551.067 244.033 563.825 291.738 564.445L875.845 572.03C924.246 572.659 971.49 557.227 1010.19 528.148L1012.12 526.692C1028.61 514.303 1043.12 499.475 1055.14 482.718V482.718C1095.27 426.773 1104.33 354.304 1079.19 290.204L1077.58 286.097C1045.86 205.21 967.846 152 880.962 152H695M695 152H524.5V152C496.55 152 488.74 113.652 514.463 102.72L625.209 55.658C658.297 41.5972 695 65.8797 695 101.831V152Z"
          stroke="white"
          stroke-width="102"
        />
      </svg>
    </Tooltip>
  );
};
