function validateName(name: string): string | null {
    const validCharacters = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s-]+$/;
    if (!validCharacters.test(name)) {
        return "El nombre solo puede contener letras, acentos, diéresis y guiones.";
    }

    if (name.length < 3) {
        return "El nombre debe tener al menos 3 caracteres.";
    }

    if (name.length > 30) {
        return "El nombre no puede tener más de 30 caracteres."
    }

    return null
}

export default validateName;