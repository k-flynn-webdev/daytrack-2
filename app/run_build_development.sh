#!/bin/bash

script_location=$(dirname $0)
echo $script_location
cd $script_location
pwd
# browser url = 'http://127.0.0.1:8600/'


npm run build_dev

