from rest_framework import serializers

class ProcessWordSerializer(serializers.Serializer):
    is_palindrome = serializers.BooleanField()
    middle_letter = serializers.CharField(allow_null=True)

