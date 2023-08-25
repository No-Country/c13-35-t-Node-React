import validatePassword from "./validatePassword";

function validateConfirmPassword(password: string, confirmPassword: string): string[] {
    const errors: string[] = []

    const passwordValidationMessages = validatePassword(confirmPassword);
    if (passwordValidationMessages.length > 0) {
        errors.push("La contraseña de confirmación no cumple con las reglas.")
    }

    if (password !== confirmPassword) {
        errors.push("La contraseña no coincide. Por favor reingrese la contraseña.")
    }

    return errors;
}

export default validateConfirmPassword
