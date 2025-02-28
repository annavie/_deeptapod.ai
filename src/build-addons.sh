#!/bin/bash

BASE_DIR="src/addons"

cd $BASE_DIR

npm install node-gyp

for DIR in */; do
    if [ -f "${DIR}/binding.gyp" ]; then
        echo "Building in $DIR"
        cd $DIR
#        rm -r build
        node-gyp configure
        node-gyp build
        cd ..
    fi
done
