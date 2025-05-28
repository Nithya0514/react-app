import { useState } from "react";
import { Fragment, JSX } from "react/jsx-runtime";
interface Props{
    items:string[];
    heading:string;
    onSelectItem: (item:string)=>void;
}
function ListGroup({items,heading,onSelectItem}:Props) {
    
   
    
const [selectedIndex,setSelectedIndex]=useState(-1);

    
    return (
        <Fragment>
            <h1>{heading}</h1>
        
            {items.length===0 && <p>No Item found</p>}
                <ul className="list-group">
            {items.map((item,index)=> (
                <li 
                className={selectedIndex===index?'list-group-item active':'list-group-item'}
                 key={item} 
                 onClick={()=>{setSelectedIndex(index);
                    onSelectItem(item);
                 }
             } >
              {item}</li>))};
                </ul>
        </Fragment>);
}
export default ListGroup;

function retrun(arg0: JSX.Element) {
    throw new Error("Function not implemented.");
}
