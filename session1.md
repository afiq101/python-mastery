# Session 1: Python Fundamentals - Your First Steps
**For Complete Beginners**

:::info Session Information
**Duration:** 90 minutes  
**Prerequisites:** None - start here if you're new to Python  
**Goal:** Learn the absolute basics of Python programming  
**Approach:** Small steps, lots of practice, no complex concepts
:::

---

## 🎯 Learning Objectives
By the end of this session, you will:
- ✅ Make Python display messages
- ✅ Get information from users  
- ✅ Store information in variables
- ✅ Work with different types of data
- ✅ Do basic math with Python

---

# PART 1: TALKING TO THE COMPUTER 💬

## 1.1 Making Python Say Things

### Your First Command: `print()`
```python
print("Hello World!")
```

**What happens:** Python displays the text on screen.

### Practice Together:
```python
print("My name is Ana")
print("I am learning Python")
print("This is fun!")
```

### Printing Numbers:
```python
print(42)
print(3.14)
```

**Key Point:** Text needs quotes `"like this"`, numbers don't.

---

## 1.2 Getting Information from Users

### The `input()` Command:
```python
name = input("What is your name? ")
print("Hello")
print(name)
```

**What happens:**
1. Python asks the question
2. User types an answer
3. Python stores the answer
4. We can use it later

### Try This:
```python
favorite_color = input("What is your favorite color? ")
print("I like")
print(favorite_color)
print("too!")
```

---

# PART 2: STORING INFORMATION 📦

## 2.1 Variables - Your Storage Boxes

### What is a Variable?
A variable is like a labeled box that holds information.

```python
age = 25
name = "Ana"
city = "New York"
```

### Rules for Variable Names:
✅ **Good names:**
- `name`
- `age`  
- `favorite_food`
- `my_score`

❌ **Bad names:**
- `2name` (can't start with number)
- `my-age` (no dashes)
- `print` (don't use Python words)

---

## 2.2 Types of Information

### 1. Text (Strings)
Always use quotes:
```python
first_name = "Ana"
last_name = "Smith"
message = "Good morning!"
```

### 2. Whole Numbers (Integers)
No quotes needed:
```python
age = 30
score = 100
year = 2024
```

### 3. Decimal Numbers (Floats)
No quotes needed:
```python
height = 5.6
price = 19.99
temperature = 98.6
```

### 4. True/False (Booleans)
Special values:
```python
is_sunny = True
is_raining = False
```

---

# PART 3: BASIC MATH 🔢

## 3.1 Calculator in Python

### Basic Operations:
```python
# Addition
result = 5 + 3
print(result)  # Shows: 8

# Subtraction  
result = 10 - 4
print(result)  # Shows: 6

# Multiplication
result = 6 * 7
print(result)  # Shows: 42

# Division
result = 15 / 3
print(result)  # Shows: 5.0
```

### Using Variables:
```python
first_number = 10
second_number = 5

sum_result = first_number + second_number
print(sum_result)  # Shows: 15
```

---

# PART 4: COMBINING TEXT AND NUMBERS 🔗

## 4.1 The Problem
```python
name = "Ana"
age = 25
print("My name is " + name + " and I am " + age)  # ERROR!
```

**Why error?** Can't combine text and numbers directly.

## 4.2 The Solution: Convert to Text
```python
name = "Ana"
age = 25
print("My name is " + name + " and I am " + str(age))
```

## 4.3 Better Way: F-Strings
```python
name = "Ana"
age = 25
print(f"My name is {name} and I am {age}")
```

**Much easier!** Put `f` before the quotes, use `{variable_name}` inside.

---

# 🚀 EXERCISES

## Exercise 1: About Me
**Goal:** Practice variables and printing

```python
# Fill in your information
name = "Your Name Here"
age = 0  # Your age
city = "Your City"

print(f"Hi! My name is {name}")
print(f"I am {age} years old")  
print(f"I live in {city}")
```

## Exercise 2: Simple Calculator
**Goal:** Practice math and variables

```python
# Get two numbers from user
first = input("Enter first number: ")
second = input("Enter second number: ")

# Convert to actual numbers
first = int(first)
second = int(second)

# Do math
sum_result = first + second
difference = first - second

print(f"{first} + {second} = {sum_result}")
print(f"{first} - {second} = {difference}")
```

## Exercise 3: Getting to Know You
**Goal:** Practice input and output

```python
name = input("What is your name? ")
hobby = input("What is your favorite hobby? ")
food = input("What is your favorite food? ")

print("Nice to meet you!")
print(f"Your name is {name}")
print(f"You like {hobby}")
print(f"Your favorite food is {food}")
```

---

# 🎯 MINI-CHALLENGE: Age Calculator

```python
# Ask for birth year
birth_year = input("What year were you born? ")

# Convert to number
birth_year = int(birth_year)

# Calculate age (assuming current year is 2024)
current_year = 2024
age = current_year - birth_year

print(f"You are {age} years old!")
```

---

# 📝 QUICK QUIZ

## Question 1:
What's wrong with this code?
```python
age = input("How old are you? ")
next_year = age + 1
```

**Answer:** Need to convert `age` to a number first: `age = int(age)`

## Question 2:
Fill in the blank:
```python
name = "Ana"
print(f"Hello ____")  # Should print "Hello Ana"
```

**Answer:** `{name}`

## Question 3:
Which variable name is correct?
- a) `2age`
- b) `my-name`  
- c) `favorite_color`
- d) `print`

**Answer:** c) `favorite_color`

---

# 🏠 HOMEWORK

## Practice Tasks:

### Task 1: Personal Information
Write a program that asks for:
- Your name
- Your age  
- Your favorite color
Then displays it all nicely.

### Task 2: Simple Math Quiz
Write a program that:
- Asks for two numbers
- Shows addition, subtraction, and multiplication results

### Task 3: Temperature Converter  
Write a program that:
- Asks for temperature in Celsius
- Converts to Kelvin using: `C + 273.15`
- Shows the result

---

# 🔑 KEY TAKEAWAYS

1. **`print()`** shows information to users
2. **`input()`** gets information from users  
3. **Variables** store information for later use
4. **Text** needs quotes, **numbers** don't
5. **Convert** text to numbers when doing math: `int()` or `float()`
6. **F-strings** make combining text and variables easy

---

# ✨ SESSION COMPLETE!

**Congratulations! You've learned:**
- [x] How to display messages
- [x] How to get user input  
- [x] How to store data in variables
- [x] Different types of data
- [x] Basic math operations
- [x] How to combine text and numbers

**Great job! You're now thinking like a programmer! 🎉**

---

## 🎯 What's Next?

In **Session 2**, you'll learn how to make your programs smart by making decisions with `if/else` statements - like "if the user enters a number bigger than 100, do this, otherwise do that."

:::tip Ready to Continue?
[Continue to Session 2: Making Decisions →](/session2)

Or return to the [main training overview](/) to see your progress.
:::

---

*Session 1 Complete - You're on your way to Python mastery! 🚀*