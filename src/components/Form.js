import React from 'react';
import {
     FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
       
       
        } from '@material-ui/core';




export default function Form({formLabel, values, onChange,currentValue,lables}){
    return (
        <div className='card container-small'>
            <FormControl>
            <FormLabel>{formLabel}</FormLabel>
            <RadioGroup  onChange={onChange}>
                {values.map((value, index)=>(
                <FormControlLabel
                    key={`${value}_${index}`}
                    value={value}
                 
                    control={<Radio/>}
                    label={lables[index]}
                />
                ))}
            </RadioGroup>
            </FormControl>
           
        </div>
    );
}