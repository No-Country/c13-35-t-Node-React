import { body } from 'express-validator';
export const validateUsername = () => {
    return [
        body('username')
            .trim()
            .notEmpty()
            .withMessage('El nombre de usuario es requerido.')
            .isLength({ min: 3 })
            .withMessage('El nombre de usuario debe tener al menos 3 caracteres.')
            .isLength({ max: 20 })
            .withMessage('El nombre de usuario no puede tener más de 20 caracteres.')
            .matches(/^[A-Za-z0-9\sáéíóúüñÁÉÍÓÚÜÑ\-]+$/)
            .withMessage('El nombre de ususario es incorreto. Por favor, ingréselo de nuevo.')
    ]
}