const AWS = require('aws-sdk')
const GetParams = require('./common/get-params')

class TestCredentials {
  constructor() {
    this.obj = new GetParams(process.argv)

    console.log(this.obj)

    this.init()
  }

  init() {
    AWS.config.update({region: this.obj.region || 'us-east-1'})
    
    this.s3 = new AWS.S3({
      signatureVersion: 'v4',
      accessKeyId: this.obj.key,
      secretAccessKey: this.obj.secret,
    })

    this.check()
  }

  check() {
    this.s3.listObjects({ Bucket: this.obj.bucket }, (err, data)=> {
      if(err) {
        console.log(`\nList buckets files test:\n-> AWS response: ${err.code}\nCheck your credentials and region.\n`)
      } else {
        let message = `\nList buckets files test:\nAWS response:`
        message = `${message}\n-> Name: ${data.Name}`
        message = `${message}\n-> Bucket contents count: ${data.Contents.length}\n`
        console.log(message)
      }
    })
  }
}


module.exports = new TestCredentials()
