FROM ubuntu:18.04

RUN \
  echo "**** install runtime packages ****" && \
  apt-get update &&\
  apt-get install vim ssh sudo ansible -y
RUN echo 'root:marcelo' | chpasswd
RUN sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -i 's/#Port 22/Port 22/' /etc/ssh/sshd_config
RUN sed -i 's/#PubkeyAuthentication/PubkeyAuthentication/' /etc/ssh/sshd_config
RUN sed -i 's/#PasswordAuthentication/PasswordAuthentication/' /etc/ssh/sshd_config
