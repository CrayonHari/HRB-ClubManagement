Clone the repository:
git clone https://github.com/CrayonHari/HRB-ClubManagement.git

cd HRB-ClubManagement

Install Laravel Herd and Link existing project ("backend" name of the project)

Edit the .env file:

Set the database details:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password

Generate the application key:
php artisan key:generate

Run database migrations:

php artisan migrate

Finally:
Go to frontend
np serve (will start the project)