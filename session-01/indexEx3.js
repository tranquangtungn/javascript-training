function findAllWay(col,row)
{

    // var oneSafeWay=[];
    // for (var colIndex = 0; colIndex< 5;colIndex++)
    // {
    //     for(var rowIndex =0; rowIndex<3;rowIndex++)
    //     {
    //         //console.log(arr[rowIndex][colIndex])
    //         if(checkSafePosition(arr[colIndex][rowIndex]))
    //          {
    //              oneSafeWay.push(arr[colIndex][rowIndex]);
    //              arr[colIndex][rowIndex] = ;                 
    //              break;
                 
    //          }           
    //     }
    //     //console.log(oneSafeWay);
    //     //oneSafeWay=[];
    // }
    // console.log(oneSafeWay);
    
    if (row === 3 || col === 5)
        return;
    else if (arrOneWay.length === 5 )
    {      
        console.log(arrOneWay)
        arrOneWay.pop();      
    }
    else
    {
        if(checkSafePosition(arr[col][row]))
        {
            arrOneWay.push(arr[col][row]);      
            return findAllWay(col+1,0);           
        }
        else
        {
            return findAllWay(col,row+1)
        }
        
    }
    
}
var arrOneWay=[];
var arr = [ [0,1,1], [0,1,1], [0,1,1], [0,1,1], [0,0,1]]
function checkSafePosition(a)
{
    return !a;
}
