# Session 5: Excel Automation with Python
**Transform Your Python Skills into Excel Superpowers**

:::info Session Information
**Duration:** 2.5 hours  
**Prerequisites:** [Sessions 1-4](/session1) completed - this builds on all previous concepts  
**Goal:** Apply Python skills to read, analyze, and automate Excel files  
**Skills:** Pandas library, data analysis, Excel automation, professional reporting
:::

---

## 🎯 Learning Objectives
By the end of this session, you will:
- ✅ Load Excel files into Python using pandas
- ✅ Explore and understand your data
- ✅ Filter and sort data like Excel (but better!)
- ✅ Perform calculations on columns
- ✅ Save results back to Excel files

---

# PART 1: SETTING UP FOR SUCCESS 📁

## 1.1 Create Sample Data First

Before we start, let's create some Excel files to work with. **Run this code to create sample data**:

```python
import pandas as pd

# Create sample employee data
employee_data = {
    'Name': ['Ana Martinez', 'Bob Johnson', 'Carol Smith', 'David Wilson', 'Emma Brown'],
    'Age': [25, 30, 35, 28, 32],
    'Department': ['Sales', 'IT', 'HR', 'Sales', 'IT'],
    'Salary': [50000, 65000, 55000, 52000, 68000],
    'Start_Date': ['2022-01-15', '2021-03-10', '2020-07-22', '2022-05-08', '2021-11-30']
}

# Save to Excel
df_employees = pd.DataFrame(employee_data)
df_employees.to_excel('employee_data.xlsx', index=False)
print("✅ Created employee_data.xlsx")

# Create sample sales data
sales_data = {
    'Date': ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
    'Product': ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Tablet'],
    'Sales_Rep': ['Ana', 'Bob', 'Ana', 'Carol', 'Bob'],
    'Amount': [1200, 25, 75, 300, 450],
    'Region': ['North', 'South', 'North', 'East', 'West']
}

df_sales = pd.DataFrame(sales_data)
df_sales.to_excel('sales_data.xlsx', index=False)
print("✅ Created sales_data.xlsx")

print("\n🎉 Sample files created! Now we can start learning pandas.")
```

**Run this first** - you'll see two new Excel files created! ✅

---

# PART 2: WELCOME TO PANDAS 🐼

## 2.1 What is Pandas?

Pandas is Python's Excel replacement - but more powerful!

### Installing Pandas:
```bash
pip install pandas openpyxl
```

### Your First Pandas Program:
```python
import pandas as pd

# Load the employee data we just created
df = pd.read_excel('employee_data.xlsx')
print("Our employee data:")
print(df)
```

**Output:**
```
         Name  Age Department  Salary  Start_Date
0  Ana Martinez   25      Sales   50000  2022-01-15
1   Bob Johnson   30         IT   65000  2021-03-10
2   Carol Smith   35         HR   55000  2020-07-22
3  David Wilson   28      Sales   52000  2022-05-08
4    Emma Brown   32         IT   68000  2021-11-30
```

---

## 2.2 Loading Excel Files

### Reading an Excel File:
```python
import pandas as pd

# Load your Excel file
df = pd.read_excel('sales_data.xlsx')

# Quick look at your data
print("First 5 rows:")
print(df.head())

print(f"\nYour file has {len(df)} rows and {len(df.columns)} columns")
print(f"Column names: {list(df.columns)}")
```

### Reading Specific Sheets:
```python
# If you have multiple sheets, you can specify which one
df_employees = pd.read_excel('employee_data.xlsx', sheet_name='Sheet1')  # Default sheet
df_sales = pd.read_excel('sales_data.xlsx')  # Our sales data

print("Sales data:")
print(df_sales.head())
```

---

# PART 3: EXPLORING YOUR DATA 🔍

## 3.1 Getting Data Information

