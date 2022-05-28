from dataclasses import field, fields
from pyexpat import model
from rest_framework import serializers
from .models import Appointment, Doctor, Patient, Mshop


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = "__all__"


class MshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mshop
        fields = "__all__"


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = "__all__"


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = "__all__"
