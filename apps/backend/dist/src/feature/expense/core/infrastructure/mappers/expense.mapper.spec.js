"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const expense_mapper_1 = require("./expense.mapper");
class Decimal {
    value;
    constructor(value) {
        this.value = value;
    }
    toNumber() { return Number(this.value); }
    minus(d) { return new Decimal(Number(this.value) - Number(d.value)); }
}
describe('ExpenseMapper', () => {
    it('should map prisma expense with items to domain expense', () => {
        const date = new Date();
        const prismaExpense = {
            id: 'expense-1',
            transactionId: 'tx-1',
            storeId: 'store-1',
            categoryId: 'cat-1',
            createdAt: date,
            updatedAt: date,
            transaction: {
                id: 'tx-1',
                userId: 'user-1',
                type: 'EXPENSE',
                value: new Decimal(100),
                createdAt: date,
                updatedAt: date,
            },
            category: {
                id: 'cat-1',
                name: 'Groceries',
                userId: 'user-1',
                createdAt: date,
                updatedAt: date,
            },
            store: {
                id: 'store-1',
                name: 'Supermarket',
                location: 'Downtown',
                createdAt: date,
                updatedAt: date,
            },
            items: [
                {
                    id: 'expense-item-1',
                    itemId: 'item-1',
                    expenseId: 'expense-1',
                    price: new Decimal(50),
                    discount: new Decimal(0),
                    createdAt: date,
                    updatedAt: date,
                    item: {
                        id: 'item-1',
                        name: 'Milk',
                        categoryId: 'item-cat-1',
                        storeId: 'store-1',
                        createdAt: date,
                        updatedAt: date,
                        category: {
                            id: 'item-cat-1',
                            name: 'Dairy',
                            userId: 'user-1',
                            parentId: null,
                            createdAt: date,
                            updatedAt: date,
                        },
                    },
                },
            ],
        };
        const domainExpense = expense_mapper_1.ExpenseMapper.toDomain(prismaExpense);
        expect(domainExpense.items).toHaveLength(1);
        expect(domainExpense.items[0].id).toBe('expense-item-1');
        expect(domainExpense.items[0].itemName).toBe('Milk');
        expect(domainExpense.items[0].price.toNumber()).toBe(50);
    });
});
//# sourceMappingURL=expense.mapper.spec.js.map