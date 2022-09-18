class Player {
  constructor(playerName, id, color, active = false) {
    this.playerName = playerName;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }
  createTokens(num) {
    const tokens = [];
    for (let i = 0; i < num.length; i++) {
      let token = new Token(i, this);
      tokens.push(token);
    }
    return tokens;
  }
}
