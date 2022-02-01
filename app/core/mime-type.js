const mimeType = file => {
  const extension = file.split('.').pop()
  let mime = ''

  switch(extension) {
    case 'bmp':
      mime = 'image/bmp'
      break
    case 'css':
      mime = 'text/css'
      break
    case 'gif':
      mime = 'image/gif'
      break
    case 'htm':
      mime = 'text/html'
      break
    case 'html':
      mime = 'text/html'
      break
    case 'jpg':
      mime = 'image/jpeg'
      break
    case 'jpeg':
      mime = 'image/jpeg'
      break
    case 'js':
      mime = 'text/javascript'
      break
    case 'mp4':
      mime = 'video/mp4'
      break
    case 'mpeg':
      mime = 'video/mpeg'
      break
    case 'png':
      mime = 'image/png'
      break
    case 'pdf':
      mime = 'application/pdf'
      break
    case 'svg':
      mime = 'image/svg+xml'
      break
    case 'webp':
      mime = 'image/webp'
      break
    case 'zip':
      mime = 'application/zip'
      break
    default:
      mime = 'text/html'
  }
  return mime
}

module.exports = mimeType

