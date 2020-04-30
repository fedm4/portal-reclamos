import React, {useState} from 'react';
import ReactSelect from 'react-select';
import InputButtons from './../InputButtons';

import './Select.scss';

const Select = ({handleChange, value, name, options, elRef, currentIndex, previousIndex, nextIndex}) => {
    const [_value, setValue] = useState({label: value, value});
    const onChange= e => {
        setValue(e);
        handleChange({name, value: e.value});
    }
    const handleKeyDown = e => {
        if(e.key === 'Tab' || e.key === 'Enter') {
            nextIndex();
        }
    };
    /**
     * Style object para react-select
     */
    const style = {
        control: base => ({
            ...base,
            backgroundColor: "transparent",
            borderColor: "#999!important",
            borderRadius: 0,
            boxShadow: "none",
            color: "#FAFAFA"
        }),
        menu: base => ({
            ...base,
            backgroundColor: "#333",
            color: "#FAFAFA",
            marginTop: "-7px"
        }),
        option: (base, {isFocused, isSelected}) => ({
            ...base,
            backgroundColor: isFocused ? 
                "#6689BA"
                : isSelected ?
                    "#335687"
                    :"transparent",
            ':hover': {
                ...base[':hover'],
                backgroundColor: "#6689BA"
            }
        }),
        singleValue: base => ({
            ...base,
            color: "#FAFAFA",
        }),
        input: base => ({
            ...base,
            color: "#FAFAFA"
        }) 
    };
    
    return (
        <div>
            <ReactSelect
                className="select"
                name={name}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                options={options}
                styles={style}
                placeholder="Seleccionar"
                value={_value}
                ref={elRef}
            />
            <InputButtons 
                currentIndex={currentIndex}
                previousIndex={previousIndex}
                nextIndex={nextIndex}
            />
        </div>
    )
}

export default Select;
