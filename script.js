
function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;

    if (strength === 0) {
        result.textContent = "Введите пароль.";
        result.style.color = "gray";
    } else if (strength <= 2) {
        result.textContent = "Слабый пароль";
        result.style.color = "red";
    } else if (strength === 3) {
        result.textContent = "Средний пароль";
        result.style.color = "orange";
    } else {
        result.textContent = "Надёжный пароль";
        result.style.color = "green";
    }
}
