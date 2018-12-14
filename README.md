# o2one-task

## Installation
* Clone this repo
* On root directory run `npm` or `yarn` to install dependencies
* Run `npm start` or `yarn start`

## Routes  

### Get All User  
Path: `/`  
Request Type: `GET`  

### Get Single User
Path: `/?id=`  
Request Type: `GET`  

### Post User
Path: `/`  
Request Type: `POST`  
Body: `{`   
  `name: XYZ,`  
	`phone_number: 123456789,`    
  `email: xyz@gmail.com`    
`}`  
### Update User  
Path: `/`  
Request Type: `PATCH`  
Body: `{`  
  `name: XYZ,`    
	`phone_number: 123456789,`  
  `email: xyz@gmail.com,`  
  `_id: User Id`    
`}`  
