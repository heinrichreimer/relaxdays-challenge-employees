# 🧑‍💻 relaxdays-challenge-employees

App for employees to manage vacation, sick leaves, and passwords, to see events, and to find colleagues.

This project was created in the Relaxdays Code Challenge Vol. 1.
See the [hackathon homepage](https://sites.google.com/relaxdays.de/hackathon-relaxdays/startseite) for more information.
Our participant ID in the challenge were: `CC-VOL1-54` and `CC-VOL1-62`

## Usage

First you need to clone this repository:

```shell script
git clone https://github.com/heinrichreimer/relaxdays-challenge-employees.git
cd relaxdays-challenge-employees/
```

### Docker container

1. Install [Docker](https://docs.docker.com/get-docker/).
1. Build a Docker container with this project:

   ```shell script
   docker build -t relaxdays-challenge-employees .
   ```

1. Start the Docker container:

   ```shell script
   docker run -v $(pwd):/app -p 3000:80 -it relaxdays-challenge-employees
   ```

1. The app is now running on [`localhost:3000`](http://localhost:3000/)

### Local machine

1. Install [Node](https://yarnpkg.com/) and [Yarn](https://yarnpkg.com/).
1. Install dependencies:

   ```shell script
   yarn install
   ```

1. Run the app:

   ```shell script
   yarn start
   ```

1. The app is now running on [`localhost:3000`](http://localhost:3000/)

## License

This repository is licensed under the [MIT License](LICENSE).
