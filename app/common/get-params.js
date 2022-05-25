class GetParams {
  constructor(params) {
    this.params = params
    this.argv = {}
    this.mandatory = ["bucket", "key", "secret", "source", "remote"]

    this.process()
    return this.argv
  }

  process() {
    if(Array.isArray(this.params)) {
      this.params.forEach((val, index) => {
        const prop = val.split('=')[0]
        const ct = val.split('=')[1]
      
        if (!ct || ct === undefined) return;
        this.argv[prop] = ct
      })
    } else {
      this.argv = this.params
    }

    this.required()
  }

  required() {
    let message = `\nThe following params are required:\n\n`
    
    for (const item in this.argv) {
      if(this.mandatory.includes(item)) {
        const i = this.mandatory.indexOf(item)
        this.mandatory.splice(i, 1)
      }
    }

    if(this.mandatory.length) {
      for (let i = 0; i < this.mandatory.length; i++) {
        message =`${message}-> ${this.mandatory[i]}\n` 
      }
      
      throw new Error(message)
    }
  }
}

module.exports = GetParams