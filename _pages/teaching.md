---
layout: page
permalink: /teaching/
title: teaching
description: Courses taught at UCLA and elsewhere.
nav: true
nav_order: 3
---

<!-- _pages/teaching.md -->
<!-- Courses are listed in _data/teaching.yml -->

<div class="publications">
  {% for group in site.data.teaching %}
    <h2 class="bibliography">{{ group.role }}</h2>
    <ol class="bibliography">
      {% for c in group.courses %}
        <li>
          <div class="row">
            <div class="col col-sm-2 abbr">
              <abbr class="badge rounded w-100">{{ c.term }}</abbr>
            </div>
            <div class="col-sm-8">
              <div class="title">{{ c.course }}</div>
              <div class="periodical"><em>{{ c.institution }}</em></div>
              {% if c.note %}
                <div class="author">{{ c.note }}</div>
              {% endif %}
            </div>
          </div>
        </li>
      {% endfor %}
    </ol>
  {% endfor %}
</div>

## Teaching interests

<div class="row">
  <div class="col-sm-6">
    <ul>
      <li>Introductory linguistics</li>
      <li>Introductory phonetics &amp; phonology</li>
      <li>Introductory morphology</li>
      <li>Introductory syntax</li>
      <li>Optimality Theory</li>
      <li>Historical linguistics</li>
      <li>Language &amp; evolution</li>
      <li>Structure and history of English words</li>
      <li>Indo-European linguistics</li>
      <li>Indo-European phonology</li>
    </ul>
  </div>
  <div class="col-sm-6">
    <ul>
      <li>Indo-European morphology</li>
      <li>Indo-European syntax</li>
      <li>Indo-European mythology</li>
      <li>Introductory Gothic &amp; Proto-Germanic</li>
      <li>Introductory Old Norse</li>
      <li>Introductory Sanskrit</li>
      <li>Introductory Ancient Greek</li>
      <li>Introductory Latin</li>
      <li>History of the Indic Languages</li>
      <li>History of the Romance Languages</li>
    </ul>
  </div>
</div>
