import React from 'react'

export default function CheckboxFieldGroup(props) {
    let checkboxes = [];
    for (let index = 0; index < props.checkboxinfo.length; index++) {
        checkboxes.push(
            <div className="form-check form-check-inline">
                <input className="form-check-input"
                    name={props.checkboxinfo[index].name}
                    type="checkbox"
                    id={props.checkboxinfo[index].id}
                    onChange={props.onchangefun}
                    value={props.checkboxinfo[index].value}
                    checked={props.fieldvalue.indexOf(props.checkboxinfo[index].value) > -1} />
                <label className="form-check-label"
                    htmlFor={props.checkboxinfo[index].id}>{props.checkboxinfo[index].displaylbl}</label>
            </div>);
    }
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="gender">{props.checkboxGrouplbl}</label>
            <div className="col-sm-10">
                {checkboxes.map((item, ind) => {
                    return <React.Fragment key={ind}>{item}</React.Fragment>;
                })}
                {props.validationError !== undefined && props.validationError !== '' ? <span className='errormsg'>{props.validationError}</span> : ''}
            </div>
        </div>
    )
}
