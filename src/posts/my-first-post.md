---
title: "Utilizing Hong Kong Geodata Store to Build An Accurate Site Model In
  Rhino 3D: Part 1"
description: "Part 1: Intro to GIS data in Hong Kong"
author: Jane Ling
date: 2022-05-13T14:45:58.169Z
tags:
  - left
  - center
  - right
---
## How do you build a 3D site model in Rhino using Hong Kong GIS data?

This is a post summarizing some work that I did for a series of workshops at the Chinese University of Hong Kong’s architecture department, where I showed students how to use data from the Hong Kong Geodata Store's public datasets to build a site model. Given how hard it often is to find tutorials or documentation for data in smaller localities, maybe this would help anyone looking to do something with this datasource. 

This tutorial is meant for an audience with an architecture or design background who wants to build a site model in Rhino 3D - but if you find it useful, read it anyway!

## What is GIS data anyway?

Stands for Geographic Information Systems. To put it in a naively simple explanation, it is a set of data attached to world coordinates: latitude and longitude. Used with software such as QGIS (free) and ArcGIS(paid). Rhino is not made for GIS (!), but we can try and import this data into our 3D models with Grasshopper - an emphasis on try because without native import options, sometimes things do go wrong. GIS data comes in a lot of formats. Ones that ‘work’ with Rhino + Grasshopper include: Shapefile, GeoTIFF, geoJSON.

One tip about using GIS data - **always read the information provided on the dataset**. You'll find out a lot more about how the data was structured and what it provides. 

## What kind of data can you get?

Well, GIS data can range a lot in terms of what they offer. If you have a look at NASA's USGS Earth Explorer and the long list of things you can request from their web app, you can get an idea of how much you can get.

However, since we're focusing on the data available in Hong Kong: here are the datasets that I found useful to my workflow for building a site model:

### 2D Digital Topographic Map

As titled, it is basically a flat drawing available in **DWG** or **DXF**. This is good for setting out your site plan or masterplan. Once you have opened it in CAD, you will inevitably notice that it has a ton of layers that you don't want. Simplify this to your advantage. It comes a in scale from 1:1000 - 1:20000.

### 3D Visualization Map

This is a really informative dataset for such an unassuming name. The dataset consists 3D meshes in 150m x 150m sizes, and are *very detailed* mesh models of Hong Kong. Its level of detail is similar to photogrammetry models and therefore in each model you can see existing vegetation or perimeter walls on site.

Obviously one would not use this model as a site model - a lot of cleanup would be necessary to get it looking nice and tidy. However you can always use it as a reference model to build up details of the location you're looking at.

### 3D-BIT00

> 3D Spatial Data is a set of territory-wide digital 3D model data created to represent the shape, appearance and position of various types of ground features including building, infrastructure and terrain. In this dataset, the 3D models are categorized into seven secondary classes under three primary classes according to their types and level of details.

This is the summary given by the Hong Kong Lands Department on this dataset - there's a lot more information on their data sheet as well which the bullet points below refers to). It's composed of several layers of information: buildings, infrastructure, and terrain. This is the data that I found most useful for building a site model because:

* The level of detail in the model is in a very good condition - vertexes and planes are built simply!
* There is a mesh surface that contains elevation height. In other cities maybe it wouldn't matter as much, but in a city like Hong Kong where urban areas are consistently between mountains and the water body, the elevation height is extremely useful.
* The infrastructure provides a pretty good idea of where sunlight will reach or will not. Again, for Hong Kong site conditions like elevated pedestrian walkways or bridges form a large part of the urban condition, so this is good information to have for a site model.
* There are buildings built as separate meshes for each block of the data! However, the problem here is that the buildings are given as separate files instead of being part of a model file that contains everything. We'll come back to this bit.

Of course, outside of these 3 datasets, there's many other datasets lying about on the Geodata Store that might be interesting from an architectural perspective - you can get the coordinates of all COVID-19 cases, the location of all Brownfield site, etc etc.

For the purpose of building a site model, one only needs to download the 3D-BIT00 (and the 2D Topographic Map, if you plan on doing some kind of site drawing). In the next part I will cover how you can import information into your Rhino models.

`Work in Progress! This article will be updated with images.`