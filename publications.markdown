---
layout: page
title: Publications
permalink: /publications/
excerpt: "Publications from the lncRNA Lab."
---

{% for pub in site.data.publications %}
<div style="margin-bottom: 2rem;">

<strong>{{ pub.title }}</strong><br>

{{ pub.authors }}<br>

<em>{{ pub.link.display }}</em><br>

<a href="{{ pub.link.url }}" target="_blank">View publication</a>

</div>
{% endfor %}