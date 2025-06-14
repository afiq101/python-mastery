# Session 4: Data Management with Lists & Functions
**Store Collections and Create Reusable Code**

:::info Session Information
**Duration:** 2 hours  
**Prerequisites:** [Session 1](/session1), [Session 2](/session2), and [Session 3](/session3) completed  
**Goal:** Learn to handle complex data collections and create organized, reusable code  
**Skills:** Lists operations, function creation, data processing, code organization
:::

---

## 🎯 Learning Objectives
By the end of this session, you will:
- ✅ Create and use lists to store multiple items
- ✅ Add, remove, and modify list items
- ✅ Loop through lists efficiently
- ✅ Write your own functions
- ✅ Pass information to functions and get results back

---

# PART 1: INTRODUCING LISTS 📝

## 1.1 Why Do We Need Lists?

### Without Lists (Messy):
```python
student1 = "Ana"
student2 = "Bob" 
student3 = "Carol"
student4 = "David"

print(student1)
print(student2)
print(student3)
print(student4)
```

### With Lists (Clean):
```python
students = ["Ana", "Bob", "Carol", "David"]

for student in students:
    print(student)
```

**Lists let us store many related items together!**

---

## 1.2 Creating Lists

### Basic List Creation:
```python
# List of names
names = ["Ana", "Bob", "Carol"]

# List of numbers
scores = [85, 92, 78, 95]

# List of mixed types
mixed = ["Ana", 25, True, 3.14]

# Empty list
empty_list = []
```

### Accessing List Items:
```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0])  # First item: "apple"
print(fruits[1])  # Second item: "banana"  
print(fruits[2])  # Third item: "cherry"

# Negative indexing (from the end)
print(fruits[-1])  # Last item: "cherry"
print(fruits[-2])  # Second to last: "banana"
```

**Important:** Lists start counting from 0, not 1!

---

# PART 2: WORKING WITH LISTS 🛠️

## 2.1 List Information

### Getting List Details:
```python
numbers = [10, 20, 30, 40, 50]

print(f"List length: {len(numbers)}")        # 5
print(f"First item: {numbers[0]}")           # 10
print(f"Last item: {numbers[-1]}")           # 50
print(f"All items: {numbers}")               # [10, 20, 30, 40, 50]
```

### Checking if Item Exists:
```python
fruits = ["apple", "banana", "cherry"]

if "banana" in fruits:
    print("We have bananas!")

if "orange" not in fruits:
    print("No oranges available")
```

---

## 2.2 Modifying Lists

### Adding Items:
```python
shopping_list = ["milk", "bread"]

# Add to the end
shopping_list.append("eggs")
print(shopping_list)  # ["milk", "bread", "eggs"]

# Add at specific position
shopping_list.insert(1, "butter")  
print(shopping_list)  # ["milk", "butter", "bread", "eggs"]
```

### Removing Items:
```python
colors = ["red", "blue", "green", "yellow"]

# Remove by value
colors.remove("blue")
print(colors)  # ["red", "green", "yellow"]

# Remove by position
removed_item = colors.pop(1)  # Removes "green"
print(f"Removed: {removed_item}")
print(colors)  # ["red", "yellow"]

# Remove last item
last_item = colors.pop()
print(f"Last item was: {last_item}")
```

### Changing Items:
```python
grades = [85, 90, 78, 92]

# Change one item
grades[2] = 88  # Change 78 to 88
print(grades)   # [85, 90, 88, 92]
```

---

# PART 3: LOOPS AND LISTS 🔄

## 3.1 Simple List Loops

### Basic Loop Through List:
```python
animals = ["cat", "dog", "bird", "fish"]

for animal in animals:
    print(f"I like {animal}s")
```

### Loop with Index Numbers:
```python
fruits = ["apple", "banana", "cherry"]

for i in range(len(fruits)):
    print(f"Item {i + 1}: {fruits[i]}")
```

**Output:**
```
Item 1: apple
Item 2: banana
Item 3: cherry
```

---

## 3.2 List Processing

### Calculate Total:
```python
prices = [12.99, 8.50, 15.75, 22.00]
total = 0

for price in prices:
    total = total + price

print(f"Total cost: ${total:.2f}")
```

### Find Maximum:
```python
scores = [85, 92, 78, 95, 88]
highest = scores[0]  # Start with first score

for score in scores:
    if score > highest:
        highest = score

print(f"Highest score: {highest}")
```

