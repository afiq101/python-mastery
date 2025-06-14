# Quick Reference Guide

This page provides a quick overview of all Python concepts covered in the training sessions. Use this as a cheat sheet while working on your projects!

## 📝 Basic Syntax

### Print Output
```python
print("Hello World!")          # Display text
print(42)                      # Display number
print(f"My age is {age}")      # Display variable in text
```

### Variables & Data Types
```python
# Text (Strings)
name = "Ana"
message = "Hello World!"

# Numbers (Integers)
age = 25
year = 2024

# Decimal Numbers (Floats)
height = 5.6
price = 19.99

# True/False (Booleans)
is_sunny = True
is_raining = False
```

### Getting User Input
```python
name = input("What's your name? ")
age = int(input("How old are you? "))
price = float(input("Enter price: "))
```

## 🤔 Making Decisions (If/Else)

### Basic If Statement
```python
if condition:
    # Code runs if condition is True
    print("Condition is true!")
```

### If/Else
```python
if age >= 18:
    print("You're an adult")
else:
    print("You're a minor")
```

### Multiple Conditions (elif)
```python
if grade >= 90:
    print("A")
elif grade >= 80:
    print("B")
elif grade >= 70:
    print("C")
else:
    print("F")
```

### Comparison Operators
```python
==    # Equal to
!=    # Not equal to
>     # Greater than
<     # Less than
>=    # Greater than or equal to
<=    # Less than or equal to
```

### Combining Conditions
```python
# Both conditions must be true
if age >= 18 and has_license:
    print("Can drive")

# At least one condition must be true
if day == "Saturday" or day == "Sunday":
    print("Weekend!")
```

## 🔄 Loops (Repetition)

### For Loops
```python
# Count from 0 to 4
for i in range(5):
    print(i)

# Count from 1 to 5
for i in range(1, 6):
    print(i)

# Loop through a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)
```

### While Loops
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### Loop Control
```python
for i in range(10):
    if i == 3:
        continue    # Skip this iteration
    if i == 7:
        break      # Exit the loop
    print(i)
```

## 🔧 Functions (Reusable Code)

### Creating Functions
```python
# Basic function
def greet():
    print("Hello!")

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

# Function with return value
def add_numbers(a, b):
    result = a + b
    return result

# Function with default parameters
def greet_with_title(name, title="Mr."):
    return f"Hello, {title} {name}!"
```

### Using Functions
```python
# Call basic function
greet()

# Call with parameters
greet_person("Ana")

# Use return value
sum_result = add_numbers(5, 3)
print(sum_result)  # 8

# Use default parameters
message1 = greet_with_title("Smith")        # Uses default "Mr."
message2 = greet_with_title("Johnson", "Dr.")  # Uses "Dr."
```

### Functions with Lists
```python
def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    total = sum(numbers)
    return total / len(numbers)

def find_max_value(numbers):
    if len(numbers) == 0:
        return None
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

# Usage
scores = [85, 92, 78, 95, 88]
avg = calculate_average(scores)
highest = find_max_value(scores)
```

## 📋 Lists (Collections)

### Creating and Accessing Lists
```python
# Create a list
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

# Access items (0-based indexing)
first_fruit = fruits[0]     # "apple"
last_fruit = fruits[-1]     # "orange"
```

### Common List Operations
```python
# Add items
fruits.append("grape")           # Add to end
fruits.insert(1, "kiwi")        # Insert at position

# Remove items
fruits.remove("apple")           # Remove by value
last_item = fruits.pop()         # Remove and return last item

# Check if item exists
if "banana" in fruits:
    print("Found banana!")

# Get list length
count = len(fruits)
```

### List Methods
```python
numbers = [3, 1, 4, 1, 5, 9]

numbers.sort()              # Sort in place
numbers.reverse()           # Reverse in place
count = numbers.count(1)    # Count occurrences
numbers.clear()             # Remove all items
```

## 📚 Dictionaries (Key-Value Pairs)

### Creating and Using Dictionaries
```python
# Create dictionary
student = {
    "name": "Ana",
    "age": 25,
    "grade": "A"
}

# Access values
name = student["name"]          # "Ana"
age = student.get("age", 0)     # 25, or 0 if key doesn't exist

# Add/modify values
student["email"] = "ana@email.com"
student["age"] = 26

# Check if key exists
if "name" in student:
    print("Name found!")

# Get all keys, values, or items
keys = student.keys()           # dict_keys(['name', 'age', 'grade', 'email'])
values = student.values()       # dict_values(['Ana', 26, 'A', 'ana@email.com'])
items = student.items()         # dict_items([('name', 'Ana'), ...])
```

