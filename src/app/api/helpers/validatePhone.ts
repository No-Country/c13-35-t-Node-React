function validatePhone(phone: string): string | null {
    const validPhonePattern = /^[0-9]+$/;

    if (!validPhonePattern.test(phone)) {
        return "El teléfono solo debe contener números."
    }

    return null
}

export default validatePhone
