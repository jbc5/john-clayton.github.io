---
layout: page
permalink: /presentations/
title: presentations
description: Conference presentations in reverse chronological order.
nav: true
nav_order: 2
---

<div class="publications">
  {% assign years = site.data.presentations | group_by: "year" %}
  {% for year in years %}
    <h2 class="bibliography">{{ year.name }}</h2>
    <ol class="bibliography">
      {% for talk in year.items %}
        <li>
          <div class="row">
            <div class="col col-sm-2 abbr">
              <abbr class="badge rounded w-100">{{ talk.type }}</abbr>
            </div>
            <div class="col-sm-8">
              <div class="title">{{ talk.title }}</div>
              <div class="author">
                <em>John Clayton</em>{% if talk.with %} and {{ talk.with }}{% endif %}
              </div>
              <div class="periodical">
                <em>{{ talk.event }}</em>, {{ talk.location }}, {{ talk.date }}
              </div>
              {% if talk.pdf %}
                <div class="links">
                  <a href="{{ talk.pdf | prepend: '/assets/pdf/' | relative_url }}" class="btn btn-sm z-depth-0" role="button">Handout</a>
                </div>
              {% endif %}
            </div>
          </div>
        </li>
      {% endfor %}
    </ol>
  {% endfor %}
</div>
