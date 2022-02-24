# AWS S3 Uploader

## Required params

* **bucket** - Bucket name
* **key** - S3 Access Key ID
* **secret** - S3 Secret Access Key
* **remote** - Path in your bucket to upload files. Ex.: /, /data/
* **source** - Path from source files relative to your project root.

## Optional params
* **region** - Default: 'us-east-1'

## Usage

`npm i aws-s3-uploader --save`

```
const AwsS3Uploader = require('aws-s3-uploader')

const params = {
  bucket: 'your-s3-bucket',
  key: 'your-s3-access-key-id',
  secret: 'your-secret-access-key',
  remove: 'bucket-folder-path',
  source: 'local-folder-path',
  region: 'your-s3-bucket-region'
}

await AwsS3Uploader(params)
```

Returns a **Promisse** with an array of uploaded files.

## Test

To test your connection with AWS the script will list the bucket. For this test all required params need to be filled.

```
$ npm test bucket="{bucket}" key="{key}" secret="{secret}" remote="{remote}" source="{source}" 
```

## Securety

> Don't store your key and secrets inside your JS files, unless you know what are you doing!

You can store this informations inside an API and request it from your JS file.

Another approach is create a JS file and get all this information from your CI service and pass it throght parameters. There it is an example to catch this parameters.

```
const path = require('path')
const AwsS3Uploader = require('aws-s3-uploader')

let argv = {}

process.argv.forEach((val, index) => {
  const prop = val.split('=')[0]
  const ct = val.split('=')[1]

  if (!ct || ct === undefined) return;
  argv[prop] = ct
})

let config = {
	source: `${path.resolve(__dirname, argv.source)}/`,
	remote: argv.remote,
	key: argv.key,
	secret: argv.secret,
	bucket: argv.bucket,
  region: argv.region
}

AwsS3Uploader(config)
```

Call your example-file.js from node, or create a script inside package.json and pass all parameters as string.

`node example-file.js bucket="{bucket}" key="{key}" secret="{secret}" remote="{remote}" source="{source}" region="{region}"`