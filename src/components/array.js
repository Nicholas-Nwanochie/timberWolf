

import React from 'react';

export default function componentName() {

      let thisArray = [
            'I', 's', 'a', ' ', 'a', 'b', ' ', 'h', 'c',
            'i', 'p', 'd', 'p', 'o', 'e', 'p', 'o', 'f',
            't', 'a', 'g', 'm', 'u', 'h', 's', ' ', 'i',
            'a', ' ', 'j', 'h', 'i', 'k', 'p', 'p', 'l',
            'o', 'p', 'm', 'o', 't', 'n', 'a', 'm', 'o',
            'u', 's', 'p', ' ', 'o', 'q', 'r', ' ', 'r',
            'j', 'u', 's', 's', 't', 't', ' ', 'a', 'u',
            ' ', 'r', 'v', 'e', 'a', 'w', 'l', 'l', 'x',
            'y', ' ', 'y', 'c', 'o', 'z', 'o', 'l', 'a',
            ' ', 'o', 'b', 'p', 'o', 'c', 't', 'a', 'd',
            'm', 'u', 'e', 's', '?', 'f', ' ', '-', 'g',
            ' ', 'M', 'h', 'i', 't', 'i', 'c', 'h', 'j',
            ' ', 'H', 'k', 'e', 'd', 'l', 'b', 'e', 'm',
            'r', 'g', 'n'
        ]
let list = []

    for(let i = 0; thisArray.length>=i;i++ ){
        if(i%3 == 0){
list.push(thisArray[i]);

}
}
let stringIt = list.join('');
console.log(stringIt)


  return (
    <>
            {
<span>
{stringIt}
</span>
        }
    </>
  );
}

            
            







