import { Injectable } from '@angular/core';

@Injectable()
export class DashGameService {

  private readonly TAB_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private numMovements: number;
  private victory: any;

  private _player: number;
  private _displayBegin: boolean;
  private _displayBoard: boolean;
  private _displayFinal: boolean;

  constructor() { }

  /**
   * Initializes the game. Sets home screen display.
   *
   * @return void
   */
  init(): void {
    this._displayBegin = true;
    this._displayBoard = false;
    this._displayFinal = false;
    this.numMovements = 0;
    this._player = this.X;
    this.victory = false;
    this.initBoard();
  }

  /**
   * Initializes the empty game board for all
���* the positions.
   *
   * @return void
   */
  initBoard(): void {
    this.board = [this.TAB_SIZE];
    for (let i = 0; i < this.TAB_SIZE; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  /**
   * Returns whether the start screen should be displayed.
   * 
   * @return boolean
   */
  get displayBegin(): boolean {
    return this._displayBegin;
  }

  /**
   * Returns whether the tray should be displayed.
   * 
   * @return boolean
   */
  get displayBoard(): boolean {
    return this._displayBoard;
  }

  /**
   * Returns whether the end game screen should be displayed.
   * 
   * @return boolean
   */
  get displayFinal(): boolean {
    return this._displayFinal;
  }

  /**
   * Returns the number of the player to play.
   * 
   * @return number
   */
  get player(): number {
    return this._player;
  }

  /**
   * Displays the board.
   *
   * @return void
   */
  begin(): void {
    this._displayBegin = false;
    this._displayBoard = true;
  }

  /**
   * Make a move given the coordinates of the board.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  play(posX: number, posY: number): void {
    // invaded play
    if (this.board[posX][posY] !== this.EMPTY || 
      this.victory) {
      return;
    }

    this.board[posX][posY] = this._player;
    this.numMovements++;
    this.victory = this.endGame(posX, posY, 
      this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

    if (!this.victory && this.numMovements < 9) {
      this.cpuPlay();
    }

    // victory?
    if (this.victory !== false) {
      this._displayFinal = true;
    }

    // draw?
    if (!this.victory && this.numMovements === 9) {
      this._player = 0;
      this._displayFinal = true;
    }
  }

  /**
   * Checks and returns whether the game is finished.
   *
   * @param number line
   * @param number column
   * @param any board
   * @param number player
   * @return array
   */
  endGame(line: number, column: number, 
      board: any, player: number) {
    let end: any = false;

    // validate the line
    if (board[line][0] === player && 
      board[line][1] === player && 
      board[line][2] === player) {
      end = [[line, 0], [line, 1], [line, 2]];
    }

    // validate the column
    if (board[0][column] === player && 
      board[1][column] === player && 
      board[2][column] === player) {
      end = [[0, column], [1, column], [2, column]];
    }

    //validates the diagonals
    if (board[0][0] === player && 
      board[1][1] === player && 
      board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === player && 
      board[1][1] === player && 
      board[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  /**
   * Logic to simulate computer play in random mode.
   *
   * @return void
   */
  cpuPlay(): void {
    // check victory play
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      // try to play to avoid defeat
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      // play random
      let movements: any = [];
      for (let i=0; i<this.TAB_SIZE; i++) {
        for (let j=0; j<this.TAB_SIZE; j++) {
          if (this.board[i][j] === this.EMPTY) {
            movements.push([i, j]);
          }
        }
      }
      let k = Math.floor((Math.random() * (movements.length - 1)));
      move = [movements[k][0], movements[k][1]];
    }

    this.board[move[0]][move[1]] = this._player;
    this.numMovements++;
    this.victory = this.endGame(move[0], move[1],
        this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;
  }

  /**
   * They get a valid move for a player to win.
   *
   * @param number player
   * @return number[]
   */
  getMove(player: number): number[] {
    let tab = this.board;
    for (let lin = 0; lin < this.TAB_SIZE; lin++) {
      for (let col = 0; col < this.TAB_SIZE; col++) {
        if (tab[lin][col] !== this.EMPTY) {
          continue;
        }
        tab[lin][col] = player;
        if (this.endGame(lin, col, tab, player)) {
          return [lin, col];
        }
        tab[lin][col] = this.EMPTY;
      }
    }
    return [];
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
    return this.board[posX][posY] === this.X;
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
    return this.board[posX][posY] === this.O;
  }

  /**
   * Returns whether the victory mark should be displayed for the
   * coordinates informed.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  showVictory(posX: number, posY: number): boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }

  /**
   * Initializes a new game as well as displays the board.
   *
   * @return void
   */
  newGame(): void {
    this.init();
    this._displayFinal = false;
    this._displayBegin = false;
    this._displayBoard = true;
  }

}
