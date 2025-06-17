export interface Transaction {
    id: string;
    items: string[];
}

export interface Itemset {
    items: string[];
    support: number;
}