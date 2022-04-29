#!/bin/bash

#!/bin/bash
## This script adds all of the executable permissions to all 
## of the bash scripts in this folder.
cd src/scripts
i=1
addPermissions() {
    file=$1
    echo "$i) Adding permissions to $file"
    chmod +x $file
    ((i=i+1))
}

addPermissions servers.sh