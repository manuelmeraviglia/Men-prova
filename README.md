# Men-prova

## Docker

We are currently experimenting with Docker to containerize and serve the site. A `Dockerfile` based on `nginx:alpine` copies the static pages, styles, and assets into an nginx image so the site can be served from a container.

Build and run locally:

```bash
docker build -t menu-bar .
docker run --rm -p 8080:80 menu-bar
```

Then open http://localhost:8080 in your browser.
