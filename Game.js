class Game {

  #positions = null;
  #xdim = 0;
  #ydim = 0;

  constructor( x, y ) {
    this.#xdim = x;
    this.#ydim = y;
    this.#positions = Array( y );
    for( let i = 0; i < y; i++ ) {

      this.#positions[i] = Array( x );
      for( let j = 0; j < x; j++ ) {
        
        this.#positions[i][j] = this.#flatIndex(j,i);

      }
    }
    // last element needs to be null
    this.#positions[y-1][x-1] = null;
  }

  #flatIndex(x,y) {
    return y*this.#xdim + x;
  }

  get state() {
    return this.#positions.flat();
  }

  #whereIsFlat( target ) {
    return this.#positions.flat().indexOf( target ); 
  }

  whereIs( target ) {
    let flatIndex = this.#whereIsFlat( target );
    return {x: flatIndex % this.#xdim, y: Math.floor(flatIndex / this.#xdim) }
  }

  consoleLog() {
    for( let i =0; i < this.#ydim; i++ ) {
      console.log( this.#positions[i] );
    }
  }

  move(x, y) {
    if( !this.movePossible(x, y) ) throw new Error('Move impossible.');

    let nullPos = this.whereIs( null ); 
    this.#positions[ nullPos.y ][ nullPos.x ] = this.#positions[y][x];
    this.#positions[ y ][ x ] = null;

    return this.state;
  }

  movePossible(x, y) {
    return this.#hasAdjacentNull(x, y);
  }

  #hasAdjacentNull(x, y) {
    debugger
    if( this.#positions[x][y] === null ) return false;

    const xyFlat = this.#flatIndex(x, y);
    const positionsFlat = this.#positions.flat();
    this.consoleLog();
    console.log( 'indices: ' + x + ", " +y + ' => FLAT: '+xyFlat);
    return ( 
      //one below
      ( 
        xyFlat + this.#xdim < positionsFlat.length // next row within positions range
        && 
        positionsFlat[ xyFlat + this.#xdim ] === null // and there is null
      )
      ||
      //one above
      ( 
        xyFlat - this.#xdim >= 0 // previous row index is positive
        && 
        positionsFlat[ xyFlat - this.#xdim ] === null ) // and there is null
      ||
      //one to the right
      ( 
        Math.floor((x + 1) / this.#xdim) === Math.floor( x / this.#xdim )  //next index is still within same row
        &&
        positionsFlat[ xyFlat + 1 ] === null // and there is null 
      )
      ||
      //one to the left
      (
        Math.floor((x - 1) / this.#xdim) === Math.floor( x / this.#xdim )  //one to the left is within same row
        &&
        positionsFlat[ xyFlat - 1 ] === null
      )
    );
  }


}

