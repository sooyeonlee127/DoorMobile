import { RoundedButtonBox } from './RoundedButton.style';
import { SerializedStyles } from '@emotion/react';

interface RoundedButtonProps {
  btnText: string;
  btnStyle: SerializedStyles;
  clickEvent: React.MouseEventHandler<HTMLButtonElement>
}

const RoundedButton = ({ btnText, btnStyle, clickEvent }: RoundedButtonProps) => {
  return <RoundedButtonBox css={btnStyle} onClick={clickEvent}>{btnText}</RoundedButtonBox>;
};
export default RoundedButton;
