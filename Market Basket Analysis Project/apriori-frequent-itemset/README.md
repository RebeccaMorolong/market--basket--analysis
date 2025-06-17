# Apriori Frequent Itemset Mining

This project implements the Apriori algorithm for frequent itemset mining. The algorithm is designed to identify frequent itemsets in a dataset and generate association rules based on those itemsets.

## Project Structure

```
apriori-frequent-itemset
├── src
│   ├── apriori.ts          # Implements the Apriori algorithm
│   ├── dataset
│   │   └── sample-data.csv # Sample dataset for testing
│   ├── utils
│   │   └── index.ts        # Utility functions for data processing
│   └── types
│       └── index.ts        # TypeScript interfaces for data structures
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To run the Apriori algorithm, you can execute the `apriori.ts` file. Ensure that you have the sample dataset available in the `src/dataset` directory.

## Example

After setting up the project, you can use the following example to find frequent itemsets:

```typescript
import { Apriori } from './src/apriori';

const apriori = new Apriori();
const transactions = apriori.loadDataset('src/dataset/sample-data.csv');
const frequentItemsets = apriori.findFrequentItemsets(transactions, minSupport);
const associationRules = apriori.generateAssociationRules(frequentItemsets, minConfidence);
```

Replace `minSupport` and `minConfidence` with your desired thresholds.

## License

This project is licensed under the MIT License.