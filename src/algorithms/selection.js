import {swap} from './helpers';
const selection = (array, position, arraySteps, colorSteps) =>{
    let colorkey = colorSteps[colorSteps.length-1].slice();
    for(let i=0; i<array.length-1; i++){
        let min_index =i;
        for(let j = i+1; j<array.length; j++){
            if(array[j]< array[min_index]){
                min_index=j;
            }
            colorkey[min_index] = 1;
            colorkey[j]= 1;
            arraySteps.push(array.slice());
            colorSteps.push(colorkey.slice());
            colorkey[min_index]=0;
            colorkey[j]=0;
        }
        swap(array, min_index, i);
        colorkey[i]=2;
        arraySteps.push(array.slice());
        colorSteps.push(colorkey.slice());
    }
    colorSteps[colorSteps.length -1] = new Array(array.length).fill(2); 
}

export default selection;