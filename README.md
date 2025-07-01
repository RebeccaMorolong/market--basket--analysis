# Market Basket Analysis Project

This project performs Market Basket Analysis using the Apriori algorithm to discover association rules and frequent itemsets from transactional data. The goal is to uncover product combinations that frequently co-occur in transactions, which can be used for recommendations, promotions, and inventory management.

## Features

- Data cleaning and preprocessing
- One-hot encoding of transaction data
- Frequent itemset mining using Apriori (with support for `low_memory` mode)

# Market Basket Analysis

**Author:** Rebecca Morolong  
**Project Date:** [Add date]  
**Language & Tools:** Python, Jupyter Notebook, pandas, Efficient‑Apriori, MLxtend, matplotlib

---

## 🚀 Project Overview

This project implements Market Basket Analysis (MBA) on transactional data. By leveraging the Apriori algorithm and association rule mining, it uncovers meaningful item co-occurrence patterns. It includes:

- **Data ingestion** & **cleaning**  
- **One-hot encoding** transactions into item matrices  
- **Frequent itemset mining** via apriori  
- **Association rule extraction** and filtering (by support/confidence/lift)  
- **Visualization** of results for interpretability

---

## 🧠 Insights & Findings

After running association rule mining with recommended thresholds, the analysis surfaced several compelling rules:

1. **Unexpected item bundles.**  
   - e.g., {item A, item B} → item C, with high support and lift, indicating stronger-than-random associations.

2. **Cross-category affinity.**  
   - Combinations like {cereals, yogurt} → whole milk show cross-category purchasing trends.

3. **Bundling opportunities.**  
   - Products frequently bought together could be promoted in bundles or along shared shelf space.

4. **Targeted promotional highlights.**  
   - High-confidence rules (e.g., 0.8+) point to prime candidates for cross-sell.

5. **Channel-specific patterns** *(if geographic data is included)*  
   - For example, German transactions show popularity of product bundles that differ from overall trends.

These findings can guide business decisions: optimize store layout, design promotional bundles, boost targeted marketing, and enhance recommendation engines.

---

## 🛠 Usage Instructions

1. Clone this repo:
   ```bash
   git clone https://github.com/RebeccaMorolong/market--basket--analysis.git


## References

- [mlxtend documentation](http://rasbt.github.io/mlxtend/)
- [Market Basket Analysis (Wikipedia)](https://en.wikipedia.org/wiki/Market_basket_analysis)

## License

This project is licensed under the
