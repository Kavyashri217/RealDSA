# Problem Statement

## Description

Data is stored in format <year>/<monthName>.txt.

Within the text of the file, we have a text line "[[Number of people: <value>]]" for that month.

e.g, for year 8879, August file has the value: **47359253**

Your mission: Given a value, find if that value exists in any year-month file. Return that year.

Data rules:
- Each month has more people than months before it for the same year
- Each year has more people than previous year
- For any year, no month is skipped
- Years are consecutive

## Folder Structure

```
data/
├── <year>/
│   ├── Jan.txt
│   ├── Feb.txt
│   ├── March.txt
│   └── ...
...

```

## Requirements

- Any language is fine
