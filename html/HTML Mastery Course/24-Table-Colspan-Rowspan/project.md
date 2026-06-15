# Mini Project: University Course Catalog Table

## Overview

Build a comprehensive university course catalog table that uses colspan and rowspan extensively. The table should display departments, course codes, course names, instructors, schedules, credits, and availability across multiple semesters.

## Requirements

1. **Multi-level headers**: Group columns by semester (Fall 2025, Spring 2026) using colspan
2. **Department row grouping**: Use rowspan to group courses under their respective departments
3. **Course details**: Course Code, Course Name, Instructor, Credits, Schedule, Status (Open/Closed/Waitlist)
4. **Semester sub-columns**: Each semester has Course Code, Name, Credits, Schedule columns
5. **Summary footer row**: colspan used to show totals and legend
6. **Accessibility**: Use scope attributes and id/headers for complex relationships
7. **Styling**: Distinct styling for spanned cells, zebra striping on course rows, hover effects
8. **Responsive**: Wrapper with overflow-x: auto

## Steps

### Step 1: Plan the Grid

Determine the total column count:
- Department column: 1
- Fall 2025 group: 4 columns (Code, Name, Credits, Schedule)
- Spring 2026 group: 4 columns (Code, Name, Credits, Schedule)
- Status column: 1
- Total: 10 columns per row

### Step 2: Build the Header

First row: Department, Fall 2025 (colspan=4), Spring 2026 (colspan=4), Status
Second row: (Department spanned), Code, Name, Credits, Schedule (×2 for each semester)

### Step 3: Add Department Rowspans

Each department should use rowspan equal to the number of courses in that department.

### Step 4: Add Course Data

For each course, fill in the code, name, credits, and schedule for both semesters. Use "—" for semesters where a course is not offered.

### Step 5: Style the Table

- Collapsed borders with clean design
- Department cells: distinct background, bold, vertical-align middle
- Semester group headers: gradient background
- Course rows: alternating colors
- Status: color-coded badges
- Hover effects on rows

### Step 6: Add Accessibility

- `scope="rowgroup"` on department th cells
- `scope="colgroup"` on semester group headers
- `scope="col"` on individual column headers
- `id` on each header cell
- `headers` attribute on data cells

### Step 7: Add Footer

Use colspan=9 for a summary label and the last cell for total course count.

## Sample Data

### Computer Science Department (4 courses)
| Code | Name | Credits | Schedule |
|------|------|---------|----------|
| CS101 | Intro to Programming | 4 | MWF 9-10 |
| CS201 | Data Structures | 4 | TTh 10-11:30 |
| CS301 | Algorithms | 3 | MWF 11-12 |
| CS401 | Machine Learning | 3 | TTh 2-3:30 |

### Mathematics Department (3 courses)
| Code | Name | Credits | Schedule |
|------|------|---------|----------|
| MATH101 | Calculus I | 4 | MWF 8-9 |
| MATH201 | Linear Algebra | 3 | TTh 9-10:30 |
| MATH301 | Differential Equations | 3 | MWF 10-11 |

### Physics Department (2 courses)
| Code | Name | Credits | Schedule |
|------|------|---------|----------|
| PHYS101 | Mechanics | 4 | MWF 1-2 |
| PHYS201 | Electromagnetism | 4 | TTh 1-2:30 |

## Evaluation Criteria

- All rows have exactly 10 columns (correct column count)
- Rowspan and colspan are used correctly throughout
- Department cells span the correct number of rows
- Semester headers are properly grouped
- Table is readable, styled professionally
- Accessibility attributes are present
- Responsive wrapper works
- HTML validates correctly
