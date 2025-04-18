#!bin/bash
XXX='\033[1;40m'
GREEN='\033[1;32m'
BLUE='\033[0;34m'
while : 
do
printf "${XXX}︎YOKO BOT 7.2.0 CONECTANDO\n"
if [ "$1" = "sim" ]; then
node YOKO-CONNECT.js sim
elif [ "$1" = "não" ]; then
node YOKO-CONNECT.js não
else 
node YOKO-CONNECT.js
fi
sleep 1 
printf "${BLUE}- REINICIANDO NOVAMENTE\n"
done
