
# Marvel - Back

A node back-end app acting as a passthrough to the Marvel API with user management

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Roadmap](#roadmap)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

### Built With

* [![NPM][NPM]][NPM-url]
* [![Node][Node.js]][Node-url]
* [![Jest][Jest]][Jest-url]
* [![Express][Express]][Express-url]


## Getting Started

### Prerequisites

#### Démarrage 
1. Go to the project root folder
2. Execute the following command to startup a Redis container for caching
```bash
./scripts/run_redis.sh -k -c -r
```

#### Configuration
1. Open the /config/.env.dev file
2. Retrieve your personal marve api keys from https://developer.marvel.com/
3. Enter your Marvel private/public key and your mongodb connection string
```bash
MONGO_URL=

MARVEL_PUBLIC_KEY=
MARVEL_PRIVATE_KEY=
```
Example config
```bash
MONGO_URL=mongodb+srv://Marvel:XXXXX@marvelcluster.XXXX.mongodb.net/?retryWrites=true&w=majority

MARVEL_PUBLIC_KEY=abcdef
MARVEL_PRIVATE_KEY=abcdefghi
```

### Installation
Installation :
```bash
npm install
```

Start server :
```bash
npm run dev
```

## Roadmap

- [ ] Building the app in a Docker container
- [ ] Splitting the character controller into a service
- [ ] Create unit test for the character controller and service
- [ ] Cleaning up the loggin configuration
- [ ] Setup external caching to prevent unecessary calls to marvel API

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Maxime Dauvergne - dauvergne.maxime@gmail.com

Project Link: [https://github.com/krelianer/marvel-back](https://github.com/krelianer/marvel-back)

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://reactjs.org/
[Express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com/
[Jest]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[Jest-url]: https://jestjs.io/fr/
[NPM]: https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white
[NPM-url]: https://www.npmjs.com/