const Preconnect = async(AWS, obj) => {
  AWS.config.update({region: obj.region || 'us-east-1'})
    
  const s3 = new AWS.S3({
    signatureVersion: 'v4',
    accessKeyId: obj.key,
    secretAccessKey: obj.secret,
  })

  return new Promise((resolve, reject) => {
    s3.listObjects({ Bucket: obj.bucket }, (err, data)=> {
      if(err) {
        console.log(`\n-> AWS response: ${err.code}\n`)
        return reject(new Error(err))
      } else {
        resolve({ result: true })
      }
    })
  })
}

module.exports = Preconnect