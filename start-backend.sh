#!/bin/bash
set -x  # <--- Esto imprime cada línea que ejecuta el script

# Activa el entorno virtual o lo crea si no existe
if [ ! -d "env" ]; then
  echo "📦 Creando entorno virtual..."
  python3 -m venv env
fi

echo "⚙️ Activando entorno virtual..."
source env/bin/activate

echo "⬇️ Instalando dependencias..."
pip install -r requirements.txt

echo "📂 Ejecutando migraciones..."
python3 manage.py migrate

echo "🚀 Iniciando servidor Django..."
python3 manage.py runserver