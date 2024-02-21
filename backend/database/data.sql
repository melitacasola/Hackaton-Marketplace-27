create database db_metacoders;
use db_metacoders;


create table services(
	id varchar(40) primary key,
    service_name varchar(50) not null
);

INSERT INTO services (id, service_name) VALUES
(UUID(), 'Full Stack Development'),
(UUID(), 'Backend Development'),
(UUID(), 'Frontend Development'),
(UUID(), 'Data Science'),
(UUID(), 'Design UX/UI');


create table stacks(
	id  varchar(40) primary key,
    stack_name varchar(50) not null,
    service_id varchar(40), 
    foreign key (service_id) references services(id)
    
);

INSERT INTO stacks (id, stack_name, service_id) VALUES 
(UUID(), 'MERN Stack', (SELECT id FROM services WHERE service_name = 'Full Stack Development')),
(UUID(), 'Java', (SELECT id FROM services WHERE service_name = 'Backend Development')),
(UUID(), 'React Native', (SELECT id FROM services WHERE service_name = 'Frontend Development')),
(UUID(), 'TensorFlow', (SELECT id FROM services WHERE service_name = 'Data Science')),
(UUID(), 'Figma', (SELECT id FROM services WHERE service_name = 'Design UX/UI'));


create table metacoders_ads (
	id varchar(40) primary key,
    client_firstname varchar(50),
    client_lastname varchar(50),
    contact_num varchar(15),
    contact_mail varchar(150),
    location varchar(150),
    is_active boolean default true
    );


INSERT INTO metacoders_ads (id, client_firstname, client_lastname, contact_num, contact_mail, location) VALUES 
(UUID(), 'Jander', 'Perez', '1234567890', 'jander@example.com', 'Madrid'),
(UUID(), 'Steven', 'Smith', '0987654321', 'steven@example.com', 'Barcelona'),
(UUID(), 'Jonathan', 'Johnson', '9876543210', 'jonathan@example.com', 'Asturias');

create table metacoders_stacks (
	stack_id varchar(40), 
    metacoder_id varchar(40),
    primary key (stack_id, metacoder_id),
    foreign key (stack_id) references stacks(id),
    foreign key (metacoder_id) references metacoders_ads(id)
); 

INSERT INTO metacoders_stacks (stack_id, metacoder_id) VALUES 
((SELECT id FROM stacks WHERE stack_name = 'MERN Stack'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jander')),
((SELECT id FROM stacks WHERE stack_name = 'React Native'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Steven')),
((SELECT id FROM stacks WHERE stack_name = 'Java'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jonathan'));

create table users(
	id varchar(40) primary key,
    user_email varchar(150) unique,
    user_password varchar(150)
);

INSERT INTO users (id, user_email, user_password) VALUES 
(UUID(), 'user1@example.com', 'password123'),
(UUID(), 'user2@example.com', 'password456'),
(UUID(), 'user3@example.com', 'password789');

create table comments(
	id varchar(40) primary key,
    `description` varchar(255),
    rating int(5),
    user_id varchar(40),
    metacoder_id varchar(40),
    foreign key (user_id) references users(id),
    foreign key (metacoder_id) references metacoders_ads(id)
);


INSERT INTO comments (id, `description`, rating, user_id, metacoder_id) VALUES 
(UUID(), 'Great service!', 5, (SELECT id FROM users WHERE user_email = 'user1@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jander')),
(UUID(), 'Could be better.', 3, (SELECT id FROM users WHERE user_email = 'user2@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Steven')),
(UUID(), 'Very professional.', 4, (SELECT id FROM users WHERE user_email = 'user3@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jonathan'));

