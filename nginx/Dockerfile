FROM nginx
COPY ./sites-available/* /etc/nginx/sites-available/
RUN mkdir /etc/nginx/sites-enabled/
RUN ln -s /etc/nginx/sites-available/dev.conf /etc/nginx/sites-enabled/dev.conf
RUN ln -s /etc/nginx/sites-available/int.conf /etc/nginx/sites-enabled/int.conf
