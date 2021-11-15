# BTP Backend code

## Tech Stack used
1. Django
2. PyTorch
3. Numpy
4. Jupyter Notebook

## Installation guide
```bash
python3 -m venv proj_env
source proj_env/bin/activate
pip3 -r requirements.txt
```

## Starting Server
```bash
python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver
```

## Server Detail:
> Server running at: http://localhost:8000

## About Project
Since our focus is a rest based service, we have provided robust documentation to help our customers. We provide every feature, from registration to uploading data to comparison through REST api. List of services available is a below:

1. Login and Registration
2. Get complete user detail and history
3. Upload data for frequent and fast usage
4. Get list of saved sentences
5. Update sentence and related information
6. Custom comparison of sentences ( completely unseen sentences )
7. Add credits to user account

For our customers, we provide the feature to upload sentences and some related information in terms of string with it. This allows for the users to add quick information and codes associated with the sentence, if in case the sentence surfaces, actions can be executed quickly saving them the hashel to manually decide for each sentence every time they receive it.