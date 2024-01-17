const aws = require("aws-sdk");
const { AWS_SECRET_KEY, AWS_ACCESS_KEY } = process.env;

const s3 = new aws.S3({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})


const getSignedUrl = ({key}) => {
    return new Promise((resolve, reject)=> { // 비동기로 호출한 아래 코드가 완료되면 resolve호출, 실패하면 reject 
        s3.createPresignedPost({
            Bucket: '',
            Fields: {
                key
            },
            Expires: 300,// 만료 초단위 디폴트는 1시간
            Conditions: [
                ['content-length-range', 0, 50 * 1000 * 1000],
                ['starts-with', '$Content-Type', 'image/']

            ]
        }, (err, data) => {
            if (err) throw reject(err)
            resolve(data)
        })
    })
   
}
module.exports = { s3, getSignedUrl }