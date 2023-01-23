export * as APlusContent from './schemas/models/aplus-content-api-model/aplusContent_2020-11-01';
export * as Authorization from './schemas/models/authorization-api-model/authorization';
export * as CatalogItems from './schemas/models/catalog-items-api-model/catalogItems_2022-04-01';
export * as EasyShip from './schemas/models/easy-ship-model/easyShip_2022-03-23';
export * as FBAInboundEligibility from './schemas/models/fba-inbound-eligibility-api-model/fbaInbound';
export * as FBAInventory from './schemas/models/fba-inventory-api-model/fbaInventory';
export * as FBASmallAndLight from './schemas/models/fba-small-and-light-api-model/fbaSmallandLight';
export * as Feeds from './schemas/models/feeds-api-model/feeds_2021-06-30';
export * as Finances from './schemas/models/finances-api-model/financesV0';
export * as FulfillmentInbound from './schemas/models/fulfillment-inbound-api-model/fulfillmentInboundV0';
export * as FulfillmentOutbound from './schemas/models/fulfillment-outbound-api-model/fulfillmentOutbound_2020-07-01';
export * as ListingsItems from './schemas/models/listings-items-api-model/listingsItems_2021-08-01';
export * as ListingsRestrictions from './schemas/models/listings-restrictions-api-model/listingsRestrictions_2021-08-01';
export * as MerchantFulfillment from './schemas/models/merchant-fulfillment-api-model/merchantFulfillmentV0';
export * as Messaging from './schemas/models/messaging-api-model/messaging';
export * as Notifications from './schemas/models/notifications-api-model/notifications';
export * as Orders from './schemas/models/orders-api-model/ordersV0';
export * as ProductFees from './schemas/models/product-fees-api-model/productFeesV0';
export * as ProductTypeDefinitions from './schemas/models/product-type-definitions-api-model/definitionsProductTypes_2020-09-01';
export * as Reports from './schemas/models/reports-api-model/reports_2021-06-30';
export * as Sales from './schemas/models/sales-api-model/sales';
export * as Sellers from './schemas/models/sellers-api-model/sellers';
export * as Services from './schemas/models/services-api-model/services';
export * as ShipmentInvoicing from './schemas/models/shipment-invoicing-api-model/shipmentInvoicingV0';
export * as Shipping from './schemas/models/shipping-api-model/shipping';
export * as Solicitations from './schemas/models/solicitations-api-model/solicitations';
export * as Tokens from './schemas/models/tokens-api-model/tokens_2021-03-01';
export * as Uploads from './schemas/models/uploads-api-model/uploads_2020-11-01';
export * as VendorDirectFulfillmentInventory from './schemas/models/vendor-direct-fulfillment-inventory-api-model/vendorDirectFulfillmentInventoryV1';
export * as VendorDirectFulfillmentOrders from './schemas/models/vendor-direct-fulfillment-orders-api-model/vendorDirectFulfillmentOrders_2021-12-28';
export * as VendorDirectFulfillmentPayments from './schemas/models/vendor-direct-fulfillment-payments-api-model/vendorDirectFulfillmentPaymentsV1';
export * as VendorDirectFulfillmentSandboxTest from './schemas/models/vendor-direct-fulfillment-sandbox-test-data-api-model/vendorDirectFulfillmentSandboxData_2021-10-28';
export * as VendorDirectFulfillmentShipping from './schemas/models/vendor-direct-fulfillment-shipping-api-model/vendorDirectFulfillmentShipping_2021-12-28';
export * as VendorDirectFulfillmentTransactions from './schemas/models/vendor-direct-fulfillment-transactions-api-model/vendorDirectFulfillmentTransactions_2021-12-28';
export * as VendorInvoices from './schemas/models/vendor-invoices-api-model/vendorInvoices';
export * as VendorOrders from './schemas/models/vendor-orders-api-model/vendorOrders';
export * as VendorShipments from './schemas/models/vendor-shipments-api-model/vendorShipments';
export * as VendorTransactionStatus from './schemas/models/vendor-transaction-status-api-model/vendorTransactionStatus';
import type * as AmzProductPricing from './schemas/models/product-pricing-api-model/productPricingV0';
import type { CurrencyCode } from '@vendure/common/lib/generated-types';
type CurrencyCodeUnion = keyof typeof CurrencyCode;
interface MoneyType {
    /** @description The currency code in ISO 4217 format. */
    CurrencyCode?: CurrencyCodeUnion;
    /** @description The monetary value. */
    Amount?: number;
}
type ProductCondition = 'New' | 'Used' | 'Collectible' | 'Refurbished' | 'Club';
type ProductSubCondition = 'New' | 'Mint' | 'VeryGood' | 'Good' | 'Acceptable' | 'Poor' | 'Club' | 'OEM' | 'Warranty' | 'RefurbishedWarranty' | 'Refurbished' | 'OpenBox' | 'Other';
export declare namespace ProductPricing {
    interface CompetitivePriceType extends Omit<AmzProductPricing.definitions["CompetitivePriceType"], 'condition' | 'subcondition' | 'CompetitivePriceId'> {
        condition?: ProductCondition;
        subcondition?: ProductSubCondition;
        CompetitivePriceId: "1" | "2";
    }
    interface CompetitivePricingType extends Omit<AmzProductPricing.definitions["CompetitivePricingType"], 'TradeInValue'> {
        TradeInValue?: MoneyType;
    }
    interface Product extends Omit<AmzProductPricing.definitions["Product"], 'CompetitivePricing'> {
        CompetitivePricing?: CompetitivePricingType;
    }
    export interface definitions extends Omit<AmzProductPricing.definitions, 'MoneyType' | 'CompetitivePricingType' | 'Product'> {
        MoneyType: MoneyType;
        Product: Product;
        CompetitivePricingType: CompetitivePricingType;
        CompetitivePriceType: CompetitivePriceType;
    }
    export interface paths extends AmzProductPricing.paths {
    }
    export interface operations extends AmzProductPricing.operations {
    }
    export interface external extends AmzProductPricing.external {
    }
    export {};
}
