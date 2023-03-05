INSERT INTO users (first_name, last_name, email, password, role) VALUES ('Joe', 'Dan', 'joe-dan@fmail.com', 'abcd5', 'Mentor');
INSERT INTO users (first_name, last_name, email, password, role) VALUES ('Shun', 'Lili', 'shun@fmail.com', 'shun6', 'Student');
INSERT INTO users (first_name, last_name, email, password, role) VALUES ('Pat', 'Van', 'pat-van@fmail.com', '123_ab', 'Teacher');
INSERT INTO users (first_name, last_name, email, password, role) VALUES ('Cat', 'Bili', 'cat-bili@fmail.com', 'dcba_i', 'Student');
INSERT INTO users (first_name, last_name, email, password, role) VALUES ('Mann', 'Kite', 'kite@fmail.com', 'xyz_12', 'Teacher');


INSERT INTO categories (category_name) VALUES ('JavaScript');
INSERT INTO categories (category_name) VALUES ('NodeJS');
INSERT INTO categories (category_name) VALUES ('SQL');

INSERT INTO quiz (created_by, description, category) VALUES (1, 'This will test your knowledge of JavaScript', 1);
INSERT INTO quiz (created_by, description, category) VALUES (2, 'This will test your knowledge of NodeJS', 2);
INSERT INTO quiz (created_by, description, category) VALUES (3, 'This will test your knowledge of JavaScript', 1);
INSERT INTO quiz (created_by, description, category) VALUES (4, 'This will test your knowledge of SQL', 3);


INSERT INTO questions (quiz_id, question_text, answer, option_1, option_2, option_3) VALUES (3, 'JavaScript is a ___ -side programming language.', 'client & server', 'client', 'server', 'None');
INSERT INTO questions (quiz_id, question_text, answer, option_1, option_2, option_3) VALUES (3, 'Which of the following will write the message "Hello DataFlair!" in an alert box?', 'alert("Hello DataFlair!");', 'alertBox("Hello DataFlair!");', 'alert(Hello DataFlair!);', 'msgAlert("Hello DataFlair!");');
INSERT INTO questions (quiz_id, question_text, answer, option_1, option_2, option_3) VALUES (3, 'How do you find the minimum of x and y using JavaScript?', 'Math.min(x,y);', 'min(x,y);', 'Math.min(xy);', 'min(xy);');
INSERT INTO questions (quiz_id, question_text, answer, option_1, option_2, option_3) VALUES (3, 'Which JavaScript label catches all the values, except for the ones specified?', 'default', 'catch', 'try', 'label');
INSERT INTO questions (quiz_id, question_text, answer, option_1, option_2, option_3) VALUES (3, 'Which are the correct "if" statements to execute certain code if "x" is equal to 2?', 'if(x == 2)', 'if(x 2)', 'if(x = 2)', 'if(x != 2 )');


