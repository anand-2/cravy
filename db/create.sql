create table public.user
(
    id serial primary key,
    username  varchar(200) unique not null,
    password varchar(20) not null, 
    email   varchar(200) unique not null,
    location varchar(200) ,
    phone_num int ,
    is_owner boolean,
    created_date date default now() not null,
    created_by bigint references public.user(id),
    updated_date date ,
    updated_by varchar(100)
);

create table public.restaurant
(
    id serial primary key,
    name varchar(200) not null,
    description varchar(200) not null, 
    address   varchar(200) not null,
    location varchar(200) not null,
    image text not null,
    rating int,
    owner_id int not null,
    created_date date default now() not null,
    created_by bigint references public.user(id) not null,
    updated_date date ,
    updated_by varchar(100)
);

create table public.dish
(
    id serial primary key,
    restaurant_id bigint references restaurant(id),
    name varchar(200) not null,
    description varchar(200) not null, 
    image text not null,
    veg boolean not null,
    rating int,
    price float,
    owner_id int not null,
    created_date date default now() not null,
    created_by bigint references public.user(id) not null,
    updated_date date ,
    updated_by varchar(100)
);

create table public.payment_type
(
    id serial primary key,
    name varchar(100) unique not null
);

create table public.status
(
    id serial primary key,
    name varchar(100)unique  not null
);

create table public.order
(
    id serial primary key,
    payment_method_id bigint references payment_type(id),
    status_id bigint references status(id),
    created_date date default now() not null,
    created_by bigint references public.user(id) not null
);

create table public.tag
(
    id serial primary key,
    name varchar(100) unique not null 
);

create table public.dish_tag
(
    tag_id bigint references tag(id),
    dish_id bigint references dish(id)
); 