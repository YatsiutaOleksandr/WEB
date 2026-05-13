# 🧪 Testing Error Logging

Щоб перевірити логування помилок, виконай наступне:

## 1. Спровокувати помилку на клієнті (Error Boundary)

- Запусти: `npm run dev`
- Перейди на http://localhost:3000
- Знайди кнопку "🔴 Спровокувати помилку" внизу сторінки
- Клікни на неї
- Ти побачиш Error Boundary сторінку
- Помилка буде записана у `logs/error.log`

## 2. Спровокувати помилку в API

Виконай у терміналі:

```bash
# Запустить помилку в API
curl "http://localhost:3000/api/stations?test_error=true"
```

Помилка запишеться у:
- `logs/error.log` - критична помилка
- `logs/combined.log` - лог з деталями

## 3. Перевірити логи

```bash
# Переглянути помилки
cat logs/error.log

# Переглянути всі логи
cat logs/combined.log

# або у PowerShell
Get-Content logs/error.log
Get-Content logs/combined.log
```

## 4. Логи у консолі (Middleware)

У терміналі, де запущений `npm run dev`, ти побачиш JSON логи всіх запитів:

```json
{"level":"info","method":"GET","url":"/api/stations","status":200,"durationMs":5,"timestamp":"..."}
```

## 📝 Очікувані результати

- ✅ `logs/error.log` містить помилки з помилками
- ✅ `logs/combined.log` містить всі логи
- ✅ Консоль middleware показує всі запити
- ✅ Error Boundary сторінка показує помилку користувачу
