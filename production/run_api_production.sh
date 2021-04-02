#!/bin/bash
sleep 1s

script_location=$(dirname $0)
echo $script_location
cd $script_location
pwd

source ../.env
source `which virtualenvwrapper.sh`

cd $script_location/../api
pwd

workon $APP_ENVIROMENT
uwsgi --socket $API_IP:$API_PORT --protocol=http -w main.wsgi:application

