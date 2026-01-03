"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreItemDiscount = void 0;
class StoreItemDiscount {
    props;
    constructor(props) {
        this.validate(props);
        this.props = props;
    }
    validate(props) {
        if (!props.id || props.id.trim() === '') {
            throw new Error('Store item discount ID is required');
        }
        if (!props.storeItemId || props.storeItemId.trim() === '') {
            throw new Error('Store item ID is required');
        }
        if (!props.discount || props.discount.toNumber() <= 0) {
            throw new Error('Discount amount must be greater than 0');
        }
        if (!props.startedAt) {
            throw new Error('Start date is required');
        }
        if (props.endedAt && props.endedAt < props.startedAt) {
            throw new Error('End date must be after start date');
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
    get storeItemId() {
        return this.props.storeItemId;
    }
    get discount() {
        return this.props.discount;
    }
    get startedAt() {
        return this.props.startedAt;
    }
    get endedAt() {
        return this.props.endedAt;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get updatedAt() {
        return this.props.updatedAt;
    }
    isActive() {
        const now = new Date();
        return this.props.startedAt <= now && (this.props.endedAt === null || this.props.endedAt > now);
    }
    getDiscountedPrice(originalPrice) {
        if (!this.isActive()) {
            return originalPrice;
        }
        return originalPrice.minus(this.props.discount);
    }
    getDiscountPercentage(originalPrice) {
        if (!this.isActive() || originalPrice.toNumber() === 0) {
            return 0;
        }
        return (this.props.discount.toNumber() / originalPrice.toNumber()) * 100;
    }
    toJSON() {
        return {
            id: this.props.id,
            storeItemId: this.props.storeItemId,
            discount: this.props.discount.toNumber(),
            startedAt: this.props.startedAt,
            endedAt: this.props.endedAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            isActive: this.isActive(),
        };
    }
}
exports.StoreItemDiscount = StoreItemDiscount;
//# sourceMappingURL=store-item-discount.entity.js.map