function validatePassword(password: string): string[] {
    const errors: string[] = [];

    if (password.length < 6 || password.length > 10) {
        errors.push("La contraseña debe tener entre 6 y 10 caracteres.")
    }

    const rules = [
        { pattern: /[A-Z]/, message: "La contraseña debe contener al menos una mayúscula" },
        { pattern: /[a-z]/, message: "La contraseña debe contener al menos una minúscula" },
        { pattern: /[0-9]/, message: "La contraseña debe contener al menos un número" },
        { pattern: /[!#\$%&\(\)\*\+\-\/\?@\[\]\\\^_{|}]/, message: "La contraseña debe contener al menos un caracter especial." }
    ]

    for (const rule of rules) {
        if (!rule.pattern.test(password)) {
            errors.push(rule.message)
        }
    }

    return errors
}

export default validatePassword
