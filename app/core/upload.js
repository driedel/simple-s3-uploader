const fs = require('fs')
const async = require('async')
const AWS = require('aws-sdk')
const readdir = require('recursive-readdir')
const mimeType = require('./mime-type')

function loadDir(dirPath) {
	if(!fs.existsSync(dirPath)) {
		console.log(`\nProcessing error.\nCheck the path to your local directory\n`)
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

		if(!files.length) {
			console.log(`\nProcessing error.\nYour source directory is empty.\n`)
		process.exit(1)
		}

		return new Promise((resolve, reject) => {
			async.eachOfLimit(files, 10, async.asyncify(async (file) => {
				let item
				
				item = file.replace(paths.source, paths.remote)

				console.log(`Uploading file: ${item}`)

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
						res({ result: true })
					})
				})
			}), (err) => {
				if (err) {
					return reject(new Error(err))
				}
				resolve({ result: true })
			})
		})
	} catch (err) {
		throw err
	}
}


module.exports = awsUpload