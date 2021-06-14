import React from 'react';

const Result = ({term, secretNum}) => {
    let res;

    if(term){
        if(secretNum >term){
            res = "You've guessed Lower!!"
        }

        else if(secretNum < term){
            res = "You've guessed Higer!!"
        }
        else{
            res = "You've guessed right!!!"
        }
    }
    return <h3>
        {res}
    </h3>
}

export default Result;