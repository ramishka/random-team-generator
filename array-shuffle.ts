export class ArrayShuffle {
    
    /**
     * The shuffle is based on Durstenfeld shuffle algorithm.
     * It picks a random element for each original array element, 
     * and excludes it from the next draw.
     * 
     * Note: This modifiers the original array, in place
     */
    public shuffle( arr : any[] ) : any[] {
        for( let i: number = arr.length - 1; i > 0; i--  ){
            const j : number = Math.floor( Math.random() * ( i + 1 ));
            const temp : any = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
        }
        return arr;        
    }
}