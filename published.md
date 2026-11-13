---
layout: published-index
title: AkaneDev Labs Publishing
description: Games, modifications and software published by AkaneDev Labs Publishing. Discover projects developed by AkaneDev and other independent developers.
permalink: /published/
eyebrow: PUBLISHING
---

## Published projects

AkaneDev Labs Publishing helps developers bring their projects to the world. We publish games, modifications, software and other projects, regardless of who developed them.

Every project listed here includes its original developer and links to where you can find it.

{% assign entries = site.published | sort: "date_published" | reverse %}

{% if entries.size > 0 %}

    {% for project in entries %}
        <article class="published-entry">

            <div class="published-entry-info">
                <span class="published-entry-type">{{ project.project_type }}</span>

                <h2>
                    <a href="{{ project.url | relative_url }}">
                        {{ project.title }}
                    </a>
                </h2>

                {% if project.description %}
                    <p>{{ project.description }}</p>
                {% endif %}

                <span class="published-developer">
                    Developed by {{ project.developer }}
                </span>
            </div>

            <a
                class="published-entry-arrow"
                href="{{ project.url | relative_url }}"
                aria-label="View {{ project.title }}"
            >→</a>

        </article>
    {% endfor %}

{% else %}

    <p>No projects have been published yet. Check back later!</p>

{% endif %}
