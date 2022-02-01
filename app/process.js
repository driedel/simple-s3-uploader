const path = require('path')
const awsUpload = require('./core/upload')
const GetParams = require('./common/get-params')


class AwsS3Uploader {
	constructor() {
    this.obj = new GetParams(process.argv)

		this.paths = {
			source: `${path.resolve(__dirname, this.obj.source)}/`,
			remote: this.obj.remote
		}

		awsUpload(this.obj, this.paths)
			.then(() => {
				console.log('\nDone! All files transfered.')
				process.exit(0)
			})
			.catch((err) => {
				console.error(err.message)
				process.exit(1)
			})

  }
}

module.exports = new AwsS3Uploader()
