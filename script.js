        document.getElementById("user-form").addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const age = document.getElementById("age").value;
            const gender = document.getElementById("gender").value;
            const message = document.getElementById("message").value.trim();
            const errorMessage = document.getElementById("error-message");

            let isValid = true;

            // Проверка имени (не менее 2 символов)
            if (name.length < 2) {
                isValid = false;
            }

            // Проверка Email с помощью регулярного выражения
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailPattern.test(email)) {
                isValid = false;
            }

            // Проверка возраста (диапазон от 1 до 100)
            if (age < 1 || age > 100) {
                isValid = false;
            }

            // Проверка выбора пола
            if (gender === "") {
                isValid = false;
            }

            // Проверка сообщения (не более 500 символов)
            if (message.length > 500) {
                isValid = false;
            }

            // Если форма не прошла валидацию, отменяем отправку и показываем сообщение об ошибке
            if (!isValid) {
                event.preventDefault();
                errorMessage.style.display = "block";
            } else {
                errorMessage.style.display = "none";
            }
        });