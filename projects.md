---
layout: page
title: Projects
description: Games, software, experiments, and other things we're working on.
permalink: /projects/
eyebrow: WHAT WE'RE WORKING ON
---

<div class="projects-list">

    {% assign projects = site.projects | sort: "title" %}

    {% if projects.size > 0 %}

        {% for project in projects %}

            <a href="{{ project.url | relative_url }}" class="project-entry">

                <div class="project-entry-info">

                    {% if project.category %}
                        <span class="product-category">
                            {{ project.category }}
                        </span>
                    {% endif %}

                    <h2>{{ project.title }}</h2>

                    {% if project.description %}
                        <p>{{ project.description }}</p>
                    {% endif %}

                </div>

                <span class="project-entry-arrow" aria-hidden="true">
                    →
                </span>

            </a>

        {% endfor %}

    {% else %}

        <p class="empty-projects">
            We're working on some things. Check back later.
        </p>

    {% endif %}

</div>
