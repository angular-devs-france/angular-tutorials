---
title: Introduction to Components
description: Components are the building blocks of Angular applications.
---

Components are the pillars of Angular applications.
They help organize an application into smaller, reusable elements for a more maintainable codebase.

Components are used to:

- Break down the application into smaller components;
- Reuse the same block in different parts of the application;
- Dedicate their content to a route with their own URL.

:::note
If you are familiar with **components** in another framework, the concept is the same.
:::

## Your First Component

Your project already has a default component called `app`.

It consists of 3 files:

- `app.component.ts`: The component class code written in TypeScript;
- `app.component.html`: The component Template written in HTML;
- `app.component.css`: The CSS styles dedicated to the component.

Think of the human body:

- The HTML file represents the bones: it's the structure;
- The TypeScript file represents the brain and muscles: it's the logic;
- The CSS file is the person's appearance: how it will look.

Each of these files is part of the component.

:::note
There is often a misunderstanding about the term Template. The HTML file is the HTML Template of your component. It represents the **view** of your component.
The TypeScript file represents the model of your component.
:::

Enterprise applications are made up of many components. Each component is an element of the application that controls a part of the screen.
You will learn how to create a new component in the next step.
