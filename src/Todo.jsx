import React, { useState } from 'react';
import ListofItem from "./ListofItem"
const Todo = () => {
    const [inputList, setInputList] = useState();
    const [item, setItem] = useState([]);


    const InputEvent = (event) => {
        setInputList(event.target.value);
    };

    const ListItem = () => {
        if (inputList) {
            setItem((oldItem) => {
                return ([...oldItem, inputList])
            });
            setInputList("");

        } else {
            alert('please fill the data')
        }
    }

    const deleteItem = (id) => {
        console.log("deleted");
        setItem((oldItem) => {
            // Filter Method
            return oldItem.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <section className="container bg-light wth">
                <div className=" my-5 ">
                    <div className="row">
                        <div className="col-6 col-md-4 mx-auto">
                            <h1>TodoList</h1>
                        </div>
                        <div className="row">
                            <div className="col-10 col-md-8 mx-auto">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Add to item"
                                        onChange={InputEvent} value={inputList} />
                                </div>
                                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button className="btn btn-success" type="button" onClick={ListItem}>
                                        <i className="fas fa-plus-circle"></i></button>
                                </div>
                            </div>

                        </div>
                        <section className='tableItem'>
                            <div className="row-cols-1">
                                <div className="col-6 col-md-6 my-3 mx-auto">

                                    <table className="table table-striped">
                                        <ol>

                                            {item.map((val, index) => {
                                                return <ListofItem
                                                    text={val}
                                                    key={index}
                                                    id={index}
                                                    onSelect={deleteItem}
                                                />
                                            })}

                                        </ol>
                                    </table>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>


    );
}

export default Todo;