### Dictionary Methods
```python
# Remove items
del student["email"]            # Remove specific key
removed_value = student.pop("grade", "N/A")  # Remove and return value
student.clear()                 # Remove all items

# Loop through dictionary
for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"{key}: {value}")
```

## 📁 File Operations

### Reading Files
```python
# Read entire file
with open("filename.txt", "r") as file:
    content = file.read()

# Read line by line
with open("filename.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### Writing Files
```python
# Write to file (overwrites existing)
with open("output.txt", "w") as file:
    file.write("Hello World!")

# Append to file
with open("output.txt", "a") as file:
    file.write("New line\n")
```

### Working with CSV Files
```python
import csv

# Read CSV
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)

# Write CSV
data = [["Name", "Age"], ["Ana", "25"], ["Bob", "30"]]
with open("output.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)
```

## 📊 Excel Operations

### Reading Excel Files
```python
import pandas as pd

# Read Excel file
df = pd.read_excel("data.xlsx")

# Read specific sheet
df = pd.read_excel("data.xlsx", sheet_name="Sheet1")

# Basic info about the data
print(df.head())        # First 5 rows
print(df.info())        # Data types and info
print(df.describe())    # Statistical summary
```

### Writing Excel Files
```python
# Save DataFrame to Excel
df.to_excel("output.xlsx", index=False)

# Save multiple sheets
with pd.ExcelWriter("output.xlsx") as writer:
    df1.to_excel(writer, sheet_name="Sheet1", index=False)
    df2.to_excel(writer, sheet_name="Sheet2", index=False)
```

### Data Processing
```python
# Filter data
filtered_df = df[df['Age'] > 25]

# Group and summarize
summary = df.groupby('Category')['Amount'].sum()

# Add new columns
df['Total'] = df['Price'] * df['Quantity']

# Handle missing data
df = df.dropna()                    # Remove rows with missing data
df = df.fillna(0)                   # Fill missing data with 0
```

## 🛠️ Error Handling

### Try/Except Blocks
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
```

## 🎯 Common Patterns

### Input Validation
```python
while True:
    try:
        age = int(input("Enter your age: "))
        if age < 0:
            print("Age cannot be negative!")
            continue
        break
    except ValueError:
        print("Please enter a valid number!")
```

### Processing Multiple Files
```python
import os

folder_path = "data_files"
for filename in os.listdir(folder_path):
    if filename.endswith('.xlsx'):
        file_path = os.path.join(folder_path, filename)
        df = pd.read_excel(file_path)
        # Process the file...
```

### Creating Reports
```python
# Generate summary statistics
total_sales = df['Amount'].sum()
average_sale = df['Amount'].mean()
top_customer = df.groupby('Customer')['Amount'].sum().idxmax()

# Create summary report
report = f"""
Sales Report
============
Total Sales: ${total_sales:,.2f}
Average Sale: ${average_sale:,.2f}
Top Customer: {top_customer}
"""

# Save to file
with open("sales_report.txt", "w") as file:
    file.write(report)
```

## 📚 Useful Functions & Methods

### String Methods
```python
text = "  Hello World  "
text.strip()           # Remove whitespace: "Hello World"
text.lower()           # Lowercase: "  hello world  "
text.upper()           # Uppercase: "  HELLO WORLD  "
text.replace("Hello", "Hi")    # Replace text
text.split()           # Split into list: ["Hello", "World"]
```

### Math Operations
```python
import math

abs(-5)               # Absolute value: 5
round(3.14159, 2)     # Round to 2 decimals: 3.14
math.sqrt(16)         # Square root: 4.0
math.ceil(3.1)        # Round up: 4
math.floor(3.9)       # Round down: 3
```

### Date and Time
```python
from datetime import datetime

now = datetime.now()
today = datetime.today().strftime('%Y-%m-%d')
```

---

## 💡 Tips for Success

1. **Practice regularly** - Code every day, even if just for 15 minutes
2. **Read error messages** - They usually tell you exactly what's wrong
3. **Use meaningful variable names** - `customer_name` is better than `cn`
4. **Comment your code** - Future you will thank you
5. **Test with small examples** - Before processing large files
6. **Keep it simple** - Write code that works first, optimize later

---

*This reference covers all concepts from Sessions 1-6. Bookmark this page for quick access while coding!* 