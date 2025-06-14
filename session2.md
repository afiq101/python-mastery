# Session 2: Smart Decision Making
**Control Flow - If/Else Statements**

:::info Session Information
**Duration:** 90 minutes  
**Prerequisites:** [Session 1: Python Fundamentals](/session1) completed  
**Goal:** Learn how to make your programs smart by making decisions  
**Skills:** Conditional logic, comparison operators, combining conditions
:::

---

## 🎯 Learning Objectives
By the end of this session, you will:
- ✅ Use `if` statements to make decisions
- ✅ Handle multiple choices with `elif` 
- ✅ Provide backup plans with `else`
- ✅ Compare values using comparison operators
- ✅ Combine conditions with `and` and `or`

---

# PART 1: YOUR FIRST DECISION 🤔

## 1.1 The `if` Statement

### Real Life Example:
"IF it's raining, THEN take an umbrella"

### Python Example:
```python
weather = input("Is it raining? (yes/no): ")

if weather == "yes":
    print("Take an umbrella!")
    print("Stay dry!")

print("Have a good day!")
```

**Key Points:**
- Use `==` to check if things are equal (not `=`)
- Everything after `:` that's indented happens IF the condition is true
- Code without indentation always runs

---

## 1.2 Understanding Indentation

### Why Indentation Matters:
```python
age = 16

if age >= 18:
    print("You can vote!")        # Only runs if age >= 18
    print("Democracy is important") # Only runs if age >= 18

print("Thanks for checking!")     # Always runs
```

**Rule:** Everything indented after `:` is part of the if statement.

---

# PART 2: COMPARISON OPERATORS 📊

## 2.1 Ways to Compare

```python
age = 25

# Equal to
if age == 25:
    print("You are exactly 25")

# Not equal to  
if age != 30:
    print("You are not 30")

# Greater than
if age > 18:
    print("You are an adult")

# Less than
if age < 65:
    print("You haven't retired yet")

# Greater than or equal to
if age >= 21:
    print("You can drink in the US")

# Less than or equal to
if age <= 100:
    print("You are not over 100")
```

---

## 2.2 Comparing Text

```python
name = input("What's your name? ")

if name == "Ana":
    print("Nice to meet you, Ana!")

# Case matters!
password = input("Enter password: ")
if password == "secret123":
    print("Access granted!")
else:
    print("Wrong password!")
```

**Important:** `"Ana"` and `"ana"` are different to Python!

---

# PART 3: MULTIPLE CHOICES 🔀

## 3.1 The `else` Statement

### Providing a Backup Plan:
```python
age = int(input("How old are you? "))

if age >= 18:
    print("You can vote!")
else:
    print("You're too young to vote")
    print("You can vote when you turn 18")

print("Thanks!")
```

**What happens:**
- IF condition is true → run the first block
- IF condition is false → run the else block
- Always run the unindented code

---

## 3.2 Multiple Conditions with `elif`

### When You Have Many Choices:
```python
grade = int(input("Enter your test score: "))

if grade >= 90:
    print("A - Excellent!")
elif grade >= 80:
    print("B - Good job!")
elif grade >= 70:
    print("C - Not bad")
elif grade >= 60:
    print("D - You passed")
else:
    print("F - Study harder next time")
```

**How it works:**
1. Check first condition
2. If false, check second condition  
3. If false, check third condition
4. Continue until one is true OR reach else

---

# PART 4: COMBINING CONDITIONS 🔗

## 4.1 Using `and`

### Both Conditions Must Be True:
```python
age = int(input("How old are you? "))
has_license = input("Do you have a driver's license? (yes/no): ")

if age >= 16 and has_license == "yes":
    print("You can drive!")
else:
    print("You cannot drive yet")
```

---

## 4.2 Using `or`

### At Least One Condition Must Be True:
```python
day = input("What day is it? ")

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")
    print("Time to relax!")
else:
    print("It's a weekday")
    print("Time to work!")
```

---

# PART 5: REAL-WORLD EXAMPLES 🌍

## 5.1 Login System
```python
username = input("Username: ")
password = input("Password: ")

if username == "admin" and password == "secret123":
    print("✅ Welcome, administrator!")
elif username == "user" and password == "password":
    print("✅ Welcome, user!")
else:
    print("❌ Invalid credentials!")
```

