const fs = require('fs')
const async = require('async')
const AWS = require('aws-sdk')
const readdir = require('recursive-readdir')
const mimeType = require('./mime-type')
const Preconnect = require('../common/preconnect')

function loadDir(dirPath) {
	if(!fs.existsSync(dirPath)) {
		console.log(`\n\nProcessing error.\nCheck your local directory path.\n`)
		process.exit(1)
	}
	
	return  readdir(dirPath)
}

const awsUpload = async(obj, paths) => {
  const s3 = new AWS.S3({
		signatureVersion: 'v4',
		accessKeyId: obj.key,
		secretAccessKey: obj.secret,
	})

	try {
		const files = await loadDir(paths.source)
		const uploaded = []

		await Preconnect(AWS, obj)

		if(!files.length) {
			throw new Error(`\nYour source directory is empty.\n`)
		}

		return new Promise((resolve, reject) => {
			async.eachOfLimit(files, 10, async.asyncify(async (file) => {
				let item
				
				item = file.replace(paths.source, paths.remote)

				return new Promise((res, rej) => {
					s3.upload({
						Key: item,
						Bucket: obj.bucket,
						Body: fs.readFileSync(file),
						ContentType: mimeType(item),
					}, (err) => {
						if (err) {
							return rej(new Error(err))
						}
						uploaded.push(item)
						res({ result: true })
					})
				})
			}), (err) => {
				if (err) {
					return reject(new Error(err))
				}
				resolve({ files: uploaded, success: true })
			})
		})
	} catch (err) {
		throw new Error(err)
	}
}


module.exports = awsUpload
