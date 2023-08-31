import { body } from 'express-validator';
import { prisma } from '../controllers/prisma-controller.js';

export const validateEmail = (isRegistration = true) => {
    return body('email')
        .trim()
        .notEmpty()
        .withMessage('El correo electrónico es requerido.')
        .isEmail()
        .withMessage('El correo electrónico no tiene un formato válido.')
        .custom(async (email) => {
            if (isRegistration) {
                const existingUser = await prisma.user.findUnique({
                    where: {
                        email: email
                    }
                });
                if (existingUser) {
                    throw new Error('El correo electrónico ya está registrado.');
                }
            }
            return true;
        });
};