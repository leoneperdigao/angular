import { Component, OnInit } from '@angular/core';

import { DashGameService } from './shared';

@Component({
  selector: 'app-dash-game',
  templateUrl: './dash-game.component.html',
  styleUrls: ['./dash-game.component.css']
})
export class DashGameComponent implements OnInit {

  constructor(private dashGameService: DashGameService) { }

  ngOnInit() {
  	this.dashGameService.init();
  }

  /**
   * Returns whether the start screen should be displayed.
   * 
   * @return boolean
   */
  get displayBegin(): boolean {
  	return this.dashGameService.displayBegin;
  }

  /**
   * Returns whether the tray should be displayed.
   * 
   * @return boolean
   */
  get displayBoard(): boolean {
  	return this.dashGameService.displayBoard;
  }

  /**
   * Returns whether the end game screen should be displayed.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
  	return this.dashGameService.displayFinal;
  }

  /**
   * Initializes the data of a new game.
   *
   * @return void
   */
  beginGame(): void {
  	this.dashGameService.begin();
  }

  /**
   * Make a move when you click a place on the board.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  play(posX: number, posY: number): void {
  	this.dashGameService.play(posX, posY);
  }

  /**
   * Returns whether piece X should be displayed for the
   * coordinates informed.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  displayX(posX: number, posY: number): boolean {
  	return this.dashGameService.displayX(posX, posY);
  }

  /**
   * Returns whether part O should be displayed for the
   * coordinates informed.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  displayO(posX: number, posY: number): boolean {
  	return this.dashGameService.displayO(posX, posY);
  }

  /**
   * Returns whether the victory mark should be displayed for the
   *  coordinates informed.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  showVictory(posX: number, posY: number): boolean {
  	return this.dashGameService.showVictory(posX, posY);
  }

  /**
   * Returns the number of the player to play.
   * 
   * @return number
   */
  get player(): number {
  	return this.dashGameService.player;
  }

  /**
   * Start a new game.
   * 
   * @return void
   */
  newGame(): void {
  	this.dashGameService.newGame();
  }

}
