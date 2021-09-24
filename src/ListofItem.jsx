import React from 'react'
const ListofItem = (props) => {

    return (
        <>
            <div className="row">
                <div className="col-md-4 col-8 mx-auto">
                    <tbody className='text-center'>
                        <tr>
                            <td>{props.key}</td>
                            <td><h3 className='text-center'>{props.text}</h3></td>
                            <td><span><i className="fas fa-trash-alt deleteD"
                                onClick={() => { props.onSelect(props.id) }} /></span></td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </>
    );
}

export default ListofItem;


