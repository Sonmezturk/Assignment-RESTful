**Assignment-RESTful**

*for install all dependencies*
```
npm i
```

*for running*
```
nodemon bin/www
npm run dev
```

*for testing*
```
npm run test
```
_You can find `Insomnia_api_info.js` on main directory in order that you can import to `insomnia` which is REST client APP_

*API information*
```
Method: POST
URL: localhost:3100/records
PAYLOAD:{
          "startDate": "2016-01-26",
          "endDate": "2016-12-02",
          "minCount": 2700,
          "maxCount": 3000
        }
----------------------------
Method: GET
URL: localhost:3100/records
```