### Basic Data Info:
```python
import pandas as pd

# Load data
df = pd.read_excel('employee_data.xlsx')

# Get basic information
print("Dataset shape:", df.shape)  # (rows, columns)
print("\nColumn information:")
print(df.info())

print("\nFirst few rows:")
print(df.head())

print("\nLast few rows:")
print(df.tail())

print("\nBasic statistics:")
print(df.describe())
```

### Column Operations:
```python
# Work with individual columns
print("All names:")
print(df['Name'])

print("\nUnique departments:")
print(df['Department'].unique())

print("\nValue counts:")
print(df['Department'].value_counts())
```

---

## 3.2 Data Cleaning Basics

### Handling Missing Data:
```python
# Check for missing values
print("Missing values per column:")
print(df.isnull().sum())

# Remove rows with missing values
df_clean = df.dropna()

# Fill missing values
df['Salary'] = df['Salary'].fillna(0)  # Replace missing salaries with 0
df['Department'] = df['Department'].fillna('Unknown')  # Replace missing departments
```

### Basic Data Cleaning:
```python
# Remove extra spaces
df['Name'] = df['Name'].str.strip()

# Convert text to lowercase
df['Department'] = df['Department'].str.lower()

# Convert data types
df['Salary'] = pd.to_numeric(df['Salary'], errors='coerce')  # Convert to numbers
```

---

# PART 4: FILTERING AND SORTING 📊

## 4.1 Filtering Data (Like Excel Filters)

### Simple Filters:
```python
# People in Sales department
sales_team = df[df['Department'] == 'Sales']
print("Sales team:")
print(sales_team)

# People earning more than 55000
high_earners = df[df['Salary'] > 55000]
print("\nHigh earners:")
print(high_earners)

# People younger than 30
young_employees = df[df['Age'] < 30]
print("\nYoung employees:")
print(young_employees)
```

### Multiple Conditions:
```python
# Sales people earning more than 50000
sales_high_earners = df[(df['Department'] == 'Sales') & (df['Salary'] > 50000)]

# People in Sales OR IT
sales_or_it = df[(df['Department'] == 'Sales') | (df['Department'] == 'IT')]

# People NOT in HR
not_hr = df[df['Department'] != 'HR']
```

---

## 4.2 Sorting Data

### Basic Sorting:
```python
# Sort by age (youngest first)
df_sorted = df.sort_values('Age')
print("Sorted by age:")
print(df_sorted)

# Sort by salary (highest first)
df_sorted = df.sort_values('Salary', ascending=False)
print("Sorted by salary (highest first):")
print(df_sorted)
```

### Multi-level Sorting:
```python
# Sort by department, then by salary within each department
df_sorted = df.sort_values(['Department', 'Salary'], ascending=[True, False])
print("Sorted by department, then by salary:")
print(df_sorted)
```

---

# PART 5: CALCULATIONS AND ANALYSIS 📈

## 5.1 Basic Calculations

### Column Statistics:
```python
# Basic statistics for a column
print("Salary statistics:")
print(f"Average: ${df['Salary'].mean():,.2f}")
print(f"Median: ${df['Salary'].median():,.2f}")
print(f"Highest: ${df['Salary'].max():,.2f}")
print(f"Lowest: ${df['Salary'].min():,.2f}")
print(f"Total: ${df['Salary'].sum():,.2f}")
```

### Group Analysis:
```python
# Average salary by department
dept_stats = df.groupby('Department')['Salary'].agg(['mean', 'count', 'sum'])
print("Department statistics:")
print(dept_stats)

# Multiple statistics
analysis = df.groupby('Department').agg({
    'Salary': ['mean', 'max', 'min'],
    'Age': ['mean', 'count']
})
print("\nDetailed analysis:")
print(analysis)
```

---

## 5.2 Creating New Columns

### Simple Calculations:
```python
# Calculate annual bonus (10% of salary)
df['Bonus'] = df['Salary'] * 0.10

# Calculate total compensation
df['Total_Comp'] = df['Salary'] + df['Bonus']

# Age categories
df['Age_Group'] = df['Age'].apply(lambda x: 'Young' if x < 30 else ('Middle' if x < 50 else 'Senior'))

print("Data with new columns:")
print(df[['Name', 'Salary', 'Bonus', 'Total_Comp', 'Age_Group']])
```

