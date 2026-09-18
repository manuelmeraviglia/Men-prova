FROM nginx:alpine

# Useful to remove the default rendered page,
# as we simply want the base image to take care of port forwarding
RUN rm -rf /usr/share/nginx/html/*

# As relevant files are manually moved, there is no need for a Dockerignore
COPY --chown=nginx:nginx index.html menu.html contatti.html chi-siamo.html gallery.html lavora-con-noi.html /usr/share/nginx/html/
COPY --chown=nginx:nginx global_styles.css /usr/share/nginx/html/
COPY --chown=nginx:nginx assets/ /usr/share/nginx/html/assets/
COPY --chown=nginx:nginx components/ /usr/share/nginx/html/components/
