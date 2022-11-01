const Game = require('./Game');

describe( 'Game', () => {
  const game = new Game( 3, 4 );

  it('works', () => {
    expect( game ).not.toBe( null );
  });

  it('gives a right descriptor', () => {
    expect( game.state ).toEqual ( [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null ] );
  });

  // performing a game on
  // 0 1 2
  // 3 4 5
  // 6 7 8
  // 9 10 null

  it('tells where is null', () => {
    expect( game.whereIs( null ) ).toEqual( {x: 2, y: 3} );
  });

  it('tells where is 8', () => {
    expect( game.whereIs( 8 ) ).toEqual( {x: 2, y: 2} );
  });

  it('tells where is 9', () => {
    expect( game.whereIs( 9 ) ).toEqual( {x: 0, y: 3} );
  });

  it('tells where is 10', () => {
    expect( game.whereIs( 10 ) ).toEqual( {x: 1, y: 3} );
  });

  it('makes 8 move correclty', () => {
    let pos = Object.values( game.whereIs(8)); 
    expect( game.move(...pos) ).toEqual( [ 0, 1, 2, 3, 4, 5, 6, 7, null, 9, 10, 8 ] );
  }); 

  it('makes 7 move correclty', () => {
    let pos = Object.values( game.whereIs(7)); 
    expect( game.move(...pos) ).toEqual( [ 0, 1, 2, 3, 4, 5, 6, null, 7, 9, 10, 8 ] );
  }); 

  it('makes 4 move correclty', () => {
    let pos = Object.values( game.whereIs(4)); 
    expect( game.move(...pos) ).toEqual( [ 0, 1, 2, 3, null, 5, 6, 4, 7, 9, 10, 8 ] );
  }); 

  it('makes 5 move correclty', () => {
    let pos = Object.values( game.whereIs(5)); 
    expect( game.move(...pos) ).toEqual( [ 0, 1, 2, 3, 5, null, 6, 4, 7, 9, 10, 8 ] );
  }); 

  it('makes 2 move correclty', () => {
    let pos = Object.values( game.whereIs(2)); 
    expect( game.move(...pos) ).toEqual( [ 0, 1, null, 3, 5, 2, 6, 4, 7, 9, 10, 8 ] );
  }); 

  // it('makes 1 move correclty', () => {
  //   let pos = Object.values( game.whereIs(1)); 
  //   expect( game.move(...pos) ).toEqual( [ 0, null, 1, 3, 5, 2, 6, 4, 7, 9, 10, 8 ] );
  // }); 

  // it('makes 0 move correclty', () => {
  //   let pos = Object.values( game.whereIs(0)); 
  //   expect( game.move(...pos) ).toEqual( [ null, 0, 1, 3, 5, 2, 6, 4, 7, 9, 10, 8 ] );
  // }); 

  // it('makes 3 move correclty', () => {
  //   let pos = Object.values( game.whereIs(3)); 
  //   expect( game.move(...pos) ).toEqual( [ 3, 0, 1, null, 5, 2, 6, 4, 7, 9, 10, 8 ] );
  // }); 

  // it('makes 6 move correclty', () => {
  //   let pos = Object.values( game.whereIs(6)); 
  //   expect( game.move(...pos) ).toEqual( [ 3, 0, 1, 6, 5, 2, null, 4, 7, 9, 10, 8 ] );
  // }); 

  // it('makes 9 move correclty', () => {
  //   let pos = Object.values( game.whereIs(9)); 
  //   expect( game.move(...pos) ).toEqual( [ 3, 0, 1, 6, 5, 2, 9, 4, 7, null, 10, 8 ] );
  // }); 

  // it('makes 10 move correclty', () => {
  //   let pos = Object.values( game.whereIs(10)); 
  //   expect( game.move(...pos) ).toEqual( [ 3, 0, 1, 6, 5, 2, 9, 4, 7, 10, null, 8 ] );
  // }); 


});