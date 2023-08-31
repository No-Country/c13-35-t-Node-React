import { body } from 'express-validator';

export const validateName = () => {
    return [
        body('name')
            .trim()
            .notEmpty()
            .withMessage('El nombre es requerido')
            .isLength({ min: 3, max: 30 })
            .withMessage('El nombre debe tener entre 3 y 30 caracteres')
            .matches(/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s-]+$/)
            .withMessage('El nombre solo puede contener letras, acentos, diéresis y guiones.')
    ];
};