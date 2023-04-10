import { Icon } from "@iconify/react";

function Button(props) {
  const icon = `mdi:${props.icon}`;
  return (
    <button className="button">
      <Icon icon={icon} className="button__icon" />
      {props.text}
    </button>
  );
}

export default Button;
