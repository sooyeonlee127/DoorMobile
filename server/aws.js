const aws = require("aws-sdk");
const { AWS_SECRET_KEY, AWS_ACCESS_KEY } = process.env;
const s3 = new aws.S3({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY
})

module.exports = { s3 }