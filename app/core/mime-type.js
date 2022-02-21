const mimeType = file => {
  const extension = file.split('.').pop().toLowerCase()
  
  const app = ['json', 'ogx', 'pdf', 'rtf', 'xml', 'zip']
  const audio = ['aac', 'mid', 'oga', 'opus', 'wav', 'weba']
  const images = ['avif', 'bmp', 'gif', 'jpeg', 'jpg', 'png', 'tif', 'webp']
  const text = ['ics', 'css', 'csv', 'htm', 'html', 'js', 'mjs', 'txt']
  const typography = ['eot', 'otf', 'ttf', 'woff', 'woff2']
  const video = ['mp4', 'mpeg', 'ogv', 'webm']
  
  if(app.includes(extension)) { return `application/${extension}` }
  if(audio.includes(extension)) { return `audio/${extension}` }
  if(images.includes(extension)) { return `image/${extension}` }
  if(text.includes(extension)) { return `text/${extension}` }
  if(typography.includes(extension)) { return `font/${extension}` }
  if(video.includes(extension)) { return `video/${extension}` }

  let mime = ''
  switch(extension) {
    case 'epub':
      mime = 'application/epub+zip'
      break
    case 'gz':
      mime = 'application/gzip'
      break
    case 'jar':
      mime = 'application/java-archive'
      break
    case 'jsonld':
      mime = 'application/ld+json'
      break
    case 'doc':
      mime = 'application/msword'
      break
    case 'bin':
      mime = 'application/octet-stream'
      break
    case 'azw':
      mime = 'application/vnd.amazon.ebook'
      break
    case 'mpkg':
      mime = 'application/vnd.apple.installer+xml'
      break
    case 'xul':
      mime = 'application/vnd.mozilla.xul+xml'
      break
    case 'xls':
      mime = 'application/vnd.ms-excel'
      break
    case 'eot':
      mime = 'application/vnd.ms-fontobject'
      break
    case 'ppt':
      mime = 'application/vnd.ms-powerpoint'
      break
    case 'odp':
      mime = 'application/vnd.oasis.opendocument.presentation'
      break
    case 'ods':
      mime = 'application/vnd.oasis.opendocument.spreadsheet'
      break
    case 'odt':
      mime = 'application/vnd.oasis.opendocument.text'
      break
    case 'pptx':
      mime = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
      break
    case 'xlsx':
      mime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      break
    case 'docx':
      mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      break
    case 'rar':
      mime = 'application/vnd.rar'
      break
    case 'vsd':
      mime = 'application/vnd.visio'
      break
    case '7z':
      mime = 'application/x-7z-compressed'
      break
    case 'abw':
      mime = 'application/x-abiword'
      break
    case 'bz':
      mime = 'application/x-bzip'
      break
    case 'bz2':
      mime = 'application/x-bzip2'
      break
    case 'cda':
      mime = 'application/x-cdf'
      break
    case 'csh':
      mime = 'application/x-csh'
      break
    case 'arc':
      mime = 'application/x-freearc'
      break
    case 'php':
      mime = 'application/x-httpd-php'
      break
    case 'sh':
      mime = 'application/x-sh'
      break
    case 'swf':
      mime = 'application/x-shockwave-flash'
      break
    case 'tar':
      mime = 'application/x-tar'
      break
    case 'xhtml':
      mime = 'application/xhtml+xml'
      break
    case 'mp3':
      mime = 'audio/mpeg'
      break
    case 'svg':
      mime = 'image/svg+xml'
      break
    case 'ico':
      mime = 'image/vnd.microsoft.icon'
      break
    // case 'ts':
    //   mime = 'video/mp2t'
    //   break
    case 'avi':
      mime = 'video/x-msvideo'
      break
    default:
      mime = 'text/plain'
  }

  return mime
}

module.exports = mimeType

