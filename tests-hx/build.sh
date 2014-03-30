#terminal colors
RED_CODE=1
RED='\033[38;5;'$RED_CODE'm' 
BLUE_CODE=4
BLUE='\033[38;5;'$BLUE_CODE'm'   

BOLD='\033[1m'
RESET='\033[m'   

echo -e "${BLUE} -- JS --${RESET}"
if haxe buildjs.hxml; then
	node main.js
else
	echo -e "${RED}${BOLD} -- JS Failed --${RESET}"
fi

echo -e "\n${BLUE} -- C++ -- ${RESET}"
if haxe buildcpp.hxml; then
	./cpp/Main
else
	echo -e "${RED}${BOLD} -- C++ Failed --${RESET}"
fi
