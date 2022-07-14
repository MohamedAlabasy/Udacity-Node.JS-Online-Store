/* Replace with your SQL commands */
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) UNIQUE NOT NULL,
    price integer NOT NULL,
    category_id bigint REFERENCES categories(id) NOT NULL
);