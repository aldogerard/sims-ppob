const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateRegistration = (
    email,
    firstName,
    lastName,
    password,
    confirmPassword
) => {
    const errors = {};

    if (!email || email.trim() === '') {
        errors.email = 'email harus diisi';
    } else if (!emailRegex.test(email)) {
        errors.email = 'format email yang anda masukkan salah';
    }

    if (!firstName || firstName.trim() === '') {
        errors.firstName = 'nama depan harus diisi';
    }

    if (!lastName || lastName.trim() === '') {
        errors.lastName = 'nama belakang harus diisi';
    }

    if (!password || password.length === 0) {
        errors.password = 'password harus diisi';
    } else if (password.length < 8) {
        errors.password = 'password minimal 8 karakter';
    }

    if (!confirmPassword || confirmPassword.length === 0) {
        errors.confirmPassword = 'konfirmasi password harus diisi';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'password tidak sama';
    }

    return errors;
};
