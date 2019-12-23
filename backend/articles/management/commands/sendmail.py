from django.core.management.base import BaseCommand, CommandError
from django.utils.datetime_safe import datetime
from django.core.mail import send_mail
from datetime import date
from articles.models import Emails, Article

class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def handle(self, *args, **options):
        today = date.today()
        articles = Article.objects.filter(date__gt=today)
        print(articles)
        emails = Emails.objects.all()
        if articles is not []:
            for email in emails:
                send_mail(
                'Heyo',
                'New article has been created',
                'django.user@wp.pl',
                [email.email],
                fail_silently=False,
                )
