import React from 'react'
import "./FilterCheckbox.scss"


const FilterCheckbox = (props) => (
    <label className="filterCheckbox" >
        {props.label}
        <input type="checkbox" checked={props.checked} onChange={props.onChangeCheckbox}/>
        <span className="checkmark" ></span>
    </label>
)

export default FilterCheckbox;
