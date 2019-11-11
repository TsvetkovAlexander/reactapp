import React from 'react';
import Switch from '@material-ui/core/Switch';

export default function Switches({initialValues}) {
    const [state, setState] = React.useState({
        checkedA: initialValues.isActive,
        checkedB:  initialValues.isActive,
    });

    const handleChange = name => event => {
        initialValues.isActive = !initialValues.isActive;
        setState({ ...state, [name]: event.target.checked });
    };
console.log('initialValues33333333',initialValues);
    return (
        <div>
            {initialValues.isActive}
            <Switch
                checked={state.checkedB}
                onChange={handleChange('checkedB')}
                value="checkedB"
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    );
}
