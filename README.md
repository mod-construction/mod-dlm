<div align="center">
  <a href="https://mod.construction/docs/" target="_blank">
<img src="assets/mod-dlm-logo.png" alt="mod-dlm-logo" width="200"/>
  </a>

Open source domain specific language to describe prefab construction elements.


![build status](https://github.com/lukeautry/tsoa/actions/workflows/runTestsOnPush.yml/badge.svg)
[![npm version](https://img.shields.io/npm/v/tsoa/latest)](https://www.npmjs.com/package/tsoa)

</div>

# mod-dlm

**mod-dlm** is an open source project designed to create a domain-specific language (DSL) for describing prefab elements in the Architecture, Engineering, and Construction (AEC) industry. This project provides tools for defining entity models and automatically generating CRUD APIs, enabling suppliers to create and manage catalogs of their products easily.

## Supporting partners
<ul style="padding: 0;margin: 0; list-style: none; display: flex; justify-content: center;">
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://mod.construction/" target="_blank" style="text-decoration: none;">
            <img src="assets/mod-logo.png" alt="mod-dlm-logo"/>
        </a>
    </li>
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://cee.stanford.edu/" target="_blank" style="text-decoration: none;">
            <img src="assets/stanford-university-logo.png" alt="stanford"/>
        </a>
    </li>
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://dfab.ch/" target="_blank" style="text-decoration: none;">
            <img src="assets/dfab_logo.png" alt="dfab logo"/>
        </a>
    </li>
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://arch.ethz.ch/" target="_blank" style="text-decoration: none;">
            <img src="assets/eth_logo.png" alt="eth logo"/>
        </a>
    </li>
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://www.zhaw.ch/" target="_blank" style="text-decoration: none;">
            <img src="assets/zhaw_logo.png" alt="zhaw logo"/>
        </a>
    </li>
    <li style="padding: 5px; width: 60px; height: 50px; margin: 5px; line-height: 50px;">
        <a href="https://opensource.construction/" target="_blank" style="text-decoration: none;">
            <img src="assets/opensource_construction_logo.svg" alt="opensource.construction" height="36"
                 style="margin: 0 10px"/>
        </a>
    </li>
</ul>


## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#tinstallation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Domain-Specific Language**: Define prefab elements with a custom DSL tailored for the AEC industry.
- **Automatic CRUD API Generation**: Generate RESTful APIs for managing prefab elements.
- **Multi-language Support**: Define entities once and generate code in multiple languages including TypeScript, Python, Java, and Go.
- **3D Visualization**: Support for visualizing 3D bounding boxes of prefab elements.
- **Comprehensive Metadata**: Include critical attributes such as material composition, dimensions, weight, thermal properties, and more.
- **Extensible**: Easily extend the language and API generation capabilities to fit specific needs.

## Getting Started

### Prerequisites
- Node.js

### Installation
1. **Clone the Repository**:
   ```bash
   git clone git@github.com:mod-construction/mod-dlm.git
   cd mod-dlm
   ```
2. Run `npm install` in the repo root.

### Usage

#### `npm start`
Starts the reference docs preview server.

#### `npm run build`
Bundles the definition to the dist folder.

#### `npm test`
Validates the definition.

## Help wanted

### Contributing code

To contribute create an issue and open a pull-request.
