---
layout: post
title: Creating Better Sites with Jekyll
description: In the past few months, I've been creating new themes and customizing themes I like. Here's what I learned, good and bad.
tags: side-projects web-dev
---

Jekyll is a beautiful tool for creating beautiful sites with minimal 
configuration. As someone who was writing site content almost every week for 
the past 6 months, I got a lot of exposure into the possibilities of 
the platform, as well as the limitations of plugin usage and customization, 
especially where GitHub Pages is concerned.

## Projects

Over the past few months, I have created at least 7 sites with Jekyll 
and GitHub pages; the highlights are listed here.

### Customizing the `hacker` Theme for Documentation

As part of the [UWB Hacks the Cloud](https://uwbhacks.com) hackathon, 
my team and I built a reference site for cloud computing fundamentals. 

I chose to use GitHub Pages to host it because of all the reasons that 
GitHub Pages is a fantastic feature for projects like this:

1. Backlog of workable items could be tracked in the same repository 
   the site would be hosted from.
2. The beauty of a PR :arrow_right: code review :arrow_right: approval :arrow_right: deployment 
   workflow.
3. Minimal startup overhead to get a functional, stylish site theme.

To fit the hackathon theme, I chose the [`hacker`](https://github.com/pages-themes/hacker) 
theme. Unlike most Jekyll sites, the documentation page 
doesn't serve as a blog and important content should be accessible through 
easy-to-locate navigation, I customized the default layout to add a 
navigation sidebar. 

The sidebar is populated by looping through the repository's `_docs` 
collection, gathering all `category` and `title` tags in each file's 
front matter, grouping by category, and sorting. The core logic is 
[here](https://github.com/UWB-ACM/Hackathon-Docs-2020/blob/master/_layouts/default.html#L35).

While I was at it, I added some Sass rules to float the navigation 
bar and content vertically in mobile views, and shows a hidden div 
which recommends viewing the page on a larger screen. The final tweaks 
were for styling the header with a logo and aligning content in a 
more friendly fashion.

The final result:

![hackathon docs page](/public/images/jekyll/hackathon.png)

### Multimedia Pages with `jekyll-spaceship`

For a final project in my undergraduate degree, I built a site which 
could render images and audio nicely, along with tables that allow 
for merged cells to better present related information.

Image and audio support can be done with inline HTML relatively easily, 
but writing an HTML table from scratch is inconvenient and error-prone. 
So, after some poking around, I found 
[`jekyll-spaceship`](https://github.com/jeffreytse/jekyll-spaceship), 
a really neat gem plugin for Jekyll which had the added benefit in this 
use case of supporting MathJax. 

With this plugin, the project did not have to compromise logical 
content flow with the presentation of the content; here's an example 
of the table layout we used for before & after results:

![spectrograms and audio of DSP project](/public/images/jekyll/spaceship-tables.png)

I was very pleased with the results, although the lack of WYSIWYG 
previews still mandated some experimentation. I also had to configure 
a continuous deployment option for this repository so that the 
non-whitelisted plugin would deploy the correctly formatted code without 
generating the static files offline.

Side note: it is a shame that this project didn't make use of the 
MathJax capabilities of this Jekyll plugin; the project's academic 
merits are a separate concern from this post.

### Building a New Theme From Scratch

I wanted to have fun with a theme of my own, and originally intended to 
migrate the documentation site for the 
[2019 school hackathon](https://uwbhacks.com/archive/2019/) from its 
former [`wiki.js`](https://wiki.js.org/) layout to a Jekyll layout that 
can be hosted through GitHub Pages, like all of the organization's other 
pages.

So, I created a heckin' vaporwave theme! I also exercised my (possibly 
overenthusiastic) love of linear gradients.

![mixtape jekyll theme](/public/images/jekyll/mixtape.png)

Most of the theme is simple fare; it supports an index and about 
page as well as a blog in a `_posts` directory. The particular things that 
I wanted to implement and are functional are:

* Dynamically changing the navbar menu and header button links 
  and text within the `_config.yml` configuration file
* Supporting a mobile-friendly collapsible navbar (all CSS, no JavaScript)
  ![collapsible navbar](/public/images/jekyll/mixtape-nav.gif)

This theme isn't as extensible as I would like it to be eventually; it 
would be great to support an optional tag- or collection-based 
navigation bar and improve font size behavior in the header for mobile 
views.

### Building This Blog's Layout

Perusing the web for a tagging option, I ran across Long Qian's 
[blog](https://longqian.me). I liked the simplicity of the sidebar 
layout and thought the tagging solution was great. So, I adopted 
most of those ideas to create this site.

#### Adapting Existing Templates

The theme is based on [Hyde](https://github.com/poole/hyde), but 
I found that the proportions of the layout were difficult to modify 
by hand using the measurements dictated in Hyde. The measurement of the 
sidebar element is an explicit multiple of the base font size, and I 
found that trying to tweak the sidebar size and the text placement within 
the sidebar lead to inconsistent results that I did not like. 

So, perhaps against the better wisdom of the talented folks who created 
Hyde, I changed the layout to use CSS Flexboxes. Many of the ideas 
from Hyde, including the reversible sidebar and sticky content, were 
retained in this migration.

I also added the post tagging modules used by Qian, with almost no 
changes made to the functionality.

#### Migration and Results

The migration process was not straightforward at all. The Hyde theme is 
built off of Poole, but Hyde does not adhere to the traditional pattern 
of extensibility via Jekyll. The theme's stylesheets are not in the 
`assets` or `_sass` folders, which would allow Jekyll to automatically 
reference these files. 

As part of adapting this theme, I had to add the stylesheets to the 
repository myself. I ended up pulling most of the layouts and include 
portions as well so they could be adapted as needed. The two stylesheets 
that came with Hyde did not reflect layout responsibilities; they were 
instead organized by the theme they were taken from.

To make the migration process more straightforward, I refactored specific 
components into a pattern that made more sense to me:
* `structure.css` for fundamental page layout; sidebar layout, media queries 
  for mobile layouts, and margins/padding
* `text.css` for font size and families for various types of tags, as 
  well as formatting for post pagination
* `syntax.css` for syntax highlighting; this was taken directly from 
  the Hyde repository

I added the following sheets as well:
* `themes.css` for theme colors and options
* `fonts.css` for font selections, in particular for the sidebar
* `tags.css` for formatting post tags (a fairly straightforward task)

After reworking the page structure into something that made more 
sense to me, I added some cosmetic finishing touches, and voilà! You 
are reading the results.

## Jekyll's Caveats and Lessons

Jekyll's utility grows exponentially with the technical capabilities of 
its users. The ability to create themes from scratch, adapt themes to suit 
user needs, structure the site, and present content provides plenty of 
flexibility for creating a site. 

However, these tools are not very accessible for individuals who don't 
have knowledge of the templating and programming languages that Jekyll 
uses, like [Liquid](https://shopify.github.io/liquid/) and 
[Ruby](https://www.ruby-lang.org/en/), in addition to basic web development 
knowledge.

My explicit goal for the Mixtape theme's functionality was to provide a 
simple, straightforward way to allow users to customize the site's top-level 
site links and feature buttons without having to edit the theme's templates. 

However, taking an approach like I did with the hackathon site and 
creating navigation menus, incorporating collections, and tweaking the 
header for branding still requires additional effort.

I also wish that there were whitelisted plugins that could emulate the 
`jekyll-tagging` and `jekyll-spaceship` functionality, so that the 
process of creating a site specifically for GitHub Pages was even 
more flexible without configuring CI/CD or making compromises on content.

## Tools I Love

- [`remote-theme`](https://github.com/benbalter/jekyll-remote-theme), 
  a whitelisted plugin which lets any GitHub Pages site use any GitHub-hosted 
  Jekyll theme. It is a delightful KISS method of using publicly available 
  themes without hassle.
- [Tag generation](https://longqian.me/2017/02/09/github-jekyll-tag/) natively 
  on GitHub Pages by Long Qian. It is similar to the 
  [bonafide Jekyll plugin](https://github.com/pattex/jekyll-tagging)
  but doesn't require a secondary deployment step to include the non-whitelisted 
  plugin. The native version is the code used by this very site to tag posts 
  and filter/show the site's content by tag.
- [`jekyll-spaceship`](https://github.com/jeffreytse/jekyll-spaceship) is 
  a fantastic all-in-one plugin to support TeX markup, better video and 
  media embeds, Markdown tables for the real world, and a host of other 
  extra tidbits that `kramdown` and other parsers just don't support.
- Coupled with `jekyll-spaceship` (and other plugins), a 
  [GitHub Action](https://github.com/jeffreytse/jekyll-deploy-action) 
  by the same author as `jekyll-spaceship` will build a site's static 
  pages and deploy to the `gh-pages` branch. With this tooling, any 
  publisher can include arbitrary gems to their hearts' desire without 
  worrying about the GitHub Pages whitelist. Additionally, it allows 
  explicit upgrades of Jekyll versions and gem versions; Jekyll 4.x is 
  finally within reach!
