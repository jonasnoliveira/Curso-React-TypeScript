interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = (props) => {
  return <h1>{props.text}</h1>;
};
