// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `wah, I am ${this.name}`
  }
}

module.exports = Dog
