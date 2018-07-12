import { Data } from "../data";
import ScoringTile from "./scoring-tile";
import scoring from "../data/scoring";

export default class ScoringRenderer extends PIXI.Graphics {
  round: ScoringTile[] = [];
  
  constructor() {
    super();

    for (let i = 0; i < 6; i++) {
      const tile = new ScoringTile(i);
      this.addChild(tile);

      this.round.push(tile);

      tile.position.set(0, (scoring.round.tileHeight+5) * (5-i) + 130);

      tile.on('tooltip', (elem, text) => this.emit("tooltip", elem, text));
      tile.on('tooltip-remove', elem => this.emit("tooltip-remove", elem));
    }
  }

  render(data: Data) {
    data.roundScoringTiles.forEach((tile, i) => {
      this.round[i].draw(tile, i === data.round - 1);
    });
  }
}