create table
user_profiles (
id bigint primary key generated always as identity,
user_id uuid,
first_name varchar(255) not null
);