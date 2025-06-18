export default function StackADT(){
    let items=[];
    const push=(value)=>{
        items.push(value);
        return value;
    };

    const pop=()=>{
        if(items.lenght===0){
            return null;
        }
        return items.pop();
    };
    const peek=()=>{
        return items.length===0 ?null: items[items.length-1];
    };
    const isEmpy=()=>{
        return items.length;
    };
    const getSize=()=>{
        return items.length;
    };
    const getArray=()=>{
        return [...items].reverse();
    };

    return{
        push,
        pop,
        peek,
        isEmpy,
        getSize,
        getArray,
    }
}