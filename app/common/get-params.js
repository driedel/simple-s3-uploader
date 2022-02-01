class GetParams {
  constructor(params) {
    this.params = params
    this.argv = {}
    this.mandatory = ["bucket", "key", "secret", "source", "remote"]

    this.process()
    return this.argv
  }

  process() {
    this.params.forEach((val, index) => {
      const prop = val.split('=')[0]
      const ct = val.split('=')[1]
    
      if (!ct || ct === undefined) return;
      this.argv[prop] = ct
    })

    this.required()
  }

  required() {
    let message = `\nProcessing error.\nThe following params are required:\n\n`
    
    for (const item in this.argv) {
      if(this.mandatory.includes(item)) this.mandatory.splice(item, 1)
    }

    if(this.mandatory.length) {
      for (let i = 0; i < this.mandatory.length; i++) {
        message =`${message}-> ${this.mandatory[i]}\n` 
      }
      
      throw message
    }
  }
}

module.exports = GetParams