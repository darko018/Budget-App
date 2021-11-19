import {useState} from 'react';
import {BiCheck} from 'react-icons/bi'

function Form({addItem}) {

    const [option, setOption] = useState("-");
    const [desc, setDesc] = useState("");
    const [number, setNumber] = useState("");

    const numberHandler = (e) => {
        setNumber(e.target.value);
    }
    
    const descHandler = (e) => {
        setDesc(e.target.value);
    }
    const optionHandler = (e) => {
        setOption(e.target.value);
    }

    const submitHandler = (e) =>  {
        e.preventDefault();
        addItem(option, desc, number);
    }

    return (
        <div className="form-box">
            <form onSubmit={submitHandler}>
                <select  onChange={optionHandler} value={option}>
                    <option value="-">-</option>
                    <option value="+">+</option>
                </select>
                <input className="desc" type="text" maxLength="50" onChange={descHandler} value={desc} required placeholder="Add description" />
                <input type="number" min="1" required placeholder="Value" onChange={numberHandler} value={number}/>
                <button><BiCheck width="3em" height="3em"/></button>
            </form>
        </div>
    )
}

export default Form
