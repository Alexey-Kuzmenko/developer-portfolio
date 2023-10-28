'use client';

import styles from './Form.module.scss';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Typography, TextField } from '@mui/material';
import { Button } from '..';

interface FormValues {
    email: string
    name: string
    message: string
}

export const Form = () => {
    const {
        control,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm<FormValues>({
        defaultValues: {
            email: '',
            name: '',
            message: ''
        },
        mode: 'onBlur'
    });

    const submitFormHandler: SubmitHandler<FormValues> = ({ email, name, message }) => {
        // ! debug
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`Message: ${message}`);
        reset();
    };

    return (
        <form className={styles.Form} onSubmit={handleSubmit(submitFormHandler)}>
            <Typography variant='h4' component='h2' textAlign='center'>Send me a message</Typography>
            <div className={styles.Form__textFields}>
                <Controller
                    name='email'
                    control={control}
                    rules={{
                        required: { value: true, message: 'This field is required' },
                        minLength: { value: 4, message: 'Invalid email, it\'s too short' },
                        pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid email' }
                    }}
                    render={({ field }) =>
                        <TextField
                            sx={{ width: '100%' }}
                            InputProps={{ disableUnderline: true }}
                            id='visitor-email'
                            label="Email"
                            variant='filled'
                            type='email'
                            helperText={errors.email?.message ? errors.email?.message : ''}
                            error={errors.email ? true : false}
                            {...field}
                        />
                    }
                />

                <Controller
                    name='name'
                    control={control}
                    rules={{
                        required: { value: true, message: 'This field is required' },
                        pattern: { value: /[\S\s]+[\S]+/, message: 'Invalid value' },
                        maxLength: { value: 40, message: 'The maximum length for this field is 40 characters' }
                    }}
                    render={({ field }) =>
                        <TextField
                            sx={{ width: '100%' }}
                            InputProps={{ disableUnderline: true }}
                            id='visitor-name'
                            label="Name"
                            variant='filled'
                            helperText={errors.name?.message ? errors.name?.message : ''}
                            error={errors.name ? true : false}
                            {...field}
                        />
                    }
                />

                <Controller
                    name='message'
                    control={control}
                    rules={{
                        required: { value: true, message: 'This field is required' },
                        pattern: { value: /[\S\s]+[\S]+/, message: 'Invalid value' },
                        maxLength: { value: 100, message: 'The maximum length for this field is 100 characters' }
                    }}
                    render={({ field }) =>
                        <TextField
                            sx={{ width: '100%' }}
                            InputProps={{ disableUnderline: true }}
                            id='visitor-message'
                            label="Message"
                            variant='filled'
                            multiline
                            rows={4}
                            helperText={errors.message?.message ? errors.message?.message : ''}
                            error={errors.message ? true : false}
                            {...field}
                        />
                    }
                />

            </div>

            <Button variant='contained' style={{ width: '100%' }} disabled={!isValid} type='submit'>Submit</Button>
        </form>
    );
};