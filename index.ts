import { ArrayShuffle } from "./array-shuffle";

const print = ( turn, teamA, teamB) => {
    console.log( '\x1b[33m', 'GAME ' + ( turn ) );
    console.log( '\x1b[0m', '---------------------------------------------' );
    console.log( '\x1b[32m%s\x1b[1m', ' TEAM A : ' + teamA );
    console.log( '\x1b[34m%s\x1b[1m', ' TEAM B : ' + teamB );
    console.log( '\x1b[0m', '---------------------------------------------' );
    console.log();
}

const printGreeting = () => {
    console.log('\x1b[31m',`
  _____ _      _    _ ______ 
 / ____| |    | |  | |  ____|
| |  __| |    | |__| | |__   
| | |_ | |    |  __  |  __|  
| |__| | |____| |  | | |     
 \_____|______ |_|  |_|_|     
 `);  
}

const run = () => {
    const names : string[] = process.argv.splice( 2, process.argv.length - 1 );
    const shuffler : ArrayShuffle = new ArrayShuffle();
    const games : number = 5;
    for ( let i : number = 0; i< games; i++ ){
        shuffler.shuffle( names );
        const teamA = names.slice( 0, Math.floor( ( names.length ) / 2 ));
        const teamB = names.slice( Math.ceil( (names.length ) / 2 ), names.length );
        print( i + 1, teamA, teamB );
    }
}

run();
printGreeting();
 