### Count Items:
```python
grades = ['A', 'B', 'A', 'C', 'B', 'A']
a_count = 0

for grade in grades:
    if grade == 'A':
        a_count = a_count + 1

print(f"Number of A grades: {a_count}")
```

---

# PART 4: FUNCTIONS - REUSABLE CODE BLOCKS 🔧

## 4.1 Why Functions?

### Without Functions (Repetitive):
```python
# Calculate area of rectangle 1
length1 = 10
width1 = 5
area1 = length1 * width1
print(f"Area 1: {area1}")

# Calculate area of rectangle 2  
length2 = 8
width2 = 3
area2 = length2 * width2
print(f"Area 2: {area2}")
```

### With Functions (Reusable):
```python
def calculate_area(length, width):
    area = length * width
    return area

# Use the function multiple times
area1 = calculate_area(10, 5)
area2 = calculate_area(8, 3)

print(f"Area 1: {area1}")
print(f"Area 2: {area2}")
```

---

## 4.2 Creating Functions

### Basic Function Structure:
```python
def function_name():
    # Code goes here
    print("This function runs!")

# Call the function
function_name()
```

### Function with Parameters:
```python
def greet_person(name):
    print(f"Hello, {name}!")
    print("Nice to meet you!")

# Call with different names
greet_person("Ana")
greet_person("Bob")
```

### Function with Return Value:
```python
def add_numbers(first, second):
    result = first + second
    return result

# Use the returned value
sum1 = add_numbers(5, 3)
sum2 = add_numbers(10, 7)

print(f"5 + 3 = {sum1}")
print(f"10 + 7 = {sum2}")
```

---

## 4.3 Functions with Lists

### Process a List:
```python
def calculate_average(numbers):
    if len(numbers) == 0:
        return 0
    
    total = 0
    for number in numbers:
        total = total + number
    
    average = total / len(numbers)
    return average

# Test it
test_scores = [85, 92, 78, 95, 88]
avg = calculate_average(test_scores)
print(f"Average score: {avg:.1f}")
```

### Find Items in List:
```python
def find_word(word_list, search_word):
    found_positions = []
    
    for i in range(len(word_list)):
        if word_list[i] == search_word:
            found_positions.append(i)
    
    return found_positions

# Test it
words = ["apple", "banana", "apple", "cherry", "apple"]
positions = find_word(words, "apple")
print(f"Found 'apple' at positions: {positions}")
```

---

# 🚀 ADVANCED EXERCISES

## Exercise 1: Contact Manager
```python
def add_contact(contact_list, name, phone):
    contact = {"name": name, "phone": phone}
    contact_list.append(contact)
    print(f"Added {name} to contacts")

def find_contact(contact_list, name):
    for contact in contact_list:
        if contact["name"].lower() == name.lower():
            return contact
    return None

def show_all_contacts(contact_list):
    if len(contact_list) == 0:
        print("No contacts found")
        return
    
    print("\nAll Contacts:")
    for i, contact in enumerate(contact_list):
        print(f"{i + 1}. {contact['name']} - {contact['phone']}")

# Test the contact manager
contacts = []
add_contact(contacts, "Ana", "555-1234")
add_contact(contacts, "Bob", "555-5678")
show_all_contacts(contacts)

found = find_contact(contacts, "ana")
if found:
    print(f"Found: {found['name']} - {found['phone']}")
```

## Exercise 2: Grade Book System
```python
def add_grade(student_grades, student_name, grade):
    if student_name not in student_grades:
        student_grades[student_name] = []
    
    student_grades[student_name].append(grade)
    print(f"Added grade {grade} for {student_name}")

def calculate_average(grades):
    if len(grades) == 0:
        return 0
    return sum(grades) / len(grades)

def show_student_info(student_grades, student_name):
    if student_name in student_grades:
        grades = student_grades[student_name]
        avg = calculate_average(grades)
        print(f"{student_name}'s grades: {grades}")
        print(f"Average: {avg:.2f}")
    else:
        print(f"No grades found for {student_name}")

# Test it
gradebook = {}
add_grade(gradebook, "Ana", 85)
add_grade(gradebook, "Ana", 92)
add_grade(gradebook, "Ana", 88)
show_student_info(gradebook, "Ana")
```

