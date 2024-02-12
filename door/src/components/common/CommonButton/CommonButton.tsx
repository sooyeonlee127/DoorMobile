import { Button, Container } from './CommonButton.style';

interface ButtonProps {
  btnText: string;
  clickEvent: React.MouseEventHandler<HTMLDivElement>;
}
const CommonButton = ({ btnText, clickEvent }: ButtonProps) => {
  return (
    <Container>
      <Button onClick={clickEvent}>{btnText}</Button>
    </Container>
  );
};

export default CommonButton;
