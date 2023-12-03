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
import { css } from '@emotion/react';

interface ContactItemProps {
  role: String;
  name: String;
  color: string;
  phoneNum: String;
}
const ContactItem = ({ role, name, color, phoneNum }: ContactItemProps) => {
  return (
    <ItemContainer>
      <ItemBox>
        <Role color={color}>{role}</Role>
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
