from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Boolean(), unique=False, nullable=False)
    usuario = db.Column(db.String(50), nullable=False) 

    def __repr__(self):
        return '<User %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "usuario": self.usuario,
        }

class Client(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    nif = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(50), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return '<Client %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "nif": self.nif,
            "address": self.address,
            "postal_code": self.postal_code,
 }

class Bill(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    bill_number=db.Column(db.Integer, nullable=False, unique=True)
    bill_date=db.Column(db.Integer, nullable=False)
    tax=db.Column(db.Integer,nullable=False)
    discount=db.Column(db.Integer, nullable=False)
    
    def __repr__(self):
        return '<Bill %r>' % self.name

    def serialize(self):
        return {
            "id": self.id,
            "bill_number": self.bill_number,
            "bill_date": self.bill_date,
            "tax": self.tax,
            "discount": self.discount,
        }


