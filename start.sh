#!/bin/bash

## PATHS
dir_project=$(dirname $0);

## VARS
source $dir_project/.env

# Add App to PM2 processes
pm2 start ./run_api_production.sh --name "$WEB_NAME-app"
