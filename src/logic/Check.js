function Check(current_list , words_list)
{
    let correct = 0;
    for(let i = 0 ; i<current_list.length;i++)
    {
        if(current_list[i] === words_list[i])
        {
            correct++;
        }
    }
    return correct
}

export default Check