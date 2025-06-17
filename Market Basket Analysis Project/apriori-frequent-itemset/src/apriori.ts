class Apriori {
    private transactions: string[][];
    private minSupport: number;

    constructor(transactions: string[][], minSupport: number) {
        this.transactions = transactions;
        this.minSupport = minSupport;
    }

    public findFrequentItemsets(): Map<string, number> {
        const itemCounts = new Map<string, number>();
        const numTransactions = this.transactions.length;

        // Count item occurrences
        for (const transaction of this.transactions) {
            const uniqueItems = new Set(transaction);
            for (const item of uniqueItems) {
                itemCounts.set(item, (itemCounts.get(item) || 0) + 1);
            }
        }

        // Filter items by minimum support
        const frequentItemsets = new Map<string, number>();
        for (const [item, count] of itemCounts.entries()) {
            if (count / numTransactions >= this.minSupport) {
                frequentItemsets.set(item, count);
            }
        }

        return frequentItemsets;
    }

    public generateAssociationRules(frequentItemsets: Map<string, number>, confidenceThreshold: number): Array<{ rule: string, confidence: number }> {
        const rules: Array<{ rule: string, confidence: number }> = [];
        const numTransactions = this.transactions.length;

        for (const [item, support] of frequentItemsets.entries()) {
            const itemset = item.split(',');
            for (const itemA of itemset) {
                const itemB = itemset.filter(i => i !== itemA).join(',');
                const supportAB = support;
                const supportA = frequentItemsets.get(itemA) || 0;

                if (supportA > 0) {
                    const confidence = supportAB / supportA;
                    if (confidence >= confidenceThreshold) {
                        rules.push({ rule: `${itemA} => ${itemB}`, confidence });
                    }
                }
            }
        }

        return rules;
    }
}

export default Apriori;