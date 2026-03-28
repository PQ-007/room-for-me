---
title: Search Engine хэрхэн ажилдаг вэ?
date: 2026-03-17
tags:
  - Algorithm
  - How
draft: true
language:
  - mn
---
![[Pasted image 20260325194219.png]]


# Tag Recommendation System Setup & Testing Guide

  

## 📋 **Step-by-Step Setup**

  

### 1. **Run Database Migrations (Required)**

Execute these SQL files **in order** in your Supabase SQL editor:

  

```sql

-- Step 1: Add new columns to existing tags table

-- File: migrations/add_tag_analytics.sql

```

  

```sql

-- Step 2: Create helper function for atomic updates

-- File: migrations/add_tag_usage_function.sql

```

  

### 2. **Load Sample Data**

Choose one of these options:

  

**Option A - Full Dataset (70+ tags):**

```sql

-- File: migrations/sample_tag_data.sql

-- Includes comprehensive programming languages, frameworks, AI/ML tags

```

  

**Option B - Minimal Dataset (20 tags):**

```sql

-- File: migrations/minimal_tag_data.sql

-- Quick testing with essential tags only

```

  

### 3. **Verify Setup**

```sql

-- File: test_tag_queries.sql

-- Run these queries to verify data loaded correctly

```

  

## 🧪 **Testing the Tag Recommendation System**

  

### **API Tests:**

```javascript

// Test single letter programming languages

fetch('/api/tags/suggestions?q=C&limit=5')

// Expected: C++, C#, CSS, C

  

fetch('/api/tags/suggestions?q=R&limit=5')

// Expected: R, RStats, React

  

fetch('/api/tags/suggestions?q=AI&limit=5')

// Expected: AI, Artificial Intelligence, Machine Learning

```

  

### **UI Tests:**

1. Navigate to article creation page

2. Type single letters: `C`, `R`, `Go`

3. Verify autocomplete dropdown appears with relevant suggestions

4. Select suggestions and verify tags are added correctly

  

### **Expected Behavior:**

  

#### **Query: "C"**

- ✅ C++ (0.90) - Programming variant

- ✅ C# (0.90) - Programming variant

- ✅ CSS (0.70) - Starts with C

- ✅ C (1.00) - Exact match

  

#### **Query: "R"**

- ✅ R (1.00) - Exact match

- ✅ RStats (0.90) - Programming variant

- ✅ React (0.70) - Starts with R

  

#### **Query: "AI"**

- ✅ AI (1.00) - Exact match

- ✅ Artificial Intelligence (0.85) - Semantic match

  

## 🔧 **Troubleshooting**

  

### **If API returns "Failed to fetch tags":**

1. Verify database migrations ran successfully

2. Check if `usage_count` and `last_used_at` columns exist:

   ```sql

   SELECT column_name FROM information_schema.columns

   WHERE table_name = 'tags' AND table_schema = 'public';

   ```

  

### **If no suggestions appear:**

1. Check browser network tab for API errors

2. Verify sample data was inserted:

   ```sql

   SELECT COUNT(*) FROM public.tags;

   ```

  

### **If single letters don't work:**

1. Verify the updated similarity service is deployed

2. Check that minimum character requirement was removed

  

## 📊 **Sample Data Included**

  

The sample data includes:

- **Programming Languages**: C, C++, C#, R, Python, JavaScript, Go, etc.

- **Web Technologies**: React, Vue, Angular, HTML, CSS, Node.js

- **AI/ML**: AI, Machine Learning, TensorFlow, PyTorch

- **Databases**: SQL, MySQL, PostgreSQL, MongoDB

- **Cloud/DevOps**: AWS, Docker, Kubernetes

- **And much more...**

  

Each tag has realistic usage counts and timestamps for testing the popularity-based sorting and usage tracking features.

  

## 🎯 **Success Criteria**

  

✅ Single letter queries return relevant programming language suggestions

✅ Similarity scoring prioritizes programming language variants

✅ Popular tags appear first in empty queries

✅ Usage counts display correctly in suggestions

✅ Autocomplete works smoothly with keyboard navigation

✅ Tags can be selected and added successfully

  

Your tag recommendation system is now ready to significantly improve tag consistency and user experience! 🚀