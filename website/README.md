# Developement
When in local development perform the following steps to run a single docker
container.

## Build docker container
The `website_web` container needs to be build.

```shell
docker build -t website_web
```

## Run docker container
The docker container for the website can be run with the following command:

```shell
docker run -d -p 8080:80 --name web -v $PWD/www:/data/www website_web
```

Make sure to substitute `$PWD` for the absolute path of your working directory.
