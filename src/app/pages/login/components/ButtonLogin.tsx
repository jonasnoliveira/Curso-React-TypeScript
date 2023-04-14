interface ButtonLoginProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  
  onClick: () => void;
}

export const ButtonLogin: React.FC<ButtonLoginProps> = (props) => {
  return (
    <button type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  );
};
