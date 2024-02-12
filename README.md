DOCUMENTATION

1) Registering or creating a user

POST- http://localhost:3000/api/v1/users/register

paramters:
eg :
{
    "username":"wer23",
    "email":"wer23@gmail.com",
    "password":"wer23"

}

Response:
eg:
{
    "statusCode": 200,
    "data": {
        "_id": "65c8ba568443017c3dc1ad01",
        "username": "wer23",
        "email": "wer23@gmail.com",
        "createdAt": "2024-02-11T12:15:18.801Z",
        "updatedAt": "2024-02-11T12:15:18.801Z",
        "__v": 0
    },
    "message": "User added sucessfully",
    "success": true
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
2) Logging in

POST- http://localhost:3000/api/v1/users/login

parameters: Any one of email or username, and password
eg: 
{
    "username":"wer23",
    "email":"wer23@gmail.com",
    "password":"wer23"

}


Response:
eg:
{
    "statusCode": 200,
    "data": {
        "user": {
            "_id": "65c8ba568443017c3dc1ad01",
            "username": "wer23",
            "email": "wer23@gmail.com",
            "createdAt": "2024-02-11T12:15:18.801Z",
            "updatedAt": "2024-02-11T12:24:16.264Z",
            "__v": 0
        },
        "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YmE1Njg0NDMwMTdjM2RjMWFkMDEiLCJlbWFpbCI6IndlcjIzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoid2VyMjMiLCJpYXQiOjE3MDc2NTQyNTYsImV4cCI6MTcxNjI5NDI1Nn0.wjJRxij7DpJzF_-1LsNPxv38X8j8DD9eMfsikHzCvZQ",
        "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWM4YmE1Njg0NDMwMTdjM2RjMWFkMDEiLCJpYXQiOjE3MDc2NTQyNTYsImV4cCI6MTc5NDA1NDI1Nn0.TK4IRyAZO7mVDSuY072ecczCDwg_aS1L7SAcku5Hg9U"
    },
    "message": "Logged in successfully",
    "success": true
}
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
3) Getting items

GET- http://localhost:3000/api/v1/items

Authentication: JWT access token


Paremters:
a) NA
b) {
    "tags":["tag1","tag2","tag3"]
}
c){
    "category":"Bundles"
}

Response:
When no parameter is passed, all items are returned

{
    "statusCode": 200,
    "data": [
        {
            "_id": "65c880763800ee736b21c33b",
            "SKU": "ETSY-FOREST",
            "name": "Etsy Bundle Pack",
            "category": "65c87d95cd5bd0645c9657b6",
            "tags": [
                "tag4",
                "tag2",
                "tag3"
            ],
            "inStock": 0,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33c",
            "SKU": "NY-ETSY",
            "name": "NY Print Single Beeswax wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag4",
                "tag2",
                "tag3"
            ],
            "inStock": 0,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33d",
            "SKU": "BWAX",
            "name": "Beeswax",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 599,
            "availableStock": 499,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33e",
            "SKU": "OCNCOT",
            "name": "Cotton -Ocean Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 88,
            "availableStock": 88,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33f",
            "SKU": "JNGLCOT",
            "name": "Cotton-Jungle Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 18,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c340",
            "SKU": "HNYCOT",
            "name": "Cotton-Honeycomb Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 272,
            "availableStock": 212,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c341",
            "SKU": "OCN-S",
            "name": "Ocean single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 185,
            "availableStock": 60,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c342",
            "SKU": "JNGL-S",
            "name": "Jungle Print Single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 239,
            "availableStock": 119,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c343",
            "SKU": "HNY-S",
            "name": "HoneyComb Single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 186,
            "availableStock": 59,
            "__v": 0
        },
        {
            "_id": "65c8ed1829a73fb04db59fc4",
            "SKU": "BWAX2",
            "name": "beeswax2",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 599,
            "availableStock": 499,
            "__v": 0
        }
    ],
    "message": "All items fetched successfully",
    "success": true
}

b) When category is passed as an parameter

{
    "statusCode": 200,
    "data": [
        {
            "_id": "65c880763800ee736b21c33b",
            "SKU": "ETSY-FOREST",
            "name": "Etsy Bundle Pack",
            "category": "65c87d95cd5bd0645c9657b6",
            "tags": [
                "tag4",
                "tag2",
                "tag3"
            ],
            "inStock": 0,
            "availableStock": 0,
            "__v": 0
        }
    ],
    "message": "All items fetched successfully",
    "success": true
}

