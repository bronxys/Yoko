#!/bin/bash

echo_color() {
    local color=$1
    local message=$2
    case $color in
        "red") echo "\033[31m$message\033[0m" ;;
        "green") echo "\033[32m$message\033[0m" ;;
        "yellow") echo "\033[33m$message\033[0m" ;;
        "blue") echo "\033[34m$message\033[0m" ;;
        "magenta") echo "\033[35m$message\033[0m" ;;
        "cyan") echo "\033[36m$message\033[0m" ;;
        *) echo "$message" ;;
    esac
}

loading_effect() {
    echo -n "Carregando"
    for i in {1..3}; do
        echo -n "."
        sleep 0.5
    done
    echo ""
}



echo "Escolha uma opção:"
echo_color "red" "1. Conectar via QR Code"
echo_color "red" "2. Conectar via código"
echo_color "red" "3. Instalar dependencias"
echo_color "red" "4. Abrir canal do youtube"
read -p "Digite o número da opção:" opcao


# kill $!

case $opcao in
    1)
        echo_color "red" "yoko bot - Auto reconexão ativada via Qr-code..."
        loading_effect
        node yoko-conection.js
        ;;
    2)
        echo_color "red" "yoko bot - Auto reconexão ativada via Codigo..."
        loading_effect
        node yoko-conection.js sim
        ;;
    3)
        apt-get upgrade
        apt-get update
        apt upgrade -y
        apt update -y
        apt install nodejs -y 
        apt install nodejs-lts -y 
        apt install ffmpeg -y
        apt install wget -y 
        apt install git -y
        echo_color "red" "tudo certo pode dar sh start.sh novamente e escolha ou 1 ou 2:)"
;;
    4)
        echo_color "red" "Abrindo canal no YouTube...\n\n"
        # Substitua a URL abaixo pelo link do canal do YouTube desejado
        xdg-open "https://youtube.com/@yurimodz?si=JBtdPLtf4_J0e03K" 2>/dev/null
        ;;
    *)
        echo_color "red" "Opção inválida! Por favor, tente novamente."
        ;;
esac
