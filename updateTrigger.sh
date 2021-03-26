#!/bin/bash

## onUpdate ##
## Build All Files ##

## VARS
NODE_ENV=production
. .env

## PATHS
dir_project=$PWD;
dir_project_api=$dir_project/api;
dir_project_app=$dir_project/app;

## APP
cd $dir_project_app
npm run build

## API
source `which virtualenvwrapper.sh`
workon $APP_ENVIROMENT

## ASSETS
cd $dir_project_api
python3 manage.py collectstatic --noinput
cp $dir_project_app/dist/index.html $dir_project/static/index.html
