let users = [];
users.push(new User(
    "admin", 
    "admin123", 
    "admin@test.com",
    "Auntie Clarie"
));

users.push(new User(
    "user1", 
    "secret", 
    "user1@test.com",
    "Mohammad Subkee"
));

users.push(new User(
    "user2", 
    "secret", 
    "user2@test.com",
    "Zaim Sayeed"
));

users.push(new User(
    "user3", 
    "secret", 
    "user3@test.com",
    "Siti Asiah"
));
////////////////////////////////////////////////////////////

let dishes = [];
dishes.push(new Dish(
    "Nasi Ayam Kunyit", 
    "RICE, chicken, cili, vegetables", 
    "RM 8.00",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Nasi Goreng Paprik", 
    "RICE, chicken, cili, vegetables, sauce", 
    "RM 9.30",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Nasi Goreng Pattaya", 
    "RICE, chicken, egg, vegetables", 
    "RM 5.80",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Nasi Goreng Cendawan", 
    "RICE, chicken, mushroom", 
    "RM 10.20",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Nasi Goreng USA", 
    "RICE, meat, sauce, vegetables", 
    "RM 12.50",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Nasi Goreng Cina", 
    "RICE, chicken, vegetables, egg", 
    "RM 8.50",
    "/images/cina.jpg"
));

dishes.push(new Dish(
    "Mi Goreng", 
    "NOODLES, chicken, vegetables", 
    "RM 8.50",
    "/images/cina.jpg"
));
/////////////////////////////////////////////
let history = new History();

//alert(users[2].email + "\n");