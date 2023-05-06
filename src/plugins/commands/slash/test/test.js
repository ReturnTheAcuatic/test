export class commands {
  toJSON() {
    return {
      name: "test",
      description: "test"
    }
  }
  
  async runInt(int) {
    int.respond({ content: "testxd" })
  }
}