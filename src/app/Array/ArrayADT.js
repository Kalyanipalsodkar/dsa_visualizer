export default function ArrayADT(size){ //size:max capacity of the array
    let array=new Array(size).fill(null); //actual array, initialized with null values
    let length=0; //tracks how many elements are filled (index starts with 0)
    
    const insert=(index, value)=>{
        if(index<0 || index>length || length==size){
            return false;
        }
        for(let i=length; i>index; i--){
            array[i]=array[i-1]; //shifts all elements to right
        }
        array[index]=value; //place value at index
        length++;
        return true;
    };

    const remove=(index)=>{
        if(index<0 || index>=length){
            return false;
        }
        for(let i=index; i<length-1; i++){
            array[i]=array[i+1]; //shifts elements to left
        }
        array[length-1]=null; //clear the last value
        length--;
        return true;
    };

    const search=(value)=>{
        for(let i=0; i<length; i++){
            if(array[i]==value){
                return i;
            }
        }
        return -1;
    };

    const update=(index, newValue)=>{
        if(index<0 || index>=length){
            return false;
        }
        array[index]=newValue;
        return true;
    };

    const getArray=()=>[...array];
    const getSize=()=> size;
    const getLength =()=> length;

    return{
        insert,
        remove,
        search,
        update,
        getArray,
        getSize,
        getLength
    };
}