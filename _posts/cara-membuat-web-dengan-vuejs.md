---
title: Cara Membuat Web dengan Vue Js
date: '2021-01-11'
excerpt: Panduan bagaimana cara untuk membuat web dengan Vue Js
author: Aryo
published: true
categories: [javascript,vue]
coverImage: /_posts/thumbnail.jpg
---

## Overview 📝

Google analytics helps measuring the visitors and their engagement on our website. Installing google analytics is available on the NextVita template preloaded, no need to configure it. 


## Features
- Pre installed Google Analytics
- No extra dependencies
- Measure core web vital in Google Analytics

## How to add Analytic code
- Go to the file ``` /data/siteConfig.js ``` 
- ```export const analyticId = null; ``` replace null with your google analytic code 
- It will look like "UA-12345678-0" 
- Your site is ready to send analytic to the Google

## Read core web vital in GA

- To check core web vital report in Google Analytics open Events
- Filer events category for the value "Web Vitals" 
- You can find all web vital reading in the GA here. 