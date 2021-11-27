// Code your solution here
function findMatching(array,stringPassed)
{

    const filterMatch = array.filter(word =>
    {
        return word.toLowerCase() === stringPassed.toLowerCase()                
    });
    return filterMatch;
}

function fuzzyMatch(array,names)
{
    const nameDigit = names.length;

    const filterMatch = array.filter(word => 
    {
        return word.slice(0,nameDigit) === names                
    })
    return filterMatch;
}

function matchName(array , names)
{
    const filterMatch = array.filter(arrayObject => 
    {
        return  arrayObject.name === names       
    })
    return filterMatch;
}