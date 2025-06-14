# Session 3: Loops & Automation
**Eliminate Repetitive Tasks with For and While Loops**

:::info Session Information
**Duration:** 90 minutes  
**Prerequisites:** [Session 1](/session1) and [Session 2](/session2) completed  
**Goal:** Learn how to repeat actions efficiently and automate repetitive tasks  
**Skills:** For loops, while loops, loop control, automation patterns
:::

---

## 🎯 Learning Objectives
By the end of this session, you will:
- ✅ Use `for` loops to repeat actions a specific number of times
- ✅ Use `while` loops to repeat until a condition is met
- ✅ Work with ranges and lists
- ✅ Control loops with `break` and `continue`
- ✅ Avoid infinite loops

---

# PART 1: THE `FOR` LOOP 🔄

## 1.1 Why Do We Need Loops?

### Without Loops (Repetitive and Boring):
```python
print("Welcome!")
print("Welcome!")
print("Welcome!")
print("Welcome!")
print("Welcome!")
```

### With Loops (Smart and Efficient):
```python
for i in range(5):
    print("Welcome!")
```

**Both do the same thing, but the loop is much better!**

---

## 1.2 Understanding `range()`

### Basic Range:
```python
# Print numbers 0 to 4
for number in range(5):
    print(number)
```

**Output:**
```
0
1
2
3
4
```

### Range with Start and Stop:
```python
# Print numbers 1 to 5
for number in range(1, 6):
    print(number)
```

**Output:**
```
1
2
3
4
5
```

### Range with Steps:
```python
# Print even numbers
for number in range(0, 11, 2):
    print(number)
```

**Output:**
```
0
2
4
6
8
10
```

---

# PART 2: PRACTICAL FOR LOOPS 💪

## 2.1 Counting and Calculating

### Sum Numbers:
```python
total = 0
for number in range(1, 6):
    total = total + number
    print(f"Adding {number}, total is now {total}")

print(f"Final total: {total}")
```

### Multiplication Table:
```python
number = int(input("Which multiplication table? "))

for i in range(1, 11):
    result = number * i
    print(f"{number} x {i} = {result}")
```

---

## 2.2 Looping Through Text

### Print Each Letter:
```python
name = "Ana"
for letter in name:
    print(letter)
```

**Output:**
```
A
n
a
```

### Count Vowels:
```python
word = input("Enter a word: ")
vowel_count = 0

for letter in word:
    if letter.lower() in "aeiou":
        vowel_count = vowel_count + 1
        print(f"Found vowel: {letter}")

print(f"Total vowels: {vowel_count}")
```

---

# PART 3: THE `WHILE` LOOP 🔁

## 3.1 When to Use While Loops

Use `while` when you don't know exactly how many times to repeat.

### Basic While Loop:
```python
count = 1
while count <= 5:
    print(f"Count is {count}")
    count = count + 1

print("Done!")
```

**Important:** Always update the variable, or the loop runs forever!

---

## 3.2 User Input with While Loops

### Keep Asking Until Correct:
```python
password = ""
while password != "secret":
    password = input("Enter password: ")
    if password != "secret":
        print("Wrong! Try again.")

print("Access granted!")
```

### Menu System:
```python
choice = ""
while choice != "quit":
    print("\nMenu:")
    print("1. Say hello")
    print("2. Tell a joke")  
    print("Type 'quit' to exit")
    
    choice = input("Your choice: ")
    
    if choice == "1":
        print("Hello there!")
    elif choice == "2":
        print("Why don't scientists trust atoms? Because they make up everything!")
    elif choice == "quit":
        print("Goodbye!")
    else:
        print("Invalid choice!")
```

---

# PART 4: LOOP CONTROL 🎛️

## 4.1 Breaking Out of Loops

### Using `break`:
```python
# Find the first even number
for number in range(1, 10):
    if number % 2 == 0:
        print(f"First even number: {number}")
        break  # Exit the loop immediately
```

### Safe Input with Break:
```python
while True:
    age = input("Enter your age (or 'quit'): ")
    
    if age.lower() == "quit":
        break
    
    try:
        age = int(age)
        if age < 0:
            print("Age cannot be negative!")
        else:
            print(f"You are {age} years old")
            break
    except ValueError:
        print("Please enter a valid number!")
```

---

## 4.2 Skipping Iterations

### Using `continue`:
```python
# Print odd numbers only
for number in range(1, 11):
    if number % 2 == 0:  # If even
        continue  # Skip the rest and go to next iteration
    print(number)
```

**Output:** 1, 3, 5, 7, 9

### Advanced Example:
```python
# Print numbers 1-10, but skip 5
for number in range(1, 11):
    if number == 5:
        continue  # Skip the rest and go to next iteration
    print(number)
```

