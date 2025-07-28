<div align="center">
  <h1>Lot Management SPA</h1>
  <p>Простой SPA-подобный интерфейс для управления списком лотов на базе Laravel 12, Blade, Axios и Tailwind CSS.</p>
</div>

## Функциональность

<ul>
  <li>Просмотр списка лотов (ID, название, цена, статус)</li>
  <li>Создание нового лота</li>
  <li>Редактирование существующего лота</li>
  <li>Удаление лота</li>
  <li>Модальное окно для формы <code>create</code>/<code>edit</code></li>
  <li>Адаптивная вёрстка с Tailwind CSS</li>
  <li>Асинхронные CRUD-запросы через Axios без перезагрузки страницы</li>
</ul>

## Стек технологий

<ul>
  <li><strong>Backend:</strong> Laravel 12, PHP 8.2</li>
  <li><strong>Frontend:</strong> Blade-шаблоны, JavaScript (ES6+), Axios, Vite</li>
  <li><strong>Стилизация:</strong> Tailwind CSS</li>
  <li><strong>База данных:</strong> MySQL или SQLite</li>
</ul>

## Требования

<ul>
  <li>PHP ≥ 8.1</li>
  <li>Composer</li>
  <li>Node.js ≥ 14 и NPM или Yarn</li>
  <li>MySQL (или SQLite для простого старта)</li>
</ul>

## Установка и запуск

```bash
# 1. Клонирование репозитория
git clone https://github.com/xeceo52/Lotmanagement.git
cd Lotmanagement

# 2. Установка PHP-зависимостей
composer install

# 3. Установка JS-зависимостей
npm install
npm run dev          # Режим разработки
# ИЛИ для продакшена:
npm run build

# 4. Настройка окружения
cp .env.example .env
php artisan key:generate

# 5. Настройка БД (MySQL пример)
echo "DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lotmanagement
DB_USERNAME=root
DB_PASSWORD=" >> .env

# 6. Миграции и сиды
php artisan migrate --seed

# 7. Запуск сервера
php artisan serve
# Приложение доступно на http://127.0.0.1:8000
