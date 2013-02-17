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

<div class="hero-unit">
   <h1>Hello, world!</h1>
   <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
</div>



<ul class="posts">

  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}

</ul>