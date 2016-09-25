# Run docker container
The docker container for the website can be run with the following command:

```plain
docker run -d -p 8080:80 --name web -v $PWD/www:/usr/share/nginx/html website_web
```

Make sure to substitute `$PWD` for the absolute path of your working directory.