## Exercise 3: Number List Analyzer
```python
def get_number_list():
    numbers = []
    print("Enter numbers (type 'done' to finish):")
    
    while True:
        user_input = input("Enter a number: ")
        if user_input.lower() == "done":
            break
        try:
            number = float(user_input)
            numbers.append(number)
        except:
            print("Please enter a valid number or 'done'")
    
    return numbers

def find_even_odd(numbers):
    evens = []
    odds = []
    
    for number in numbers:
        if int(number) % 2 == 0:
            evens.append(number)
        else:
            odds.append(number)
    
    return evens, odds

# Use the functions
user_numbers = get_number_list()
even_numbers, odd_numbers = find_even_odd(user_numbers)

print(f"Even numbers: {even_numbers}")
print(f"Odd numbers: {odd_numbers}")
```

---

# 🎯 MINI-CHALLENGE: Personal Expense Tracker

Create a complete expense tracking system:

```python
def add_expense(expenses, category, amount, description):
    expense = {
        "category": category,
        "amount": amount,
        "description": description
    }
    expenses.append(expense)
    print(f"Added ${amount:.2f} expense for {category}")

def show_all_expenses(expenses):
    if len(expenses) == 0:
        print("No expenses recorded")
        return
    
    print("\nAll Expenses:")
    print("-" * 40)
    total = 0
    
    for i, expense in enumerate(expenses):
        print(f"{i + 1}. {expense['category']}: ${expense['amount']:.2f}")
        print(f"   {expense['description']}")
        total += expense['amount']
    
    print("-" * 40)
    print(f"Total: ${total:.2f}")

def expenses_by_category(expenses, category):
    category_expenses = []
    total = 0
    
    for expense in expenses:
        if expense['category'].lower() == category.lower():
            category_expenses.append(expense)
            total += expense['amount']
    
    if len(category_expenses) == 0:
        print(f"No expenses found for {category}")
    else:
        print(f"\n{category} Expenses:")
        for expense in category_expenses:
            print(f"  ${expense['amount']:.2f} - {expense['description']}")
        print(f"Total for {category}: ${total:.2f}")

# Test the system
my_expenses = []

# Add some expenses
add_expense(my_expenses, "Food", 25.50, "Lunch at cafe")
add_expense(my_expenses, "Transport", 15.00, "Bus fare")
add_expense(my_expenses, "Food", 45.75, "Grocery shopping")

# Show results
show_all_expenses(my_expenses)
expenses_by_category(my_expenses, "Food")
```

---

# 📝 QUICK QUIZ

## Question 1:
How do you access the first item in a list called `fruits`?

**Answer:** `fruits[0]`

## Question 2:
What's wrong with this function?
```python
def add_numbers(a, b):
    result = a + b
    # Missing something here
```

**Answer:** Missing `return result`

## Question 3:
How do you add an item to the end of a list?

**Answer:** `list_name.append(item)`

---

# 🏠 HOMEWORK

## Task 1: Contact Book
Create functions to:
- Add a contact (name and phone)
- Find a contact by name
- Show all contacts
- Delete a contact

## Task 2: Quiz System
Create a quiz system that:
- Stores questions and answers in lists
- Asks all questions
- Keeps score
- Shows final results

## Task 3: Temperature Converter
Create functions to:
- Convert Celsius to Kelvin
- Convert Kelvin to Celsius
- Process a list of temperatures
- Show conversion table

---

# 🔑 KEY TAKEAWAYS

1. **Lists store multiple related items** in order
2. **Lists start counting from 0** (not 1)
3. **append()** adds to the end, **insert()** adds at a position
4. **Functions make code reusable** and organized
5. **Parameters** let you pass information to functions
6. **return** sends results back from functions
7. **Combine lists and functions** for powerful programs

---

# ✨ SESSION COMPLETE!

**Congratulations! You've mastered data management:**
- [x] Creating and manipulating lists effectively
- [x] Processing collections of data with loops
- [x] Writing reusable functions with parameters
- [x] Organizing code into logical, maintainable blocks
- [x] Building complex data processing systems
- [x] Combining all Python fundamentals learned so far

**You're ready for real-world programming challenges! 🎉**

---

## 🎯 What's Next?

In **Session 5**, you'll finally apply everything to Excel automation using the pandas library - reading spreadsheets, filtering data, and creating reports. This is where your programming skills meet real-world business applications!

:::tip Ready to Continue?
[← Back to Session 3](/session3) | [Continue to Session 5: Excel Automation →](/session5)

Or return to the [main training overview](/) to see your progress.
:::

---

*Session 4 Complete - You're now a data management expert! 🚀*