c) When tags are passed as an parameter

{
    "statusCode": 200,
    "data": [
        {
            "_id": "65c880763800ee736b21c33b",
            "SKU": "ETSY-FOREST",
            "name": "Etsy Bundle Pack",
            "category": "65c87d95cd5bd0645c9657b6",
            "tags": [
                "tag4",
                "tag2",
                "tag3"
            ],
            "inStock": 0,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33c",
            "SKU": "NY-ETSY",
            "name": "NY Print Single Beeswax wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag4",
                "tag2",
                "tag3"
            ],
            "inStock": 0,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33d",
            "SKU": "BWAX",
            "name": "Beeswax",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 599,
            "availableStock": 499,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33e",
            "SKU": "OCNCOT",
            "name": "Cotton -Ocean Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 88,
            "availableStock": 88,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c33f",
            "SKU": "JNGLCOT",
            "name": "Cotton-Jungle Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 18,
            "availableStock": 0,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c340",
            "SKU": "HNYCOT",
            "name": "Cotton-Honeycomb Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 272,
            "availableStock": 212,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c341",
            "SKU": "OCN-S",
            "name": "Ocean single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 185,
            "availableStock": 60,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c342",
            "SKU": "JNGL-S",
            "name": "Jungle Print Single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 239,
            "availableStock": 119,
            "__v": 0
        },
        {
            "_id": "65c880763800ee736b21c343",
            "SKU": "HNY-S",
            "name": "HoneyComb Single Beeswax Wrap",
            "category": "65c87d95cd5bd0645c9657b4",
            "tags": [
                "tag1",
                "tag2",
                "tag3",
                "tag4",
                "tag5",
                "tag6"
            ],
            "inStock": 186,
            "availableStock": 59,
            "__v": 0
        },
        {
            "_id": "65c8ed1829a73fb04db59fc4",
            "SKU": "BWAX2",
            "name": "beeswax2",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 599,
            "availableStock": 499,
            "__v": 0
        }
    ],
    "message": "All items fetched successfully",
    "success": true
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

4)Searching an item

Authentication: jwt access token

Parameters: Query parameter
eg : http://localhost:3000/api/v1/items/search-item?q=searchQuery

Request:
Eg
http://localhost:3000/api/v1/items/search-item?q=ocncot



Response:
eg: 
{
    "statusCode": 200,
    "data": [
        {
            "_id": "65c880763800ee736b21c33e",
            "SKU": "OCNCOT",
            "name": "Cotton -Ocean Print",
            "category": "65c87d95cd5bd0645c9657b5",
            "tags": [
                "tag1",
                "tag2",
                "tag4"
            ],
            "inStock": 88,
            "availableStock": 88,
            "__v": 0
        }
    ],
    "message": "Items searched successfully",
    "success": true
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
5) Creating an item

POST- http://localhost:3000/api/v1/items/create-item

paramters: All the details required to create an item

Authentication: JWT access token

eg:
{
    "SKU": "BWAX2",
    "name": "Beeswax2",
    "category": "65c87d95cd5bd0645c9657b5",
    "tags": [
                "tag1",
                "tag2",
                "tag4"
    ],
    "inStock": 599,
    "availableStock": 499
}

Response:
On success
eg:
{
    "statusCode": 200,
    "data": {
        "_id": "65c8ed1829a73fb04db59fc4",
        "SKU": "BWAX2",
        "name": "beeswax2",
        "category": "65c87d95cd5bd0645c9657b5",
        "tags": [
            "tag1",
            "tag2",
            "tag4"
        ],
        "inStock": 599,
        "availableStock": 499,
        "__v": 0
    },
    "message": "Item added sucessfully",
    "success": true
}

on failure
eg:
Error: Item already exists!!
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

6) Creating an category

POST- http://localhost:3000/api/v1/items/create-category

Authentication: JWT access token


Parameters: 
Name of the category
eg:
{
    "name":"Footwear"
}

Response:
On success

{
    "statusCode": 200,
    "data": {
        "_id": "65c8f84a46c30e0ea804399f",
        "name": "footwear",
        "__v": 0
    },
    "message": "Category added sucessfully",
    "success": true
}
on failure
eg:
Error: category already exists!!

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------