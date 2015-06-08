Website
=======

A docker container for my website.

Usage
-----

We rely on [docker-compose][]. See the
[manual][docker-compose-installation] for the installation
instructions.

For now just use

```sh
docker build -t dvberkel.nl .
docker run --name website -p 80:80 -d dvberkel.nl
```

[docker-compose]: https://docs.docker.com/compose/
[docker-compose-installation]: https://docs.docker.com/compose/install/
