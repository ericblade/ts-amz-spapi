/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/listings/2021-08-01/items/{sellerId}/{sku}": {
    /**
     * Returns details about a listings item for a selling partner.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 10 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["getListingsItem"];
    /**
     * Creates a new or fully-updates an existing listings item for a selling partner.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 10 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    put: operations["putListingsItem"];
    /**
     * Delete a listings item for a selling partner.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 10 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    delete: operations["deleteListingsItem"];
    /**
     * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 10 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    patch: operations["patchListingsItem"];
  };
}

export interface definitions {
  /** @description Error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition. */
    message: string;
    /** @description Additional details that can help the caller understand or fix the issue. */
    details?: string;
  };
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: {
    errors: definitions["Error"][];
  };
  /** @description A listings item. */
  Item: {
    /** @description A selling partner provided identifier for an Amazon listing. */
    sku: string;
    summaries?: definitions["ItemSummaries"];
    attributes?: definitions["ItemAttributes"];
    issues?: definitions["ItemIssues"];
    offers?: definitions["ItemOffers"];
    /** @description Fulfillment availability for the listings item. */
    fulfillmentAvailability?: definitions["FulfillmentAvailability"][];
    procurement?: definitions["ItemProcurement"];
  };
  /** @description Summary details of a listings item. */
  ItemSummaries: definitions["ItemSummaryByMarketplace"][];
  /** @description Summary details of a listings item for an Amazon marketplace. */
  ItemSummaryByMarketplace: {
    /** @description A marketplace identifier. Identifies the Amazon marketplace for the listings item. */
    marketplaceId: string;
    /** @description Amazon Standard Identification Number (ASIN) of the listings item. */
    asin: string;
    /** @description The Amazon product type of the listings item. */
    productType: string;
    /** @description Identifies the condition of the listings item. */
    conditionType?:
      | "new_new"
      | "new_open_box"
      | "new_oem"
      | "refurbished_refurbished"
      | "used_like_new"
      | "used_very_good"
      | "used_good"
      | "used_acceptable"
      | "collectible_like_new"
      | "collectible_very_good"
      | "collectible_good"
      | "collectible_acceptable"
      | "club_club";
    /** @description Statuses that apply to the listings item. */
    status: ("BUYABLE" | "DISCOVERABLE")[];
    /** @description Fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. */
    fnSku?: string;
    /** @description Name, or title, associated with an Amazon catalog item. */
    itemName: string;
    /**
     * Format: date-time
     * @description Date the listings item was created, in ISO 8601 format.
     */
    createdDate: string;
    /**
     * Format: date-time
     * @description Date the listings item was last updated, in ISO 8601 format.
     */
    lastUpdatedDate: string;
    /** @description Main image for the listings item. */
    mainImage?: definitions["ItemImage"];
  };
  /** @description Image for the listings item. */
  ItemImage: {
    /** @description Link, or URL, for the image. */
    link: string;
    /** @description Height of the image in pixels. */
    height: number;
    /** @description Width of the image in pixels. */
    width: number;
  };
  /** @description JSON object containing structured listings item attribute data keyed by attribute name. */
  ItemAttributes: { [key: string]: unknown };
  /** @description Issues associated with the listings item. */
  ItemIssues: definitions["Issue"][];
  /** @description An issue with a listings item. */
  Issue: {
    /** @description An issue code that identifies the type of issue. */
    code: string;
    /** @description A message that describes the issue. */
    message: string;
    /** @description The severity of the issue. */
    severity: "ERROR" | "WARNING" | "INFO";
    /** @description Names of the attributes associated with the issue, if applicable. */
    attributeNames?: string[];
  };
  /** @description Offer details for the listings item. */
  ItemOffers: definitions["ItemOfferByMarketplace"][];
  /** @description Offer details of a listings item for an Amazon marketplace. */
  ItemOfferByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Type of offer for the listings item. */
    offerType: "B2C" | "B2B";
    /** @description Purchase price of the listings item */
    price: definitions["Money"];
    points?: definitions["Points"];
  };
  /** @description Vendor procurement information for the listings item. */
  ItemProcurement: {
    /** @description The price (numeric value) that you want Amazon to pay you for this product. */
    costPrice: definitions["Money"];
  };
  /** @description Fulfillment availability details for the listings item. */
  FulfillmentAvailability: {
    /** @description Designates which fulfillment network will be used. */
    fulfillmentChannelCode: string;
    /** @description The quantity of the item you are making available for sale. */
    quantity?: number;
  };
  /** @description The currency type and the amount. */
  Money: {
    /** @description Three-digit currency code. In ISO 4217 format. */
    currencyCode: string;
    /** @description The currency amount. */
    amount: definitions["Decimal"];
  };
  /** @description A decimal number with no loss of precision. Useful when precision loss is unnaceptable, as with currencies. Follows RFC7159 for number representation. */
  Decimal: string;
  /** @description The number of Amazon Points offered with the purchase of an item, and their monetary value. Note that the Points element is only returned in Japan (JP). */
  Points: {
    pointsNumber: number;
  };
  /** @description Individual JSON Patch operation for an HTTP PATCH request. */
  PatchOperation: {
    /** @description Type of JSON Patch operation. Supported JSON Patch operations include add, replace, and delete. See <https://tools.ietf.org/html/rfc6902>. */
    op: "add" | "replace" | "delete";
    /** @description JSON Pointer path of the element to patch. See <https://tools.ietf.org/html/rfc6902>. */
    path: string;
    /** @description JSON value to add, replace, or delete. */
    value?: { [key: string]: unknown }[];
  };
  /** @description The request body schema for the patchListingsItem operation. */
  ListingsItemPatchRequest: {
    /** @description The Amazon product type of the listings item. */
    productType: string;
    /** @description One or more JSON Patch operations to perform on the listings item. */
    patches: definitions["PatchOperation"][];
  };
  /** @description The request body schema for the putListingsItem operation. */
  ListingsItemPutRequest: {
    /** @description The Amazon product type of the listings item. */
    productType: string;
    /** @description The name of the requirements set for the provided data. */
    requirements?: "LISTING" | "LISTING_PRODUCT_ONLY" | "LISTING_OFFER_ONLY";
    /** @description JSON object containing structured listings item attribute data keyed by attribute name. */
    attributes: { [key: string]: unknown };
  };
  /** @description Response containing the results of a submission to the Selling Partner API for Listings Items. */
  ListingsItemSubmissionResponse: {
    /** @description A selling partner provided identifier for an Amazon listing. */
    sku: string;
    /** @description The status of the listings item submission. */
    status: "ACCEPTED" | "INVALID";
    /** @description The unique identifier of the listings item submission. */
    submissionId: string;
    /** @description Listings item issues related to the listings item submission. */
    issues?: definitions["Issue"][];
  };
}

