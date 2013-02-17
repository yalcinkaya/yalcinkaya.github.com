---
layout: page
title: 
tagline: 
tags:
permalink:
published:
category:
---
{% include JB/setup %}



<ul class="posts">

  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}

</ul>