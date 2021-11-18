//function to show notification that the user has entered the same letter twice
export function showNotification(setter){
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000)

}

//function to check if the user has won or lost
export function checkWin(correct, wrong, word){
    let status = 'win';

    //check if the player won
    word.split('').forEach(letter => {
        if(!correct.includes(letter)){
            status = '';
        }

    });

    //check if the player lost
    if(wrong.length === 6) status = 'lose';

    return status;


}