---

# PART 6: SAVING YOUR WORK 💾

## 6.1 Excel Output

### Save to Excel:
```python
# Save to a new Excel file
df.to_excel('processed_data.xlsx', index=False)

# Save multiple sheets
with pd.ExcelWriter('employee_report.xlsx') as writer:
    df.to_excel(writer, sheet_name='All_Employees', index=False)
    
    # Sales team only
    sales_df = df[df['Department'] == 'Sales']
    sales_df.to_excel(writer, sheet_name='Sales_Team', index=False)
    
    # Summary statistics
    summary = df.groupby('Department')['Salary'].agg(['mean', 'count', 'sum'])
    summary.to_excel(writer, sheet_name='Department_Summary')

print("✅ Report saved to 'employee_report.xlsx'")
```

---

# 🚀 COMPLETE PROJECT: Sales Report Generator

Let's build a complete automated reporting system:

```python
import pandas as pd
import os
from datetime import datetime

def load_sales_data(filename):
    """Load and validate sales data"""
    try:
        df = pd.read_excel(filename)
        print(f"✅ Loaded {len(df)} sales records")
        return df
    except FileNotFoundError:
        print("❌ File not found! Creating sample data...")
        return create_sample_data()

def create_sample_data():
    """Create sample sales data for testing"""
    import random
    from datetime import datetime, timedelta
    
    products = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'Tablet']
    reps = ['John', 'Sarah', 'Mike', 'Lisa', 'Tom']
    regions = ['North', 'South', 'East', 'West']
    
    data = []
    start_date = datetime(2024, 1, 1)
    
    for i in range(50):
        date = start_date + timedelta(days=random.randint(0, 30))
        data.append({
            'Date': date.strftime('%Y-%m-%d'),
            'Product': random.choice(products),
            'Sales_Rep': random.choice(reps),
            'Amount': random.randint(20, 1500),
            'Region': random.choice(regions)
        })
    
    return pd.DataFrame(data)

def analyze_sales(df):
    """Perform sales analysis"""
    print("\n📊 SALES ANALYSIS REPORT")
    print("=" * 40)
    
    # Overall statistics
    total_sales = df['Amount'].sum()
    avg_sale = df['Amount'].mean()
    num_transactions = len(df)
    
    print(f"Total Sales: ${total_sales:,.2f}")
    print(f"Average Sale: ${avg_sale:.2f}")
    print(f"Number of Transactions: {num_transactions}")
    
    # Top performers
    print(f"\n🏆 TOP SALES REPS:")
    rep_performance = df.groupby('Sales_Rep')['Amount'].sum().sort_values(ascending=False)
    for rep, amount in rep_performance.head(3).items():
        print(f"  {rep}: ${amount:,.2f}")
    
    # Regional performance
    print(f"\n🌍 SALES BY REGION:")
    regional_sales = df.groupby('Region')['Amount'].sum().sort_values(ascending=False)
    for region, amount in regional_sales.items():
        print(f"  {region}: ${amount:,.2f}")
    
    # Product performance
    print(f"\n📦 TOP PRODUCTS:")
    product_sales = df.groupby('Product')['Amount'].sum().sort_values(ascending=False)
    for product, amount in product_sales.head(3).items():
        print(f"  {product}: ${amount:,.2f}")

def create_detailed_report(df):
    """Create detailed Excel report"""
    
    # Create summary data
    rep_summary = df.groupby('Sales_Rep').agg({
        'Amount': ['sum', 'mean', 'count']
    }).round(2)
    
    regional_summary = df.groupby('Region').agg({
        'Amount': ['sum', 'mean', 'count']
    }).round(2)
    
    product_summary = df.groupby('Product').agg({
        'Amount': ['sum', 'mean', 'count']
    }).round(2)
    
    # Save to Excel with multiple sheets
    with pd.ExcelWriter('sales_report.xlsx') as writer:
        df.to_excel(writer, sheet_name='Raw_Data', index=False)
        rep_summary.to_excel(writer, sheet_name='Rep_Summary')
        regional_summary.to_excel(writer, sheet_name='Regional_Summary')
        product_summary.to_excel(writer, sheet_name='Product_Summary')
    
    print("✅ Detailed report saved to 'sales_report.xlsx'")

# Main program
def main():
    print("🚀 SALES REPORT GENERATOR")
    print("=" * 30)
    
    # Load data
    filename = input("Enter Excel filename (or press Enter for sample data): ")
    if filename.strip() == "":
        df = create_sample_data()
    else:
        df = load_sales_data(filename)
    
    # Show basic info
    print(f"\nDataset loaded: {df.shape[0]} rows, {df.shape[1]} columns")
    print("\nFirst few records:")
    print(df.head())
    
    # Perform analysis
    analyze_sales(df)
    
    # Create detailed report
    create_report = input("\nCreate detailed Excel report? (y/n): ")
    if create_report.lower() == 'y':
        create_detailed_report(df)
    
    print("\n🎉 Analysis complete!")

# Run the program
if __name__ == "__main__":
    main()
```

