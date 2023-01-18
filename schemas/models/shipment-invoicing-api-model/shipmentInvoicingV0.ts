/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/fba/outbound/brazil/v0/shipments/{shipmentId}": {
    /**
     * Returns the shipment details required to issue an invoice for the specified shipment.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1.133 | 25 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["getShipmentDetails"];
  };
  "/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice": {
    /**
     * Submits a shipment invoice document for a given shipment.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1.133 | 25 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    post: operations["submitInvoice"];
    parameters: {};
  };
  "/fba/outbound/brazil/v0/shipments/{shipmentId}/invoice/status": {
    /**
     * Returns the invoice status for the shipment you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1.133 | 25 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["getInvoiceStatus"];
    parameters: {};
  };
}

export interface definitions {
  /** @description The response schema for the getShipmentDetails operation. */
  GetShipmentDetailsResponse: {
    /** @description The payload for the getShipmentDetails operation */
    payload?: definitions["ShipmentDetail"];
    errors?: definitions["ErrorList"];
  };
  /** @description The information required by a selling partner to issue a shipment invoice. */
  ShipmentDetail: {
    /** @description The Amazon-defined identifier for the warehouse. */
    WarehouseId?: string;
    /** @description The Amazon-defined identifier for the order. */
    AmazonOrderId?: string;
    /** @description The Amazon-defined identifier for the shipment. */
    AmazonShipmentId?: string;
    /**
     * Format: date-time
     * @description The date and time when the order was created.
     */
    PurchaseDate?: string;
    ShippingAddress?: definitions["Address"];
    PaymentMethodDetails?: definitions["PaymentMethodDetailItemList"];
    /** @description The identifier for the marketplace where the order was placed. */
    MarketplaceId?: string;
    /** @description The seller identifier. */
    SellerId?: string;
    /** @description The name of the buyer. */
    BuyerName?: string;
    /** @description The county of the buyer. */
    BuyerCounty?: string;
    BuyerTaxInfo?: definitions["BuyerTaxInfo"];
    MarketplaceTaxInfo?: definitions["MarketplaceTaxInfo"];
    /** @description The seller’s friendly name registered in the marketplace. */
    SellerDisplayName?: string;
    ShipmentItems?: definitions["ShipmentItems"];
  };
  /** @description The shipping address details of the shipment. */
  Address: {
    /** @description The name. */
    Name?: string;
    /** @description The street address. */
    AddressLine1?: string;
    /** @description Additional street address information, if required. */
    AddressLine2?: string;
    /** @description Additional street address information, if required. */
    AddressLine3?: string;
    /** @description The city. */
    City?: string;
    /** @description The county. */
    County?: string;
    /** @description The district. */
    District?: string;
    /** @description The state or region. */
    StateOrRegion?: string;
    /** @description The postal code. */
    PostalCode?: string;
    /** @description The country code. */
    CountryCode?: string;
    /** @description The phone number. */
    Phone?: string;
    AddressType?: definitions["AddressTypeEnum"];
  };
  /** @description The shipping address type. */
  AddressTypeEnum: "Residential" | "Commercial";
  /** @description The list of payment method details. */
  PaymentMethodDetailItemList: string[];
  /** @description Tax information about the buyer. */
  BuyerTaxInfo: {
    /** @description The legal name of the company. */
    CompanyLegalName?: string;
    /** @description The country or region imposing the tax. */
    TaxingRegion?: string;
    TaxClassifications?: definitions["TaxClassificationList"];
  };
  /** @description Tax information about the marketplace. */
  MarketplaceTaxInfo: {
    /** @description The legal name of the company. */
    CompanyLegalName?: string;
    /** @description The country or region imposing the tax. */
    TaxingRegion?: string;
    TaxClassifications?: definitions["TaxClassificationList"];
  };
  /** @description The list of tax classifications. */
  TaxClassificationList: definitions["TaxClassification"][];
  /** @description The tax classification for the entity. */
  TaxClassification: {
    /** @description The type of tax. */
    Name?: string;
    /** @description The entity's tax identifier. */
    Value?: string;
  };
  /** @description A list of shipment items. */
  ShipmentItems: definitions["ShipmentItem"][];
  /** @description The shipment item information required by a seller to issue a shipment invoice. */
  ShipmentItem: {
    /** @description The Amazon Standard Identification Number (ASIN) of the item. */
    ASIN?: string;
    /** @description The seller SKU of the item. */
    SellerSKU?: string;
    /** @description The Amazon-defined identifier for the order item. */
    OrderItemId?: string;
    /** @description The name of the item. */
    Title?: string;
    /** @description The number of items ordered. */
    QuantityOrdered?: number;
    /** @description The selling price of the item multiplied by the quantity ordered. Note that ItemPrice excludes ShippingPrice and GiftWrapPrice. */
    ItemPrice?: definitions["Money"];
    /** @description The shipping price of the item. */
    ShippingPrice?: definitions["Money"];
    /** @description The gift wrap price of the item. */
    GiftWrapPrice?: definitions["Money"];
    /** @description The discount on the shipping price. */
    ShippingDiscount?: definitions["Money"];
    /** @description The total of all promotional discounts in the offer. */
    PromotionDiscount?: definitions["Money"];
    /** @description The list of serial numbers. */
    SerialNumbers?: definitions["SerialNumbersList"];
  };
  /** @description The currency type and amount. */
  Money: {
    /** @description Three-digit currency code in ISO 4217 format. */
    CurrencyCode?: string;
    /** @description The currency amount. */
    Amount?: string;
  };
  /** @description The list of serial numbers. */
  SerialNumbersList: string[];
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: definitions["Error"][];
  /** @description An error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition. */
    message: string;
    /** @description Additional details that can help the caller understand or fix the issue. */
    details?: string;
  };
  /** @description The request schema for the submitInvoice operation. */
  SubmitInvoiceRequest: {
    InvoiceContent: definitions["Blob"];
    /** @description An Amazon marketplace identifier. */
    MarketplaceId?: string;
    /** @description MD5 sum for validating the invoice data. For more information about calculating this value, see [Working with Content-MD5 Checksums](https://docs.developer.amazonservices.com/en_US/dev_guide/DG_MD5.html). */
    ContentMD5Value: string;
  };
  /**
   * Format: byte
   * @description Shipment invoice document content.
   */
  Blob: string;
  /** @description The response schema for the submitInvoice operation. */
  SubmitInvoiceResponse: {
    errors?: definitions["ErrorList"];
  };
  /** @description The shipment invoice status information. */
  ShipmentInvoiceStatusInfo: {
    /** @description The Amazon-defined shipment identifier. */
    AmazonShipmentId?: string;
    InvoiceStatus?: definitions["ShipmentInvoiceStatus"];
  };
  /** @description The shipment invoice status. */
  ShipmentInvoiceStatus: "Processing" | "Accepted" | "Errored" | "NotFound";
  /** @description The shipment invoice status response. */
  ShipmentInvoiceStatusResponse: {
    Shipments?: definitions["ShipmentInvoiceStatusInfo"];
  };
  /** @description The response schema for the getInvoiceStatus operation. */
  GetInvoiceStatusResponse: {
    /** @description The payload for the getInvoiceStatus operation. */
    payload?: definitions["ShipmentInvoiceStatusResponse"];
    errors?: definitions["ErrorList"];
  };
}

export interface operations {
  /**
   * Returns the shipment details required to issue an invoice for the specified shipment.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1.133 | 25 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  getShipmentDetails: {
    parameters: {
      path: {
        /** The identifier for the shipment. Get this value from the FBAOutboundShipmentStatus notification. For information about subscribing to notifications, see the [Notifications API Use Case Guide](doc:notifications-api-v1-use-case-guide). */
        shipmentId: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetShipmentDetailsResponse"];
      };
    };
  };
  /**
   * Submits a shipment invoice document for a given shipment.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1.133 | 25 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  submitInvoice: {
    parameters: {
      path: {
        /** The identifier for the shipment. */
        shipmentId: string;
      };
      body: {
        body: definitions["SubmitInvoiceRequest"];
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["SubmitInvoiceResponse"];
      };
    };
  };
  /**
   * Returns the invoice status for the shipment you specify.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1.133 | 25 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  getInvoiceStatus: {
    parameters: {
      path: {
        /** The shipment identifier for the shipment. */
        shipmentId: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetInvoiceStatusResponse"];
      };
    };
  };
}

export interface external {}
