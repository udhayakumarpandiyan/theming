import React from 'react'
import MatRadio, { RadioProps } from '@material-ui/core/Radio'
import MatRadioGroup, { RadioGroupProps } from '@material-ui/core/RadioGroup'
import MatFormControlLabel from '@material-ui/core/FormControlLabel'

type RadioPair = {
    value: string
    label: string
    disabled?: boolean | undefined
}

interface IRadioProps extends RadioProps {
    values: Array<RadioPair>
}

export const Radio = (props: RadioProps) => {
    return <MatRadio {...props} />
}

const RadioButtonsGroup = (props: RadioGroupProps & IRadioProps) => {
    const { onChange, value, defaultValue, name, ...remainingProps } = props

    return (
        <MatRadioGroup
            value={value}
            onChange={onChange}
            defaultValue={defaultValue}
            name={name}>
            {React.Children.toArray(
                props.values.map((radioObj: RadioPair) => (
                    <MatFormControlLabel
                        value={radioObj.value}
                        control={
                            <MatRadio
                                disabled={radioObj.disabled}
                                {...remainingProps}
                            />
                        }
                        label={radioObj.label}
                    />
                ))
            )}
        </MatRadioGroup>
    )
}

{
    /* {React.Children.toArray(props.children).map(child => React.isValidElement(child) ? React.cloneElement(child) : child)} */
}

export default RadioButtonsGroup
