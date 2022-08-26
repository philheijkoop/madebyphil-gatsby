---
title: Rapid Prototyping in Django - Zags Zagorsky
date: "2021-11-12"
description: "Notes on the presentation from Djangocon"
tags: ["django", "conference-notes", "SaaS"]
---

Link to talk: https://youtu.be/V1dEWyzDfuY

Goal: create a project that's quick to validate your hypothesis and is still a good foundation to build off of in case you need to go further with it.

Make sure to stay lean, MVP first, focus on your core differentiators and the bare minimum needed to see that functionality exists, the rest can be done later.
Plan first, then write code. In particular plan your database models and relations in advance; "interface follows from database"

Use templates

- use template inheritance, multiple levels deep is fine
- display messages in your base template.
- dude really likes his bootstrap (which is indeed a good way to get up and running quickly).
- save bootstrap alert classes from form messages in the settings file.

Use Django forms

- Use Crispy forms
- Use ModelForms

Make sure to set up your settings to load environment variables and/or from a file. Don't commit secrets. File is good for local development, env variables for deployments. Django-environ is a good library for this. Best practice is to have a .env file you don't commit (.gitignore) but a .env.example file that is committed so people know how to make one locally.

django-storages is helpful to track static files. S3 on amazon is a good way to use block storage. It also allows you to share files across servers and not have to worry about scalability and availability, like you would if you stored uploaded files on the server statically.

Use social-auth-app-django allows you to implement login with oauth more easily than doing it with Django's native.

django-extension is a great way to use shell_plus and runserver_plus in development.

Use minimal style, the less CSS you put in MVP the easier it is to restyle.

Use minimal JS during the mvp. Especially if it's mostly data ingestion and display. Minimal javascript also means less to throw away when you do implement a SPA.

Wipe migrations pre-launch. There's no production database that needs maintaining. Use SQLite locally. Easy to delete and reimplement. Backups are easy since it's a flat file.

Use a PaaS and managed Database service to handle all the complex things like encryption, scaling, failover, etc.

Create a customer django user model (off the bat, even if you don't plan to customize it right now).

Have a base database model. Something like TimeStampedModel with an id = uuid4 and created and updated fields already in place. Meta Abstract=True tells Django not to create a field like that.

Add database constraints. it's easier to remove a constraint than to add one. It allows failures to happen during data ingestion (before it gets to your db) rather than later when you try to use the data and realize something is wrong in the database. Default to null=false, foreign keys should be PROTECT, set unique together contraints to fields that should be unique tuples.

use sentry to have proper error handling. Easy to install.

Security should be baked in at launch:

- have SSL from the start
- don't commit secrets to git
- enable CSRF and don't allow GET requests (not covered by Django CSRF protetction) as a method to modify data
- don't use raw SQL
- Set your servers and databases to automatically install updates (easy on PaaS)
- encrypt your database and file storage

Next steps:

- test on real users
- have objective measures for success and failure
- do iterative development
- build features the users want, not the ones you want
- if your data model is wrong, change it early
- put the corners you cut back in

There's an [example template](https://github.com/zagaran/sample-django-app) that you can fork to use new projects or reference.
