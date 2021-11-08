import './AddItemForm.css'
import {useRef} from 'react';

function AddItemForm(props){
    const nameInputRef=useRef();
    const priceInputRef=useRef();
    const categoryInputRef=useRef();

    function formSubmitHandler(e){
        e.preventDefault();
        
        const nameValue =nameInputRef.current.value;
        const priceValue =priceInputRef.current.value;
        const categoryValue =categoryInputRef.current.value;

        const item={
            name: nameValue, 
            price: priceValue,
            category: categoryValue
        }

        props.onAddItem(item);
    }

    
    return(
        <form onSubmit={formSubmitHandler}>
            <label>Eseme nimi</label><br/>
            <input type="Text" placeholder="nimi" required ref={nameInputRef}></input><br/>
            <label>Eseme hind</label><br/>
            <input type="Text" required required ref={priceInputRef}></input><br/>
            <label>Eseme kategooria</label><br/>
            <input type="Text" required required ref={categoryInputRef}></input><br/>
            <button >Sisesta uus ese</button>
        </form>
    );
}

export default AddItemForm;