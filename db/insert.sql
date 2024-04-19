--Status
insert into public.status(name) values('Order Received');
insert into public.status(name) values('Preparing Food');
insert into public.status(name) values('On the way');
insert into public.status(name) values('Delivered');
insert into public.status(name) values('Order Delayed');
insert into public.status(name) values('Refund Initiated');

--Payment_Type
insert into public.payment_type(name) values('Credit Card');
insert into public.payment_type(name) values('Debit Card');
insert into public.payment_type(name) values('Meal Coupon');
insert into public.payment_type(name) values('Netbanking');
insert into public.payment_type(name) values('UPI');
insert into public.payment_type(name) values('PayTM');
insert into public.payment_type(name) values('Cash on Delivery');



USer

INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(0, 'lion', '$2a$10$k8cRStNId1ShuAC0va1xXePgEkk10FH7zUN0NHISXxSnz7MokPzwy', 'anand.blr2000@gmail.com', 'Delhi', '9483842045', NULL, '2021-09-21', 0, '2021-09-21', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(1, 'Ananda', '$2a$10$1uG8mU3aVuj9AwTUivK.m.Q3mybuUe/etcG9kTE0k.PsXmZ026ei.', 'anand.blr2000@gmai.com', 'Delhi', '9483842045', NULL, '2021-09-24', 0, '2021-09-24', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(50, 'Chitra ', '$2a$10$rNZa5iNRFmbEvjcKqnZriezjdDOyuDv6JrxHIkIn5lE4WTQibEr2q', 'chitra@gmail.com', 'Bangalore', '9482902869', NULL, '2021-09-27', 0, '2021-09-27', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(10, 'Anand', '$2a$10$oAcmo8ku3zWkpOqyhueb8urph4tz.5u6AilVVjcD8pCX.KHDCGbKK', 'anand@gmail.com', 'Bangalore', '6265952', true, '2021-09-08', 1, '2021-09-08', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(51, 'dheeraj', '$2a$10$DvbGpdjSTMk9m/xhDbchyO2aeeXOufHVAYE90f3sgsGT/3tKvwdvG', 'dheeraj@gmail.com', 'Bangalore', '9481219807', NULL, '2022-08-30', 0, '2022-08-30', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(52, 'Balaji', '$2a$10$//vtzJpPYL10P.XGNM3iv.fkk7RDHKLh58iOZVuv2W5gf.jLz1u6a', 'balaji_kumarp@gmail.com', 'Chennai', '9481219869', NULL, '2023-03-29', 0, '2023-03-29', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(53, 'fgggfg', '$2a$10$bmveLwy1z/x0kBNchux3CeiOisl0QWUYdQ09iZYn1TLTB9zVS9XbC', 'balaji_kumarp', 'Chennai', '9481219869', NULL, '2023-03-29', 0, '2023-03-29', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(54, 'Speed', '$2a$10$UvAkzWPpmayye5MnaOCIkeLbOJZ43cMBlSJUpDpmN6ICo7TuS/4Au', 'speed@gmail.com', 'Bangalore', '7777777777', NULL, '2024-04-12', 0, '2024-04-12', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(55, '', '$2a$10$9sJ8OATiE6lGhz4GPN2fvOpmHxFgFEDr1mXNKrQ70z0ChaK.pZu22', '', 'Bangalore', '', NULL, '2024-04-12', 0, '2024-04-12', '0');
INSERT INTO "user" (id, username, "password", email, "location", phone_num, is_owner, created_date, created_by, updated_date, updated_by) VALUES(56, 'sewy', '$2a$10$WciZt7bcktowDrXIUn/i9erhIRMk/IPWGwmvXiPD06PPRxzE6C43e', 'sewy', 'Bangalore', '77777', NULL, '2024-04-12', 0, '2024-04-12', '0');








