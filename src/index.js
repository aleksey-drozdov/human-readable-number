module.exports = function toReadable(number) {
    const text = {
        num: {
            0: 'zero',
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine'
        },
        tens: {
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen'
        },
        tenner: {
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        }
    }
    var numberText;
    // 0 - 9
    if (number < 10) {
        numberText = text['num'][number];
        return numberText;
    }
    // 10 - 19
    if (number > 9 && number < 20) {
        numberText = text['tens'][number];
        return numberText;
    }
    // 20 - 99
    if (number > 19 && number < 100) {
        if (number % 10 == 0) {
            numberText = text['tenner'][number];
            return numberText;
        }
        numberText = text['tenner'][(Math.floor(number / 10) * 10)] + ' ' + text['num'][number % 10];
        return numberText;
    }
    // 100 - 999
    if (number > 99 && number < 1000) {
        // если сотни
        if (number % 100 == 0) {
            numberText = text['num'][number / 100] + ' ' + 'hundred';
            return numberText;
        }
        numberText = text['num'][Math.floor(number / 100)] + ' hundred';
        // от 101 до 109
        if (number % 100 < 10) {
            numberText += ' ' + text['num'][number % 100];
            return numberText;
        }
        // 110 - 119
        if (number % 100 > 9 && number % 100 < 20) {
            numberText += ' ' + text['tens'][number % 100];
            return numberText;
        }
        //120 - 199
        if (number % 100 > 19 && number % 100 <= 99) {
            var numberDiv = number % 100;
            if (numberDiv % 10 == 0) {
                numberText += ' ' + text['tenner'][numberDiv];
                return numberText;
            }
            numberText += ' ' + text['tenner'][numberDiv - numberDiv % 10] + ' ' + text['num'][numberDiv % 10]
            return numberText;
        }
    }

}
