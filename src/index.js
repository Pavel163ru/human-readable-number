module.exports = function toReadable (number) {
   
    if(number === 0){
        return 'zero';
    }

    var convert = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen','nineteen'],
        ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    ]

    let digit2 = number % 100;
    let string2 = '';
    if(digit2 < 10){
        string2 += '' + convert[0][digit2];
    }else if(digit2 < 20){
        string2 += '' + convert[1][digit2 % 10];    
    }else{

        let string1 = digit2 % 10 ? ' ' + convert[0][digit2 % 10] : '';
        string2 += '' + convert[2][Math.floor(digit2/10)] + string1;
    }
    let string3 = '';
    if(number > 99){
        string3 += '' + convert[0][Math.floor(number/100)] + ' hundred';
    }

    return string3 + (string3 && string2 ? ' ' : '') + string2;

}
