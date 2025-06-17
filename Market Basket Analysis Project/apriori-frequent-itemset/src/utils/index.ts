import fs from 'fs';
import path from 'path';
import csvParser from 'csv-parser';

export const loadDataset = (filePath: string): Promise<string[][]> => {
    return new Promise((resolve, reject) => {
        const results: string[][] = [];
        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (data) => {
                results.push(Object.values(data));
            })
            .on('end', () => {
                resolve(results);
            })
            .on('error', (error) => {
                reject(error);
            });
    });
};

export const formatTransactions = (data: string[][]): string[][] => {
    return data.map(transaction => transaction.filter(item => item.trim() !== ''));
};