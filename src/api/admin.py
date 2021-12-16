  
import os
from flask_admin import Admin
from .models import db, UserData, Supplier, Bill, ProductToBill, Product, Client
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(UserData, db.session))
    admin.add_view(ModelView(Supplier, db.session))
    admin.add_view(ModelView(Bill, db.session))
    admin.add_view(ModelView(ProductToBill, db.session))
    admin.add_view(ModelView(Product, db.session))
    admin.add_view(ModelView(Client, db.session))
    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))