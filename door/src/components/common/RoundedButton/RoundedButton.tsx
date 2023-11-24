import { RoundedButtonBox } from './RoundedButton.style';
import { SerializedStyles } from '@emotion/react';

interface RoundedButtonProps {
  btnText: string;
  btnStyle: SerializedStyles;
}

const RoundedButton = ({ btnText, btnStyle }: RoundedButtonProps) => {
  return <RoundedButtonBox css={btnStyle}>{btnText}</RoundedButtonBox>;
};
export default RoundedButton;
