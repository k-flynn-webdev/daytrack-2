#!/bin/bash

## PATHS
dir_project_production=$(dirname $0);
dir_project=$dir_project_production/..;

## VARS
source $dir_project/.env

# Add Build Watcher to PM2 processes
pm2 start npm --name "$WEB_NAME-app" -- start
