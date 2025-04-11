# 🗺️ mymapapp

**Proyecto web fullstack** con Django y React que permite gestionar y visualizar datos geoespaciales, como tiendas en un mapa. Este repositorio incluye tanto el backend como el frontend integrados en una misma estructura de proyecto.

---

## 🧱 Estructura del proyecto

mymapapp/
├── backend/        # Lógica y configuración Django
├── stores/         # Aplicación Django que maneja datos
├── frontend/       # Aplicación React (CRA)
├── manage.py
├── requirements.txt
└── .gitignore

---

## 🚀 Instalación local

### 1. Clona el repositorio
git clone https://github.com/darioduarte1/mymapapp.git
cd mymapapp


### 2. Crea un entorno virtual e instálalo
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt


### 3. Configura y corre el backend (Django)
python manage.py migrate
python manage.py runserver

Backend disponible en: http://127.0.0.1:8000

### 4. Instala y corre el frontend (React)
cd frontend
npm install
npm start

Frontend disponible en: http://localhost:3000

🔗 API Endpoints disponibles

Todos los endpoints están bajo /api/, por ejemplo:
GET     /api/stores/
POST    /api/stores/

📦 Requisitos
	•	Python 3.9+
	•	Node.js + npm
	•	Django 4+
	•	Django REST Framework
	•	React 18+
	•	CORS Headers

⸻

🧾 Autor

Desarrollado por Dario Duarte

⸻

🛡️ Licencia

Este proyecto está licenciado bajo la MIT License.

---

### ✅ ¿Qué debes hacer ahora?

1. Guarda este contenido como `README.md` en la raíz del proyecto.
2. Añádelo al commit y súbelo a GitHub:

git add README.md
git commit -m "docs: añadido README al proyecto"
git push origin main

