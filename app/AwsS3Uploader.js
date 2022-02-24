/**
* @param {object} args source, remote, bucket, secret, key
*/


const path = require('path')
const awsUpload = require('./core/upload')
const GetParams = require('./common/get-params')

const AwsS3Uploader = args => {
	const obj = new GetParams(args)

	const paths = {
		source: `${path.resolve(__dirname, obj.source)}/`,
		remote: obj.remote
	}

	awsUpload(obj, paths)
		.then(() => {
			console.log('\nDone! All files transfered.')
			process.exit(0)
		})
		.catch((err) => {
			console.error(err.message)
			process.exit(1)
		})
}

module.exports = AwsS3Uploader
