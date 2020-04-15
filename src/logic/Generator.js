function generate_words(num)
{
    let randomWords = require('random-words');
    return randomWords({exactly: num , join : " "});
}

export default generate_words