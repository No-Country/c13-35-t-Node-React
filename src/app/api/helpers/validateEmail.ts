function validateEmail(email: string): string | null {

    const validEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!validEmailPattern.test(email)) {
        return "El email es incorrecto. Por favor, reingréselo siguiendo el formato mail@proveedor.com";
    }

    return null
}

export default validateEmail
