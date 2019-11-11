import React from 'react';
import { Form, Field } from 'react-final-form';

import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import './style.css';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switches from '../Switches';


const required = value => (value ? undefined : 'Required');
const mustBeNumber = value => (value.length <= 3 || value.length >= 10 ? 'Must be between 3 to 10 characters' : undefined);
const composeValidators = (...validators) => value =>
    validators.reduce((error, validator) => error || validator(value), undefined);



const CreateCard = ({ onSubmit, handleClose, initialValues }) => {
    console.log('initialValues', initialValues);
    return(<Form
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>

                <DialogContent className="input-group-modal">
                    <h2> {initialValues.name}</h2>
                    <Field
                        required name="name"
                        validate={composeValidators(required, mustBeNumber)}
                    >
                        {({ input, meta }) => (
                            <div className='inputAndValudation'>
                                <label>type</label>
                                <input {...input} type="text" className='inputType'/>
                                {meta.error && meta.touched && <span className='validationMessage' >{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div>
                        <label>Employed</label>
                        <Field name="isActive" component="input" type="checkbox" />
                    </div>
                    <div>
                        <label>Type</label>

                        <Field required name="type" component="select">
                            <option value="everti">everti</option>
                            <option value="novum">novum</option>
                            <option value="semper">semper</option>
                        </Field>
                    </div>
                </DialogContent>
                <DialogActions className="AddClose">
                    <Button type="submit" color="primary">
                        SAVE
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                       CANCEL
                    </Button>
                </DialogActions>
            </form>
        )}
    />);
};


export default CreateCard;
