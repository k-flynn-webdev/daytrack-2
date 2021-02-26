#!/bin/bash

script_location=$(dirname $0)
echo $script_location
cd $script_location
pwd
# browser url = 'http://127.0.0.1:8600/'

source .env

#// APP
NODE_ENV=production
cd $script_location/app
pwd

npm run build

#// API
source `which virtualenvwrapper.sh`
workon $APP_ENVIROMENT

cd $script_location/api
pwd

python3 manage.py collectstatic

