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
  const checkMobile = () => {
    var UA = navigator.userAgent.toLowerCase(); //userAgent 체크
    if (UA.indexOf('android') > -1) {
      return 'android';
    } else if (
      UA.indexOf('iphone') > -1 ||
      UA.indexOf('ipad') > -1 ||
      UA.indexOf('ipod') > -1
    ) {
      return 'ios';
    } else {
      return 'other';
    }
  };
  const smsSend = () => {
    window.location.href =
      'sms:' +
      phoneNum +
      (checkMobile() == 'ios' ? '&' : '?') +
      'body=' +
      encodeURIComponent('자동분기 보내기\nSMS SEND TEST');
  };

  const clickMessage = () => {
    smsSend();
  };

  const clickCall = () => {
    window.location.href = 'tel:' + phoneNum;
  };
  return (
    <ItemContainer>
      <ItemBox>
        <Role color={color}>{typeToString(role)}</Role>
        <Name>{name}</Name>
        <IconGroup>
          <Icon>
            <FaPhone size={'18px'} color={color} onClick={clickCall} />
          </Icon>
          <Icon>
            <IoIosMail size={'25px'} color={color} onClick={clickMessage} />
          </Icon>
        </IconGroup>
      </ItemBox>
    </ItemContainer>
  );
};
export default ContactItem;
