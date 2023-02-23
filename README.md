
# Marvel - Front

A react front end app for displaying Marvel characters

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to 
find what they need.

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

### Built With

* [![NPM][NPM]][NPM-url]
* [![React][React.js]][React-url]
* [![MUI][MUI]][MUI-url]

## Getting Started

### Prerequisites

1. Open the .env file
2. Enter your Back-end uri and endpoint. 
```bash
# Example config
REACT_APP_MARVEL_BACK_API_URL = 'http://localhost:3000/'
REACT_APP_MARVEL_BACK_API_ENDPOINT = 'api/v1/'

```

### Installation
Installation :
```bash
npm install
```

Start server :
```bash
npm start
```

### Usage
1. Use curl or postman in order to send the following request and create a user.
```bash
curl --location 'http://localhost:3000/api/v1/user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email":"aaa.bbb@gmail.com",
    "password":"123456789",
    "name":"YourName"
}'
```
2. Connect to 'http://localhost:30001/login' in order to create a JWT token

## Roadmap

- [ ] Configuration of application
    - [X] Implementing dotenv
    - [ ] Adding multiple env files or using CI/CD to inject conf file
- [ ] Adding multi language support
- [ ] Replace localStorage of JWT token to in memory redux state (XSS Attack)
- [ ] Adding a guard to all routes if user not logged in
- [ ] Default error page on communication error
- [ ] Setting up theme with MUI
- [ ] Render the app responsive
- [ ] Adding unit testing
- [ ] Implement logout functionnality

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Maxime Dauvergne - dauvergne.maxime@gmail.com

Project Link: [https://github.com/krelianer/marvel-front](https://github.com/krelianer/marvel-front)

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MUI]: https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white
[MUI-url]: https://mui.com/material-ui/
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/