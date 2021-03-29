#!/bin/bash

## onUpdate ##
## Build All Files ##

## PATHS
dir_project=$PWD;
dir_project_api=$dir_project/../api;
dir_project_app=$dir_project/../app;
dir_project_static=$dir_project/../static;

## VARS
NODE_ENV=production
source ../.env

## APP
cd $dir_project_app
$NPM run build

## API
source $VENV
workon $APP_ENVIROMENT

## ASSETS
cd $dir_project_api
python3 manage.py collectstatic --noinput
cp $dir_project_app/dist/index.html $dir_project_static/index.html