export interface operations {
  /**
   * Returns details about a listings item for a selling partner.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 10 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  getListingsItem: {
    parameters: {
      path: {
        /** A selling partner identifier, such as a merchant account or vendor code. */
        sellerId: string;
        /** A selling partner provided identifier for an Amazon listing. */
        sku: string;
      };
      query: {
        /** A comma-delimited list of Amazon marketplace identifiers for the request. */
        marketplaceIds: string[];
        /** A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale. */
        issueLocale?: string;
        /** A comma-delimited list of data sets to include in the response. Default: summaries. */
        includedData?: (
          | "summaries"
          | "attributes"
          | "issues"
          | "offers"
          | "fulfillmentAvailability"
          | "procurement"
        )[];
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["Item"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ErrorList"];
      };
    };
  };
  /**
   * Creates a new or fully-updates an existing listings item for a selling partner.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 10 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  putListingsItem: {
    parameters: {
      path: {
        /** A selling partner identifier, such as a merchant account or vendor code. */
        sellerId: string;
        /** A selling partner provided identifier for an Amazon listing. */
        sku: string;
      };
      query: {
        /** A comma-delimited list of Amazon marketplace identifiers for the request. */
        marketplaceIds: string[];
        /** A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale. */
        issueLocale?: string;
      };
      body: {
        /** The request body schema for the putListingsItem operation. */
        body: definitions["ListingsItemPutRequest"];
      };
    };
    responses: {
      /** Successfully understood the request to create or fully-update a listings item. See the response to determine if the submission has been accepted. */
      200: {
        headers: {};
        schema: definitions["ListingsItemSubmissionResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ErrorList"];
      };
    };
  };
  /**
   * Delete a listings item for a selling partner.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 10 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  deleteListingsItem: {
    parameters: {
      path: {
        /** A selling partner identifier, such as a merchant account or vendor code. */
        sellerId: string;
        /** A selling partner provided identifier for an Amazon listing. */
        sku: string;
      };
      query: {
        /** A comma-delimited list of Amazon marketplace identifiers for the request. */
        marketplaceIds: string[];
        /** A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale. */
        issueLocale?: string;
      };
    };
    responses: {
      /** Successfully understood the listings item delete request. See the response to determine whether the submission has been accepted. */
      200: {
        headers: {};
        schema: definitions["ListingsItemSubmissionResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ErrorList"];
      };
    };
  };
  /**
   * Partially update (patch) a listings item for a selling partner. Only top-level listings item attributes can be patched. Patching nested attributes is not supported.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 10 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values then those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  patchListingsItem: {
    parameters: {
      path: {
        /** A selling partner identifier, such as a merchant account or vendor code. */
        sellerId: string;
        /** A selling partner provided identifier for an Amazon listing. */
        sku: string;
      };
      query: {
        /** A comma-delimited list of Amazon marketplace identifiers for the request. */
        marketplaceIds: string[];
        /** A locale for localization of issues. When not provided, the default language code of the first marketplace is used. Examples: "en_US", "fr_CA", "fr_FR". Localized messages default to "en_US" when a localization is not available in the specified locale. */
        issueLocale?: string;
      };
      body: {
        /** The request body schema for the patchListingsItem operation. */
        body: definitions["ListingsItemPatchRequest"];
      };
    };
    responses: {
      /** Successfully understood the listings item patch request. See the response to determine if the submission was accepted. */
      200: {
        headers: {};
        schema: definitions["ListingsItemSubmissionResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ErrorList"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ErrorList"];
      };
    };
  };
}

export interface external {}
