.SILENT:
DOCKER_PS= $(shell docker ps -a -q)
DOCKER_IMAGES= $(shell docker images -q)
DOCKER_VOLUME_LS= $(shell docker volume ls -q)

all: build

build:
	docker-compose up --build 
	@echo "`tput  setaf 2` Server built and up"

up:
	docker-compose up
	@echo "`tput  setaf 2` Server up"

start:
	docker-compose start
	@echo "`tput  setaf 2` Server start"

stop:
	docker-compose stop
	@echo "`tput  setaf 2` Server stop"

clean:
	docker-compose down
	rm -rf srcs/data/*

re: clean all

