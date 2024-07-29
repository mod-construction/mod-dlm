<div align="center">
  <a href="https://mod.construction/" target="_blank">
<img src="assets/mod-dlm-title.png" alt="mod-dlm-logo"/>
  </a>

Open source domain specific language to describe prefab construction elements.

<br/>

[![build status](https://github.com/mod-construction/mod-dlm/actions/workflows/apidoc.yml/badge.svg)](https://github.com/mod-construction/mod-dlm/actions/workflows/apidoc.yml)
[![build status](https://github.com/mod-construction/mod-dlm/actions/workflows/publish.yml/badge.svg)](https://github.com/mod-construction/mod-dlm/actions/workflows/publish.yml)
[![npm version](https://img.shields.io/npm/v/@mod-construction/mod-dlm/latest)](https://www.npmjs.com/package/@mod-construction/mod-dlm)
[![PyPI version](https://img.shields.io/pypi/v/mod-dlm-server)](https://pypi.org/project/mod-dlm-server/)
[![License](https://img.shields.io/github/license/mod-construction/mod-dlm)](https://opensource.org/licenses/MIT)


<br/>
  <a href="https://mod-construction.github.io/mod-dlm/">API Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.npmjs.com/package/@mod-construction/mod-dlm">npm</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://pypi.org/project/mod-dlm-server/">FastAPI Server</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/mod-construction/mod-dlm/issues/new">Issues</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://mod.construction">mod.construction</a>
  <br />

</div>


# mod-dlm

**mod-dlm** is an open-source domain-specific language (DSL) for describing prefab elements in the Architecture, Engineering, and Construction (AEC) industry. This project provides tools for defining entity models and automatically generating CRUD APIs, enabling suppliers to create and manage catalogs of their products easily.

You can always find the most up-to-date API documentation here: https://mod-construction.github.io/mod-dlm/

## Table of Contents
- [Getting Started](#getting-started)
- [Installation](#tinstallation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)

## Features
- **Domain-Specific Language**: Define prefab elements with a custom DSL tailored for the AEC industry.
- **Automatic CRUD API Generation**: Generate RESTful APIs for managing prefab elements.
- **Multi-language Support**: Define entities once and generate code in multiple languages including TypeScript, Python, Java, and Go.
- **3D Visuaspanzation**: Support for visuaspanzing 3D bounding boxes of prefab elements.
- **Comprehensive Metadata**: Include critical attributes such as material composition, dimensions, weight, thermal properties, and more.
- **Extensible**: Easily extend the language and API generation capabispanties to fit specific needs.

## Getting Started

### Prerequisites
- Node.js
- Typescript (recommended)

### Installation

```bash
npm install @mod-construction/mod-dlm@latest -D
```

### Usage
You can use **mod-dlm** in different scenarios. 

### 1. Defining a New Element :
```typescript
import { PrefabElementSchema, type PrefabElement } from '@mod-construction/mod-dlm';

const newElement: PrefabElement = {
   id: 'element-001',
   name: 'Eco-friendly Wall Panel',
   description: 'An eco-friendly wall panel with superior insulation and sustainability features.',
   boundingBox: {
      width: 2500,
      height: 3000,
      depth: 150,
   },
   images: [
      'https://example.com/images/wall-panel-front.jpg',
      'https://example.com/images/wall-panel-side.jpg'
   ],
   buildingSystem: 'Wall',
   productCategory: 'Solid Wall Panels',
   material: {
      finishMaterial: 'Timber',
      structuralMaterial: 'Timber',
   },
   dimensional: {
      width: {
         min: 2400,
         max: 2600,
      },
      height: {
         min: 2900,
         max: 3100,
      },
      length: {
         min: 140,
         max: 160,
      },
   },
   performance: {
      resistanceToFireClassification: 'B1',
      thermalTransmittance: 0.30,
      airborneSoundInsulation: 50,
   },
   sustainability: {
      countryOfManufacturing: 'Sweden',
      classification: 'A',
   },
   documentationAndCompliance: {
      technicalSpecifications: 'https://example.com/docs/wall-panel-specs.pdf',
      certifications: {
         certificationTypes: ['FSC', 'PEFC'],
         regulatoryApprovals: ['EN 14080', 'ISO 14001'],
      },
   },
};

// You can use this object to interact with other parts of your application or library
console.log('New element defined:', newElement);
```

### 2. Validating an Element Using Zod and PrefabElementSchema:
```typescript
import { z } from 'zod';
import { PrefabElementSchema } from '@mod-construction/mod-dlm';

// Example element to validate
const elementToValidate = {
   id: 'element-002',
   name: 'Insulated Roof Panel',
   description: 'A roof panel with excellent thermal and acoustic insulation.',
   boundingBox: {
      width: 3200,
      height: 4000,
      depth: 180,
   },
   images: [
      'https://example.com/images/roof-panel-front.jpg',
      'https://example.com/images/roof-panel-side.jpg'
   ],
   buildingSystem: 'Roofs',
   productCategory: 'Roof Panel',
   material: {
      finishMaterial: 'Steel',
      structuralMaterial: 'Steel',
   },
   dimensional: {
      width: {
         min: 3100,
         max: 3300,
      },
      height: {
         min: 3900,
         max: 4100,
      },
      length: {
         min: 170,
         max: 190,
      },
   },
   performance: {
      resistanceToFireClassification: 'A2',
      thermalTransmittance: 0.20,
      airborneSoundInsulation: 55,
   },
   sustainability: {
      countryOfManufacturing: 'Germany',
      classification: 'A+',
   },
   documentationAndCompliance: {
      technicalSpecifications: 'https://example.com/docs/roof-panel-specs.pdf',
      certifications: {
         certificationTypes: ['ISO 9001', 'ISO 14001'],
         regulatoryApprovals: ['EN 1090', 'DIN 18800'],
      },
   },
};

// Validate the element using the PrefabElementSchema
const validation = PrefabElementSchema.safeParse(elementToValidate);

if (validation.success) {
   console.log('Element is valid:', validation.data);
} else {
   console.error('Element validation failed:', validation.error);
}
```

## Contributing

We appreciate feedback and contribution to this project! Before you get started, please see the following:

* [Contribution guidelines](CONTRIBUTING.md)
* [Code of conduct](CODE_OF_CONDUCT.md)

## License

[MIT](LICENSE)
