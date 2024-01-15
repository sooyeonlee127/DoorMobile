import {
  ItemContainer,
  ItemBox,
  Role,
  Name,
  IconGroup,
  Icon,
} from './ContactItem.style';
import { FaPhone } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';

interface ContactItemProps {
  role: string;
  name: String;
  color: string;
  phoneNum: String;
}
const ContactItem = ({ role, name, color, phoneNum }: ContactItemProps) => {
  const typeToString = (typeCode: string) => {
    switch (typeCode) {
      case '03':
        return '신랑 부';
      case '04':
        return '신랑 모';
      case '05':
        return '신부 부';
      case '06':
        return '신부 모';
    }
    return;
  };

  return (
    <ItemContainer>
      <ItemBox>
        <Role color={color}>{typeToString(role)}</Role>
        <Name>{name}</Name>
        <IconGroup>
          <Icon>
            <FaPhone size={'15px'} color={color} />
          </Icon>
          <Icon>
            <IoIosMail size={'23px'} color={color} />
          </Icon>
        </IconGroup>
      </ItemBox>
    </ItemContainer>
  );
};
export default ContactItem;
