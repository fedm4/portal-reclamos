import React from 'react';
import ReactSelect from 'react-select';

import './Select.scss';

const Select = ({handleChange, options, value}) => {
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
            onChange={handleChange}
            options={options}
            styles={style}
            value={value}
        />
    )
}

export default Select;
