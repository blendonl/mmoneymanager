"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItem = void 0;
class StoreItem {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Store item ID is required');
        }
        if (!props.storeId || props.storeId.trim() === '') {
            throw new Error('Store ID is required');
        }
        if (!props.itemId || props.itemId.trim() === '') {
            throw new Error('Item ID is required');
        }
        if (!props.price || props.price.toNumber() < 0) {
            throw new Error('Store item price must be non-negative');
        }
        if (!props.createdAt) {
            throw new Error('Created date is required');
        }
        if (!props.updatedAt) {
            throw new Error('Updated date is required');
        }
    }
    get id() {
        return this.props.id;
    }
    get storeId() {
        return this.props.storeId;
    }
    get itemId() {
        return this.props.itemId;
    }
    get item() {
        return this.props.item;
    }
    get price() {
        return this.props.price;
    }
    get isDiscounted() {
        return this.props.isDiscounted;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    getCurrentPrice(activeDiscount) {
        if (!this.props.isDiscounted || !activeDiscount || !activeDiscount.isActive()) {
            return this.props.price;
        }
        return this.props.price.minus(activeDiscount.discount);
    }
    getDiscountPercentage(activeDiscount) {
        if (!this.props.isDiscounted || !activeDiscount || !activeDiscount.isActive()) {
            return 0;
        }
        return (activeDiscount.discount.toNumber() / this.props.price.toNumber()) * 100;
    }
    toJSON() {
        return {
            id: this.props.id,
            storeId: this.props.storeId,
            itemId: this.props.itemId,
            price: this.props.price.toNumber(),
            isDiscounted: this.props.isDiscounted,
            item: this.props.item?.toJSON(),
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
exports.StoreItem = StoreItem;
//# sourceMappingURL=store-item.entity.js.map