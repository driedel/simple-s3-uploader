/**
* @param {object} args source, remote, bucket, secret, key
*/

const path = require('path')
const awsUpload = require('./core/upload')
const GetParams = require('./common/get-params')

const AwsS3Uploader = async(args) => {
	const obj = new GetParams(args)

	const paths = {
		source: `${path.resolve(__dirname, obj.source)}/`,
		remote: obj.remote === '/' ? '': obj.remote
	}

	return new Promise((resolve, reject) => {
		awsUpload(obj, paths)
			.then(data => {
				if(data.success) {
					return resolve(data.files)
				}
				reject(data)
			})
	})
}

module.exports = AwsS3Uploader
