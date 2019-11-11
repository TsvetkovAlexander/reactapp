import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Field } from 'react-final-form';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
    Paper,
    Grid,
    Button,
    CssBaseline,
    MenuItem,
    FormControlLabel,
} from '@material-ui/core';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    console.log('values.name', values);
    // if (values.l >= 10 || values.length <= 3 ) {
    //     errors.name = 'Must be between 3 to 10 characters';
    // }
    return errors;
};

export default function App({ onSubmit,initialValues}) {
    return (
        <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
            <CssBaseline />
            <Form
                onSubmit={ onSubmit}
                validate={validate}
                render={({ handleSubmit, reset, submitting, pristine, values, onSubmit }) => (
                    <form onSubmit={handleSubmit} >
                        <Paper style={{ padding: 16 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="name"
                                        component={TextField}
                                        type="text"
                                        defaultValue={initialValues.name}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="type"
                                        component={Select}
                                        label="type"
                                        defaultValue={initialValues.type}
                                    >
                                        <MenuItem value="everti">everti</MenuItem>
                                        <MenuItem value="novum">novum</MenuItem>
                                        <MenuItem value="semper">semper</MenuItem>
                                    </Field>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        label="isActive"
                                        control={
                                            <Field
                                                name="isActive"
                                                component={Checkbox}
                                                type="checkbox"
                                                defaultValue={initialValues.isActive}
                                            />
                                        }
                                    />
                                </Grid>
                                <Grid item style={{ marginTop: 16}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </div>
    );
}