**Output:** 1, 2, 3, 4, 6, 7, 8, 9, 10 (no 5!)

---

# 🚀 EXERCISES

## Exercise 1: Countdown Timer
```python
# Countdown from 10 to 1
for number in range(10, 0, -1):
    print(number)
print("Blast off! 🚀")
```

## Exercise 2: Password Strength Checker
```python
password = input("Enter a password: ")
score = 0

print("Checking password strength...")

# Check length
if len(password) >= 8:
    score = score + 1
    print("✅ Long enough")
else:
    print("❌ Too short")

# Check for numbers
has_number = False
for char in password:
    if char.isdigit():
        has_number = True
        break

if has_number:
    score = score + 1
    print("✅ Contains numbers")
else:
    print("❌ No numbers found")

# Check for uppercase
has_upper = False
for char in password:
    if char.isupper():
        has_upper = True
        break

if has_upper:
    score = score + 1
    print("✅ Contains uppercase")
else:
    print("❌ No uppercase letters")

print(f"Password score: {score}/3")
```

## Exercise 3: Number Guessing Game
```python
import random

secret_number = random.randint(1, 100)
attempts = 0
max_attempts = 7

print("I'm thinking of a number between 1 and 100!")
print(f"You have {max_attempts} attempts.")

while attempts < max_attempts:
    guess = int(input("Your guess: "))
    attempts = attempts + 1
    
    if guess == secret_number:
        print(f"🎉 Correct! You won in {attempts} attempts!")
        break
    elif guess < secret_number:
        print("Too low!")
    else:
        print("Too high!")
    
    remaining = max_attempts - attempts
    if remaining > 0:
        print(f"You have {remaining} attempts left.")
    else:
        print(f"Game over! The number was {secret_number}")
```

---

# 🎯 MINI-CHALLENGE: Times Table Generator

Create a program that:
1. Asks which times table to generate
2. Asks how high to go (1-12, 1-20, etc.)
3. Displays the full table
4. Asks if user wants another table

```python
while True:
    # Get user input
    table = int(input("Which times table? "))
    max_num = int(input("Up to what number? "))
    
    print(f"\n{table} Times Table:")
    print("=" * 20)
    
    # Generate the table
    for i in range(1, max_num + 1):
        result = table * i
        print(f"{table} x {i:2} = {result:3}")
    
    # Ask if they want another
    again = input("\nWant another table? (yes/no): ")
    if again.lower() != "yes":
        break

print("Thanks for using the times table generator!")
```

---

# 📝 QUICK QUIZ

## Question 1:
How many times will this loop run?
```python
for i in range(3, 8):
    print(i)
```

**Answer:** 5 times (3, 4, 5, 6, 7)

## Question 2:
What's wrong with this while loop?
```python
x = 1
while x <= 5:
    print(x)
```

**Answer:** Missing `x = x + 1` - it will run forever!

## Question 3:
What does this code do?
```python
for i in range(5):
    if i == 3:
        continue
    print(i)
```

**Answer:** Prints 0, 1, 2, 4 (skips 3)

---

# 🏠 HOMEWORK

## Task 1: Sum Calculator
Create a program that:
- Asks for numbers until user enters 0
- Adds all numbers together  
- Shows the total and count

## Task 2: Pattern Maker
Create a program that prints patterns:
```
*
**
***
****
*****
```

## Task 3: Grade Analyzer  
Create a program that:
- Asks for student grades until user enters -1
- Calculates average
- Shows highest and lowest grades
- Counts how many A's, B's, etc.

---

# 🔑 KEY TAKEAWAYS

1. **For loops** repeat a specific number of times
2. **While loops** repeat until a condition becomes false
3. **range()** generates sequences of numbers
4. **break** exits a loop immediately
5. **continue** skips to the next iteration
6. **Always update your while loop variable** to avoid infinite loops
7. **Loops save time and reduce repetitive code**

---

# ✨ SESSION COMPLETE!

**Congratulations! You've mastered automation:**
- [x] Automating repetitive tasks with for loops
- [x] Creating dynamic loops with while loops
- [x] Controlling loop behavior with break/continue
- [x] Processing text and numbers efficiently
- [x] Building interactive programs with menus
- [x] Avoiding common loop pitfalls

**You can now automate anything! 🤖**

---

## 🎯 What's Next?

In **Session 4**, you'll learn about lists and functions - how to store multiple pieces of information and create reusable chunks of code that make your programs more powerful and organized!

:::tip Ready to Continue?
[← Back to Session 2](/session2) | [Continue to Session 4: Lists & Functions →](/session4)

Or return to the [main training overview](/) to see your progress.
:::

---

*Session 3 Complete - You're now an automation expert! 🚀*