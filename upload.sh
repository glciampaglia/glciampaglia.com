#!/bin/bash
rsync -aP public/ mercury:www/ --delete
