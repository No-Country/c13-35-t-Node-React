import bcrypt from "bcryptjs"
import prisma from "@/app/libs/connectMySQL";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import validateName from "../../helpers/validateName"
import validateEmail from "../../helpers/validateEmail";
import validatePhone from "../../helpers/validatePhone";
import validateUsername from "../../helpers/validateUsername";
import validatePassword from "../../helpers/validatePassword";
import validateConfirmPassword from "../../helpers/validateConfirmPassword";

export async function POST(request: NextRequest) {
    try {

        const body = await request.json()
        const { name, email, phone, username, password, confirmPassword, role } = body

        // Verify that all required fields are not empty.
        // if (!email || !password || !confirmPassword || !name || !role) {
        //     return NextResponse.json({ message: "Por favor, proporciona todos los campos requeridos." });
        // }
        const requiredFields = [
            { name: 'name', message: 'Falta completar el nombre.' },
            { name: 'email', message: 'Falta completar el email.' },
            { name: 'phone', message: 'Falta completar el teléfono.' },
            { name: 'username', message: 'Falta completar el usuario.' },
            { name: 'password', message: 'Falta completar la contraseña.' },
            { name: 'confirmPassword', message: 'Falta completar el campo de confirmar contraseña.' },
        ]

        for (const field of requiredFields) {
            if (!body[field.name]) {
                return NextResponse.json({ message: field.message })
            }
        }

        const nameValidationMessage = validateName(name);
        if (nameValidationMessage) {
            return NextResponse.json({ message: nameValidationMessage });
        }

        // Ensure the entered email is in a valid email format
        const emailValidationMessage = validateEmail(email);
        if (emailValidationMessage) {
            return NextResponse.json({ message: emailValidationMessage })
        }

        const phoneValidationMessage = validatePhone(phone);
        if (phoneValidationMessage) {
            return NextResponse.json({ message: phoneValidationMessage })
        }

        const usernameValidationMessage = validateUsername(username);
        if (usernameValidationMessage) {
            return NextResponse.json({ message: usernameValidationMessage })
        }

        const passwordValidationMessages = validatePassword(password);
        if (passwordValidationMessages.length > 0) {
            return NextResponse.json({ message: passwordValidationMessages })
        }

        const confirmPasswordValidationMessages = validateConfirmPassword(password, confirmPassword);
        if (confirmPasswordValidationMessages.length > 0) {
            return NextResponse.json({ messages: confirmPasswordValidationMessages });
        }

        // Hash the password before storing it.
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user in the database
        const createdUser = await prisma.user.create({
            data: {
                name,
                email,
                phone,
                username,
                password: hashedPassword,
                role
            }
        })

        console.log("Usuario registrado:", createdUser);

        return NextResponse.json({ message: "Usuario registrado exitosamente" })

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
            return NextResponse.json({ message: "El correo electrónico ya está en uso. Por favor, utiliza otro correo electrónico." });
        }

        console.error("Error:", error);
        return NextResponse.json({ message: "Error al registrar el usuario" });
    }
}