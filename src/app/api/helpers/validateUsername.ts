function validateUsername(username: string): string | null {
    if (username.length < 3) {
        return "El usuario debe tener al menos 3 caracteres."
    }

    if (username.length > 20) {
        return "El ususario no puede tener más de 20 caracteres."
    }

    const validUsernamePattern = /^[A-Za-z0-9\sáéíóúüñÁÉÍÓÚÜÑ\-]+$/;

    if (!validUsernamePattern.test(username)) {
        return "El ususario es incorrecto. Por favor, ingréselo de nuevo."
    }

    return null
}

export default validateUsername
