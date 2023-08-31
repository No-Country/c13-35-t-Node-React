import { body } from 'express-validator';

export const validateConfirmPassword = () => {
    return [
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('La contraseña de confirmación no coincide');
                }
                return true;
            })
    ]
}