export function calculateTotal(amount, term){
    // calculate the total interest based on the amount
    let totalAmount;

    if(amount <= 1000) {
        totalAmount = amount * .25;
    } else if(amount > 1000 && amount <= 5000){
        totalAmount = amount * .20;
    } else if(amount > 5000 && amount <= 10000){
        totalAmount = amount * .15;
    } else {
        totalAmount = amount * .10;
    }


    //calculate the total interest based on the time
    let totalTerm;

    switch (term) {
        case 3:
            totalTerm = amount * .05;
            break;
        case 6:
            totalTerm = amount * .10;
            break;
        case 12:
            totalTerm = amount * .15;
            break;
        case 24:
            totalTerm = amount * .2;
            break;
        default:
            break;
    }

    return amount + totalTerm + totalAmount;




}