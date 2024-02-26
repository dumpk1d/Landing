#-----------------------------------------------------------------------
# Dockerfile to build Docker Image of Apache from Apache
#
# Made by dumpk1d 26-February-2024
#---------------------------------------------------------------------- 

FROM ubuntu 

RUN apt-get -y update
RUN apt-get -y install apache2

#ENTRYPOINT ["/usr/sbin/apache2", "-k", "start"]


#ENV APACHE_RUN_USER www-data
#ENV APACHE_RUN_GROUP www-data
#ENV APACHE_LOG_DIR /var/log/apache2

EXPOSE 80
CMD apachectl -D FOREGROUND

