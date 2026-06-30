---
status: building
title: Multiplication Table of 22
---

## Goal
Display a clean, styled multiplication table for the number 22 (22 × 1 through 22 × 10) on the page.

## Steps

1. **Set up the global stylesheet** at `/app/src/styles/global.css` — start with the Tailwind import and add a subtle background color for the page body.

2. **Set up the app entry point** at `/app/src/main.tsx` — render the root React component and import the global stylesheet.

3. **Create the main App component** at `/app/src/App.tsx` — render a centered page layout with a heading that says "Multiplication Table of 22".

4. **Create a TableRow component** at `/app/src/components/TableRow.tsx` — a reusable row component that accepts the multiplier and displays a single row like "22 × 1 = 22". Style it with alternating row colors for readability.

5. **Create the MultiplicationTable component** at `/app/src/components/MultiplicationTable.tsx` — renders 10 rows (22 × 1 through 22 × 10) using the TableRow component inside a styled card/container with rounded corners, a border, and a subtle shadow.

6. **Wire MultiplicationTable into App** — import and place the table component below the heading inside the centered layout in `/app/src/App.tsx`.

## Expected Result
A single page showing a nicely formatted multiplication table for 22, listing all results from 22 × 1 = 22 up to 22 × 10 = 220, with clean styling, alternating row colors, and a centered card layout.
