#!/bin/bash
SERVER=abraxas
LOCALDIR=public/
REMOTEDIR=glciampaglia.com/

# run hugo; if successful, run rsync; if successful, run rm
hugo -d ${LOCALDIR} && \
    rsync -aP --delete ${LOCALDIR} ${SERVER}:${REMOTEDIR} && \
    rm -rf ${LOCALDIR}
