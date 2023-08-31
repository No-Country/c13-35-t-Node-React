import { check } from 'express-validator';

export const validatePassword = () => {
    return [
        check('password')
            .isLength({ min: 6, max: 10 })
            .withMessage('La contraseña debe tener entre 6 y 10 caracteres.')
            .matches(/[A-Z]/)
            .withMessage('La contraseña debe tener al menos una letra mayúscula.')
            .matches(/[a-z]/)
            .withMessage('La contraseña debe tener al menos una letra minúscula.')
            .matches(/[0-9]/)
            .withMessage('La contraseña debe tener al menos un número.')
            .matches(/[^A-Za-z0-9]/)
            .withMessage('La contraseña debe tener al menos un caracter especial.')
    ];
};