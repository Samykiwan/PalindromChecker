from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse
from django.views.decorators.http import require_POST
from .seriliazers import ProcessWordSerializer


@csrf_exempt
@require_POST
def process_word(request):
    input_word = request.POST['word']
    is_palindrome = input_word == input_word[::-1]
    middle_letter = None
    if len(input_word) % 2 != 0:
        middle_letter = input_word[len(input_word) // 2]
    response = {
        'is_palindrome': is_palindrome,
        'middle_letter': middle_letter
    }
    serializer = ProcessWordSerializer(data=response)
    serializer.is_valid(raise_exception=True)
    return JsonResponse(serializer.validated_data)



def hello(request):
    return HttpResponse("hello")
