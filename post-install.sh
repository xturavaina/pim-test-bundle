#!/bin/bash

# Funció per comprovar l'èxit de cada comanda
check_command() {
    if [ $? -ne 0 ]; then
        echo "Error executant: $1"
        exit 1
    fi
}

echo "Executant: make cache"
make cache
check_command "make cache"

echo "Executant: make assets"
make assets
check_command "make assets"

echo "Executant: make javascript-extensions"
make javascript-extensions
check_command "make javascript-extensions"

echo "Executant: make javascript-dev"
make javascript-dev
check_command "make javascript-dev"

echo "Executant: make css"
make css
check_command "make css"

echo "Totes les comandes s'han executat correctament."
