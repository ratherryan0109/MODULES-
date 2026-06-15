# Mini Project: Product Configuration Tool

## Objective

Build a product configurator (e.g., custom PC builder) using cascading selects with optgroups, multi-select, dependent options, real-time price calculation, and a custom-styled UI.

## Requirements

1. **Category Select**: CPU, GPU, RAM, Storage, etc. (with optgroups)
2. **Brand/Model Select**: Dependent on category, dynamically populated
3. **Features Multi-Select**: Extra features for selected component
4. **Quantity Select**: Number of units (with size attribute)
5. **Summary Display**: Shows all selections with calculated total price
6. **Custom Styling**: All selects styled consistently with custom arrows
7. **Reset Button**: Clears all selections

## Implementation

Build a product configurator with:
- A main category select (CPU, GPU, RAM, Storage, Monitor, Accessories)
- A model select that dynamically updates based on category
- A features multi-select that changes with the model
- A quantity select showing values 1-10
- Real-time price display that updates on any selection change
- styled-select CSS with appearance:none
- Form validation requiring at least a category and model selection

## Evaluation

- Dynamic cascading selects (30 pts)
- Multi-select with features (20 pts)
- Real-time price calculation (20 pts)
- Custom select styling (15 pts)
- Form validation (15 pts)
