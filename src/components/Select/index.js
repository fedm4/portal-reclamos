import React from 'react';
import ReactSelect from 'react-select';

import './Select.scss';

const Select = ({handleChange, name, options, value, input}) => {
    const style = {
        control: base => ({
            ...base,
            borderColor: "#999!important",
            borderRadius: 0,
            boxShadow: "none"
        }),
        menu: base => ({
            ...base,
            marginTop: "-7px"
        })
    };
    
    return (
        <ReactSelect
            className="select"
            name={name}
            onChange={e => handleChange({name, value: e.value})}
            options={options}
            styles={style}
            value={value}
            ref={input}
        />
    )
}

export default Select;
