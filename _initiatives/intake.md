---
layout: initiatives
title: Co-op Intake Support
image: application-support.svg
---

COSAS is committed to providing as much support as we can for Co-op Applicants. We know how daunting the process can be and we want to help make it as painless as possible. Take a look at our events section for the services that we offer. 

### COSAS Intake Events  

We provide various events and services that are targeted to Co-op intake students. Please refer to then here: 

<div>
  {% for post in site.tags.intake reversed %}
      <a href="{{ post.url }}"><h5>{{ post.title }} - {{post.event-date}}</h5></a>
  {% endfor %}
</div>