class Player {
  constructor(playerName, id, color, active = false) {
    this.playerName = playerName;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = createTokens();
  }
  createTokens();
}
