# AWS S3 Uploader

## Required params

* **bucket** - Bucket name
* **key** - AWS Key
* **secret** - AWS Secret
* **remote** - Path in your bucket to upload files. Ex.: /, /data/
* **source** - Path from source files relative to your project root.

## Optional params
* **region** - Default: 'us-east-1'


## Teste

To test your connection with AWS the script will list the bucket. For this test all required params need to be filled.

```
$ node test bucket="{bucket}" key="{key}" secret="{secret}" remote="{remote}" source="{source}" 
```