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
(UUID(), 'Figma', (SELECT id FROM services WHERE service_name = 'Design UX/UI')),
(UUID(), 'Angular', (SELECT id FROM services WHERE service_name = 'Frontend Development')),
(UUID(), 'Python Flask', (SELECT id FROM services WHERE service_name = 'Backend Development')),
(UUID(), 'Vue.js', (SELECT id FROM services WHERE service_name = 'Frontend Development')),
(UUID(), 'Python', (SELECT id FROM services WHERE service_name = 'Backend Development')),
(UUID(), 'Django', (SELECT id FROM services WHERE service_name = 'Backend Development')),
(UUID(), 'Node.js', (SELECT id FROM services WHERE service_name = 'Backend Development')),
(UUID(), 'PyTorch', (SELECT id FROM services WHERE service_name = 'Data Science'));


create table metacoders_ads (
	id varchar(40) primary key,
    client_firstname varchar(50),
    client_lastname varchar(50),
    client_img varchar(300),
    contact_num varchar(15),
    contact_mail varchar(150),
    location varchar(150),
    client_description varchar(300),
    is_active boolean default true
    );

INSERT INTO metacoders_ads (
    id,
    client_firstname,
    client_lastname,
    client_img,
    contact_num,
    contact_mail,
    location,
    client_description
) VALUES 
    (UUID(), 'Jander', 'Perez', 'https://randomuser.me/api/portraits/men/10.jpg', '1234567890', 'jander@example.com', 'Madrid', 'Web developer with expertise in frontend technologies.'),
    (UUID(), 'Steven', 'Smith', 'https://randomuser.me/api/portraits/men/14.jpg', '0987654321', 'steven@example.com', 'Barcelona', 'Experienced full-stack developer with a focus on backend systems.'),
    (UUID(), 'Jonathan', 'Johnson', 'https://randomuser.me/api/portraits/men/4.jpg', '9876543210', 'jonathan@example.com', 'Asturias', 'Passionate software engineer with a strong background in cloud computing.'),
    (UUID(), 'Emma', 'Taylor', 'https://randomuser.me/api/portraits/women/1.jpg', '1122334455', 'emma@example.com', 'Valencia', 'Frontend developer passionate about user experience.'),
    (UUID(), 'Daniel', 'Brown', 'https://randomuser.me/api/portraits/men/2.jpg', '5544332211', 'daniel@example.com', 'Seville', 'Experienced full-stack developer with expertise in Node.js and React.'),
    (UUID(), 'Sophie', 'Miller', 'https://randomuser.me/api/portraits/women/3.jpg', '9988776655', 'sophie@example.com', 'Malaga', 'Software engineer specializing in cloud architecture and microservices.'),
    (UUID(), 'Isabella', 'Anderson', 'https://randomuser.me/api/portraits/women/4.jpg', '1231231234', 'isabella@example.com', 'Granada', 'Passionate backend developer with a focus on data management.'),
    (UUID(), 'William', 'White', 'https://randomuser.me/api/portraits/men/5.jpg', '4564564567', 'william@example.com', 'Bilbao', 'Full-stack developer with expertise in Python and Django.'),
    (UUID(), 'Olivia', 'Moore', 'https://randomuser.me/api/portraits/women/6.jpg', '7897897890', 'olivia@example.com', 'Zaragoza', 'DevOps engineer specializing in automation and deployment.');

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
((SELECT id FROM stacks WHERE stack_name = 'Java'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jonathan')),
((SELECT id FROM stacks WHERE stack_name = 'Angular'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Emma')),
((SELECT id FROM stacks WHERE stack_name = 'Python Flask'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Daniel')),
((SELECT id FROM stacks WHERE stack_name = 'Vue.js'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Sophie')),
((SELECT id FROM stacks WHERE stack_name = 'Angular'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Isabella')),
((SELECT id FROM stacks WHERE stack_name = 'Node.js'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'William')),
((SELECT id FROM stacks WHERE stack_name = 'PyTorch'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Olivia'));

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
    rating int,
    user_id varchar(40),
    metacoder_id varchar(40),
    foreign key (user_id) references users(id),
    foreign key (metacoder_id) references metacoders_ads(id)
);


INSERT INTO comments (id, `description`, rating, user_id, metacoder_id) VALUES 
(UUID(), 'Great service!', 5, (SELECT id FROM users WHERE user_email = 'user1@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jander')),
(UUID(), 'Could be better.', 3, (SELECT id FROM users WHERE user_email = 'user2@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Steven')),
(UUID(), 'Very professional.', 4, (SELECT id FROM users WHERE user_email = 'user3@example.com'), (SELECT id FROM metacoders_ads WHERE client_firstname = 'Jonathan'));