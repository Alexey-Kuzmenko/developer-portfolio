'use client';

import { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Typography, TextField } from '@mui/material';
import ReCAPTCHA from 'react-google-recaptcha';
import cn from 'classnames';

import { Button } from '..';
import { reCaptchaResponse } from '@/models/reCaptcha-response.model';
import { FormDataModel } from '@/types/form-data.type';
import { RECAPTCHA_PUBLIC_KEY_IS_NOT_DEFINED } from '@/constants/errors';

import styles from './Form.module.scss';

interface FormValues {
    email: string
    name: string
    message: string
}

export const Form = () => {
    const RECAPTCHA_PUBLIC_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY;
    const [isCaptchaValid, setIsCaptchaValid] = useState<boolean>(false);

    if (!RECAPTCHA_PUBLIC_KEY) {
        throw new Error(RECAPTCHA_PUBLIC_KEY_IS_NOT_DEFINED);
    }

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

    const captchaHandler = async (token: string | null): Promise<void> => {
        if (token) {
            const response = await fetch('/api/captcha', {
                method: 'POST',
                body: JSON.stringify({
                    response: token
                })
            });

            if (response.ok) {
                const data: reCaptchaResponse = await response.json();
                setIsCaptchaValid(data.success);
            } else {
                throw new Error(`Status code: ${response.status}, error: ${response.statusText}`);
            }
        }
    };

    const submitFormHandler: SubmitHandler<FormValues> = async ({ email, name, message }): Promise<void> => {
        const formData: FormDataModel = {
            email,
            name,
            message
        };

        reset();
        setIsCaptchaValid(false);

        try {
            await fetch('/api/order', {
                method: 'POST',
                body: JSON.stringify(formData)
            });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
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

            <div className={cn(styles.Form__captchaWrapper, {
                [styles.Form__captchaWrapper_hidden]: isValid === false
            })}>
                <ReCAPTCHA
                    sitekey={RECAPTCHA_PUBLIC_KEY}
                    theme='dark'
                    size='normal'
                    badge='inline'
                    onChange={captchaHandler}
                    onExpired={() => setIsCaptchaValid(false)}
                />
            </div>

            <Button
                variant='contained'
                style={{ width: '100%' }}
                disabled={isValid && isCaptchaValid ? false : true}
                type='submit'
            >
                Submit
            </Button>
        </form>
    );
};