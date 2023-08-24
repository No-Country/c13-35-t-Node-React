import bcrypt from "bcryptjs"
import prisma from "@/app/libs/connectMySQL";
import { Prisma } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {

        const body = await request.json()
        const { email, password, confirmPassword, name, role } = body

        // Verify that all required fields are not empty.
        if (!email || !password || !confirmPassword || !name || !role) {
            return NextResponse.json({ message: "Por favor, proporciona todos los campos requeridos." });
        }
        // Ensure the entered email is in a valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            return NextResponse.json({ message: "Por favor, proporciona un correo electrónico válido." });
        }
        // Confirm that the password and password confirmation match.
        if (password !== confirmPassword) {
            return NextResponse.json({ message: "La contraseña y la confirmación de contraseña no coinciden." })
        }
        // Hash the password before storing it.
        const hashedPassword = await bcrypt.hash(password, 10);
        // Validate that the name contains only alphabetical characters.
        const namePattern = /^[A-Za-z\s]+$/;
        if (!namePattern.test(name)) {
            return NextResponse.json({ message: "Por favor, proporciona un nombre válido." })
        }
        // Create the user in the database
        const createdUser = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
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