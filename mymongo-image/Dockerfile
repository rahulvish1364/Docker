# step 1
FROM alpine
# step 2: install the software 
RUN apk add binutils
# step 2.5: configure that software
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main/' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community/' >> /etc/apk/repositories
# step 3: set default