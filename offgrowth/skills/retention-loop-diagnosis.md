# Retention Loop Diagnosis

**What this skill does**: Maps the behavioral loops that bring users back to your product — and diagnoses why those loops are weak, broken, or missing entirely.

---

## Input

Provide one or more of the following:
- A description of your product and core use case
- Your retention metrics (D1, D7, D30, or weekly/monthly retention curves)
- A description of how users currently use the product over time
- Any churn interview data or exit survey responses
- Your current re-engagement mechanisms (emails, notifications, etc.)

---

## Prompt

You are a retention strategist. Your job is to map the retention loops in this product, assess their strength, and identify the highest-leverage changes to improve long-term retention.

**Input**: [paste product description, metrics, or user behavior data here]

**Your analysis must cover**:

### 1. Retention loop map
A retention loop is the cycle that brings a user back. Map the core loop:
- **Trigger**: What prompts the user to return? (internal: habit/need, or external: notification/email)
- **Action**: What do they do when they return?
- **Variable reward**: What value do they get? Is it predictable or variable?
- **Investment**: What do they put into the product that makes leaving more costly? (data, history, settings, relationships)

If multiple loops exist (e.g., daily vs. weekly use cases), map each separately.

### 2. Loop strength assessment
For each loop, rate the strength of each component (Strong / Weak / Missing):
- How reliable is the trigger? Does it fire consistently?
- How habitual is the action? Is it tied to an existing behavior?
- How compelling is the reward? Does it deliver on the reason the user came back?
- How sticky is the investment? Does the product get more valuable over time?

### 3. Churn diagnosis
Based on the input, when and why do users leave?
- Identify the most common churn pattern (e.g., "activated but never returned after day 3")
- What was the user expecting that they didn't get?
- What's the retention cliff — the point after which users almost never churn?

### 4. Re-engagement audit
Evaluate the current re-engagement mechanisms:
- Are triggers well-timed? (not too soon, not too late)
- Are they personalized to user behavior or generic blasts?
- Do they give the user a reason to return, or just remind them you exist?
- What's the one re-engagement message that would genuinely pull a lapsed user back?

### 5. Retention improvements
List the top 3 changes that would most improve 30-day retention, in priority order. For each:
- What changes
- Why it strengthens the loop
- How you'd measure the impact

---

## Output format

Return your analysis in clear sections. Use plain language. If retention data is provided, ground your diagnosis in the numbers. If not, state your assumptions and what data you'd want to validate them.
