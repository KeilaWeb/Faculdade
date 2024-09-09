from flask import Flask
from routes.routes import configurar_rotas
import os

app = Flask(__name__)

app.config['SECRET_KEY'] = 'chave_secreta'

#Definição do caminho absoluto para a pasta upload
upload_pasta = r'C:\Users\keila_barreto\Documents\Keila\Desenvolvimento_web\senai_dsw_app_flask\uploads'
app.config['UPLOAD_FOLDER'] = upload_pasta
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024 #limite de 16Mb para os arquivos
# verificabdo se a pasta upload existe
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])

# Configurando as rotas
configurar_rotas(app)

if __name__ == '__main__':
    app.run(debug=True)
