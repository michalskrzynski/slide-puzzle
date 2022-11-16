//const Game = require("./Game");

class SlidingBoard {

  #board = null;
  #game = null;
  #slides = new Array();
  #options = null;

  constructor( divId, options ) {
    if( options === null ) options = SlidingBoard.giveSetup();
    this.#options = options;
  
    this.#board = document.getElementById( divId );
    if( !this.#board ) throw new Error(`No div with id: ${divId}`);

    this.#board.style.display = 'grid';
    this.#board.style.gridTemplateRows = Array( options.rows ).fill(options.rowPx+'px').join(' ');
    this.#board.style.gridTemplateColumns = Array( options.cols ).fill( options.colPx+"px" ).join(' ');


    for( let i=0; i < options.cols*options.rows; i++ ) {
      
      let newSlide = document.createElement('div');
      newSlide.innerText = i;
      newSlide.setAttribute('id', 'slide'+i );
      this.#board.appendChild( newSlide )

      this.#slides.push( newSlide );
    }
  }



  get arrayOfSlides() {
    return this.#slides;
  }

  static giveSetup() {
    return {
      rows: 3,
      cols: 3,
      rowPx: 200,
      colPx: 200,
      imgSrc: "default.jpg"
    }
  }

}

function slideClicked(e) {
    let divId = e.currentTarget.id;
    let num = Number( divId.replace('slide', '') );

    let xy = game.whereIs( num );
    if( game.movePossible( xy.x, xy.y ) ) {
      alert( `${num} possible: ${xy.x}. ${xy.y}`);
    } else {
      alert( `Move impossible`);
    }
}


const options = SlidingBoard.giveSetup();
options.rows = 4;

const sb = new SlidingBoard( 'puzzle', options );
const game = new Game( options.cols, options.rows );

sb.arrayOfSlides.forEach( (s) => {
  s.addEventListener( 'click', slideClicked );
});


//TODO change order of boxes, using .flex-item { order: 2 };
//TODO try columns = 4 and test



