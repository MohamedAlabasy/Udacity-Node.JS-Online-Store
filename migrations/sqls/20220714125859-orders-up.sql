/* Replace with your SQL commands */
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status enum('active' or 'complete'),
    quantity integer 
);