---

# 📝 ASSESSMENT

## Question 1: Code Reading
What does this code do?
```python
high_sales = df[df['Amount'] > 1000]['Sales_Rep'].unique()
```

**Answer:** Gets unique sales rep names who made sales over $1000

## Question 2: Data Analysis
Given this data, what would `df.groupby('Department')['Salary'].mean()` return?
```
Name    Department  Salary
Ana     Sales       50000
Bob     Sales       52000  
Carol   IT          60000
```

**Answer:** Average salary by department (Sales: 51000, IT: 60000)

## Question 3: Problem Solving
How would you find all rows where the product is "Laptop" AND the amount is greater than 1000?

**Answer:** `df[(df['Product'] == 'Laptop') & (df['Amount'] > 1000)]`

---

# 🏠 HOMEWORK

## Task 1: Personal Finance Tracker
Create a program that:
- Loads expense data from Excel
- Categorizes expenses
- Shows monthly spending by category
- Identifies highest expense categories
- Saves summary report

## Task 2: Inventory Manager
Create a system that:
- Tracks product inventory
- Identifies low stock items
- Calculates total inventory value
- Shows best and worst selling products

## Task 3: Employee Report Generator
Create a program that:
- Processes employee data
- Calculates department statistics
- Identifies top performers
- Creates management reports

---

# 🔑 KEY TAKEAWAYS

1. **Pandas is Python's Excel** - more powerful and flexible
2. **DataFrames are like spreadsheets** you can manipulate with code
3. **Filtering with conditions** is like Excel filters but more precise
4. **Groupby operations** provide powerful analysis capabilities
5. **Always explore your data first** with `.head()`, `.info()`, `.describe()`
6. **Save your work** to Excel files for sharing with others

---

# ✨ SESSION COMPLETE!

**Congratulations! You've mastered Excel automation:**
- [x] Loading and exploring Excel files with pandas
- [x] Filtering and sorting data programmatically
- [x] Performing complex calculations and analysis
- [x] Creating new columns and transforming data
- [x] Generating professional reports and summaries
- [x] Saving results in organized Excel formats

**You're now ready to automate real Excel workflows! 🎉**

---

## 🎯 What's Next?

In **Session 6**, our final session, you'll build a complete project that combines everything you've learned - an automated report generator that processes multiple Excel files and creates professional reports. This is your capstone project!

:::tip Ready to Continue?
[← Back to Session 4](/session4) | [Continue to Session 6: Complete Project →](/session6)

Or return to the [main training overview](/) to see your progress.
:::

---

*Session 5 Complete - You're now an Excel automation expert! 🚀*