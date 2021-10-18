BEGIN;

DROP TABLE IF EXISTS qustion, choice, answer CASCADE;

CREATE TABLE qustion (
    id SERIAL PRIMARY KEY,
    qustion VARCHAR(255) NOT NULL,
    typeo VARCHAR(255) NOT NULL,
    requre BOOLEAN,
    signupdate DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE choice (
    id SERIAL PRIMARY KEY,
    qustion_id INTEGER REFERENCES qustion(id),
    choice_value VARCHAR(255),
    start_date DATE NOT NULL DEFAULT CURRENT_DATE
);

CREATE TABLE answer (
    id SERIAL PRIMARY KEY,
    qustion_id INTEGER REFERENCES qustion(id),
    name VARCHAR(255),
    answer_value VARCHAR(255),
    start_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO qustion (qustion, typeo, requre) VALUES
('What language is your favorite?', 'choice', true),
('what do you like about programing?', 'text', false),
('What language is your favorite?', 'choice', true);

INSERT INTO choice (qustion_id, choice_value) VALUES
(1, 'JavaScript'),
(1, 'TypeScript'),
(1, 'CoffeeScript'),
(3, 'Easy'),
(3, 'Normal'),
(3, 'Hard');

COMMIT;