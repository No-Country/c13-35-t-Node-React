import express from 'express';
import { prisma } from './prisma-controller.js'
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import {
    validateName,
    validateEmail,
    validatePhone,
    validateUsername,
    validatePassword,
    validateConfirmPassword,
} from '../validation-squemas/validationUtils.js';
import { hashPassword, comparePassword } from '../validation-squemas/bcryptUtils.js';

const router = express.Router();

// User register route
router.post('/registro',
    validateName(),
    validateEmail(true),
    validatePhone(),
    validateUsername(),
    validatePassword(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map(error => error.msg);
                return res.status(400).json({ errors: errorMessages });
            }

            const { name, email, phone, username, password, role } = req.body;
            const hashedPassword = await hashPassword(password);
            const createdUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    phone,
                    username,
                    password: hashedPassword,
                    role,
                }
            });
            res.json({ message: 'Usuario registrado correctamente.', user: createdUser })
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al registrar el usuario.' })
        }
    }
)

// User login route
router.post('/ingreso',
    validateEmail(false),
    validatePassword(),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map(error => error.msg);
                return res.status(400).json({ errors: errorMessages });
            }

            const { email, password } = req.body;

            // User search by email
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            });

            if (!user) {
                return res.status(400).json({ message: 'Ususario no encontrado.' });
            }

            // Compare insert password with the hashed password storage
            const passwordMatch = await comparePassword(password, user.password);
            if (!passwordMatch) {
                return res.status(400).json({ message: 'Contraseña incorrecta.' })
            }

            // Generate JWT token
            const token = jwt.sign(
                {
                    userId: user.id
                },
                'secret',
                {
                    expiresIn: '1h'
                }
            );
            res.json({ message: 'Inicio de sesión exitoso.', token });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error al iniciar sesion.' })
        }
    }
)




export default router;