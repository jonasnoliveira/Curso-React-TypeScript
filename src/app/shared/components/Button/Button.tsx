interface ButtonProps {
  type?: "button" | "submit" | "reset";

  children: React.ReactNode;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
