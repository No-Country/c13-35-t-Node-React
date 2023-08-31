import { body } from 'express-validator';

export const validatePhone = () => {
    return [
        body('phone')
            .if(body('phone').exists())
            .custom(value => {
                const validPhonePattern = /^[0-9]+$/;
                if (!validPhonePattern.test(value)) {
                    throw new Error('El teléfono solo debe contener números.')
                }
                return true;
            })
    ]
}