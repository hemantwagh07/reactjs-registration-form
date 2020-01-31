import React from 'react'

export default function InputField(props) {
    // console.log(props.validationError);

    const { id, displaylbl, type, name, placeholder, onchangefun, fieldvalue } = props;
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor={id}>{displaylbl}</label>
            <div className="col-sm-10">
                <input type={type} name={name} className="form-control"
                    id={id} placeholder={placeholder}
                    onChange={onchangefun}
                    value={fieldvalue} />
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </div>
        </div>
    )
}
