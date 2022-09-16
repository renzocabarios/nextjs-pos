# simple-pos


# ERD

![image](https://user-images.githubusercontent.com/72588010/190648351-61fe984a-493b-4337-bc19-72b5d88029fc.png)


# API

## GET ITEMS 
- PATH: `/item`
- METHOD: GET

### REQUEST
##### HEADER
`N/A`

##### BODY
`N/A`

### RESPONSE

```
{
  "status": "success",
  "message": "fetch item success",
  "data": [
    {
      "_id": "63248f440cefb4bf175d5ffc",
      "name": "asd",
      "basePrice": 12.3,
      "deleted": false,
      "__v": 0
    },
    {
      "_id": "6324cc95b6958cd019e7f287",
      "name": "asd",
      "basePrice": 12.3,
      "deleted": false,
      "createdAt": "2022-09-16T19:20:53.691Z",
      "updatedAt": "2022-09-16T19:20:53.691Z",
      "__v": 0
    },
  ]
}
```

## CREATE ITEMS
- PATH: `/item`
- METHOD: POST

### REQUEST
##### HEADER
`N/A`

##### BODY
```
{
  "name": "asd",
  "basePrice": 12.30
}
```

### RESPONSE

```
{
  "status": "success",
  "message": "create item success",
  "data": [
    {
      "name": "asd",
      "basePrice": 12.3,
      "deleted": false,
      "_id": "6324d30f292b6f5973f8adf0",
      "createdAt": "2022-09-16T19:48:31.145Z",
      "updatedAt": "2022-09-16T19:48:31.145Z",
      "__v": 0
    }
  ]
}
```

## GET ITEM BY ID
- PATH: `/item/:id`
- METHOD: GET

### REQUEST
##### HEADER
`N/A`

##### BODY
`N/A`

### RESPONSE

```
{
  "status": "success",
  "message": "fetch item success",
  "data": [
    {
      "_id": "63248f440cefb4bf175d5ffc",
      "name": "asd",
      "basePrice": 12.3,
      "deleted": false,
      "__v": 0
    }
  ]
}
```


## UPDATE ITEM
- PATH: `/item/:id`
- METHOD: PATCH

### REQUEST
##### HEADER
`N/A`

##### BODY
```
{
  "name": "asd",
  "basePrice": 12.30
}
```

### RESPONSE

```
{
  "status": "success",
  "message": "fetch item success",
  "data": [
    {
      "_id": "63248f440cefb4bf175d5ffc",
      "name": "asd",
      "basePrice": 12.3,
      "deleted": false,
      "__v": 0
    }
  ]
}
```

## DELETE ITEM
- PATH: `/item/:id`
- METHOD: PATCH

### REQUEST
##### HEADER
`N/A`

##### BODY
`N/A`

### RESPONSE

```
{
  "status": "success",
  "message": "delete item success",
  "data": [
    {
      "_id": "63248f440cefb4bf175d5ffc",
      "name": "asd",
      "basePrice": 12.3,
      "deleted": true,
      "__v": 0,
      "updatedAt": "2022-09-16T19:51:40.686Z"
    }
  ]
}
```