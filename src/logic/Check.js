function Check(current_list , words_list)
{
    let correct = 0;
    let wrong = 0;
    let allwords = 0;
    for(let i = 0 ; i<current_list.length;i++)
    {
        if(current_list[i] !== '')
        {
            if(current_list[i] === words_list[i])
            {
                correct++;
            }
            else{
                wrong++;
            }
        allwords++;
        }
    }
    return [allwords ,correct , wrong];
}

export default Check