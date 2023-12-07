import React from 'react'
import NumberItem from "../NumberItem/NumberItem"
const NumberList = () => {
    const data = [{role: '신랑', bankList: [{  ownerName: 'ㅇㅇ', bankName: '농협', accountNumber: '1234-13241-5135'}, {  ownerName: 'ㅁㅁ', bankName: '농협', accountNumber: '1234-13241-5135'}]}, {role: '신부', bankList: [{  ownerName: 'ㅇㅇ', bankName: '농협', accountNumber: '1234-13241-5135'}, {  ownerName: 'ㅁㅁ', bankName: '농협', accountNumber: '1234-13241-5135'}]}]
        return (
            <>
            {data.map((info, index) => {
                return (
                    <React.Fragment key={index}>
                        <NumberItem role={info.role} bankList={info.bankList}></NumberItem>
                    </React.Fragment>
                )
            })}
            </>

        )
}
export default NumberList