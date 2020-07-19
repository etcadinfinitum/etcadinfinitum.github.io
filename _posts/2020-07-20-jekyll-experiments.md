---
layout: post
title: Creating Better Sites with Jekyll
description: In the past few months, I've been creating new themes and customizing themes I like. Here's what I learned, good and bad.
tags: side-projects web-dev
---

Jekyll is a beautiful tool for creating beautiful sites with minimal 
configuration. As someone who was writing site content almost every week for 
the past 6 months, I got all the 

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

![hackathon docs page](/public/assets/images/jekyll/hackathon.png)

### Multimedia Pages with `jekyll-spaceship`

### Building a New Theme From Scratch

### Building This Blog's Layout

## Caveats and Lessons

Jekyll's utility grows exponentially with the technical capabilities of 
its users. The ability to create themes from scratch, adapt themes to suit 
user needs, structure the site, and present content provides plenty of 
flexibility for creating a site. 

However, these tools are not very accessible for individuals who don't 
have knowledge of the templating language engines that Jekyll uses, like 
[Liquid](https://shopify.github.io/liquid/) and 
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
simpler.

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
