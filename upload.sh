#!/bin/bash
SERVER=abraxas
LOCALDIR=public/
REMOTEDIR=glciampaglia.com/

rsync -aP --delete ${LOCALDIR} ${SERVER}:${REMOTEDIR}
