#!/bin/sh

#terminal colors
RED_CODE=1
RED='\033[38;5;'$RED_CODE'm' 
BLUE_CODE=4
BLUE='\033[38;5;'$BLUE_CODE'm'   

BOLD='\033[1m'
RESET='\033[m'   

if haxe build.hxml; then
	cd ../
	neko analyzer.n THREE
else
	echo -e "${RED}${BOLD} -- Build Failed --${RESET}"
fi