## 5.2 Weather Decision Maker
```python
temperature = int(input("Temperature (F): "))
is_raining = input("Is it raining? (yes/no): ")

if temperature > 75 and is_raining == "no":
    print("Perfect weather! Go to the park!")
elif temperature < 32 or is_raining == "yes":
    print("Stay inside today!")
else:
    print("It's okay to go out, but dress appropriately")
```

---

# 🎯 MINI-CHALLENGE: Grade Calculator

Create a program that:
1. Asks for student name
2. Asks for three test scores
3. Calculates the average
4. Assigns letter grade
5. Gives encouraging message

```python
# Your solution here!
name = input("Student name: ")

# Get three test scores
test1 = int(input("Test 1 score: "))
test2 = int(input("Test 2 score: "))
test3 = int(input("Test 3 score: "))

# Calculate average
average = (test1 + test2 + test3) / 3

print(f"\n{name}'s Results:")
print(f"Average: {average:.1f}")

# Assign letter grade
if average >= 90:
    letter = "A"
    message = "Outstanding work!"
elif average >= 80:
    letter = "B"  
    message = "Great job!"
elif average >= 70:
    letter = "C"
    message = "Good effort!"
elif average >= 60:
    letter = "D"
    message = "You can do better!"
else:
    letter = "F"
    message = "Let's work on improvement!"

print(f"Letter Grade: {letter}")
print(message)
```

---

# 📝 QUICK QUIZ

## Question 1:
What's the difference between `=` and `==`?

**Answer:** 
- `=` assigns a value: `name = "Ana"`
- `==` compares values: `if name == "Ana"`

## Question 2:
What will this print?
```python
x = 5
if x > 3:
    print("Big")
else:
    print("Small")
```

**Answer:** "Big" (because 5 > 3 is true)

## Question 3:
Fix this code:
```python
age = 20
if age >= 18
print("Adult")
```

**Answer:** Missing `:` and indentation:
```python
age = 20
if age >= 18:
    print("Adult")
```

---

# PART 5: COMMON MISTAKES AND FIXES 🔧

## Mistake 1: Using `=` Instead of `==`
```python
# ❌ Wrong
if name = "Ana":
    print("Hello")

# ✅ Right  
if name == "Ana":
    print("Hello")
```

## Mistake 2: Forgetting the Colon
```python
# ❌ Wrong
if age >= 18
    print("Adult")

# ✅ Right
if age >= 18:
    print("Adult")
```

## Mistake 3: Wrong Indentation
```python
# ❌ Wrong
if age >= 18:
print("Adult")

# ✅ Right
if age >= 18:
    print("Adult")
```

## Mistake 4: Case Sensitivity
```python
# ❌ These are different!
if answer == "Yes":  # User typed "yes"
    print("Great!")

# ✅ Better
answer = answer.lower()  # Convert to lowercase
if answer == "yes":
    print("Great!")
```

---

# 🏠 HOMEWORK

## Task 1: Movie Ticket Prices
Create a program that calculates movie ticket prices:
- Child (under 12): $8
- Student (12-17): $10  
- Adult (18-64): $15
- Senior (65+): $12

## Task 2: Login System
Create a simple login that:
- Asks for username and password
- Checks against stored values
- Gives appropriate messages
- Allows 3 attempts

## Task 3: Number Guessing Game
Create a program that:
- Has a secret number (you pick it)
- Asks user to guess
- Says "too high", "too low", or "correct!"

---

# 🔑 KEY TAKEAWAYS

1. **`if`** statements make programs smart
2. **Use `==` to compare** (not `=`)
3. **Indentation matters** - everything indented runs together
4. **`elif`** handles multiple conditions
5. **`else`** provides a backup plan
6. **`and`** means both conditions must be true
7. **`or`** means at least one condition must be true

---

# ✨ SESSION COMPLETE!

**Congratulations! You've mastered decision making:**
- [x] Making programs respond to different situations
- [x] Using if/else statements effectively
- [x] Comparing values with operators
- [x] Combining conditions logically
- [x] Handling multiple choices with elif
- [x] Debugging common mistakes

**Your programs are now intelligent! 🧠**

---

## 🎯 What's Next?

In **Session 3**, you'll learn about loops - how to repeat actions automatically, like checking every item in a list or asking a question until you get the right answer!

:::tip Ready to Continue?
[← Back to Session 1](/session1) | [Continue to Session 3: Loops & Automation →](/session3)

Or return to the [main training overview](/) to see your progress.
:::

---

*Session 2 Complete - Your programs can now think and decide! 🚀*