/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/catalog/2022-04-01/items": {
    /**
     * Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.
     *
     * **Usage Plans:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 5 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["searchCatalogItems"];
  };
  "/catalog/2022-04-01/items/{asin}": {
    /**
     * Retrieves details for an item in the Amazon catalog.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 5 | 5 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["getCatalogItem"];
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
  /** @description An item in the Amazon catalog. */
  Item: {
    asin: definitions["ItemAsin"];
    attributes?: definitions["ItemAttributes"];
    dimensions?: definitions["ItemDimensions"];
    identifiers?: definitions["ItemIdentifiers"];
    images?: definitions["ItemImages"];
    productTypes?: definitions["ItemProductTypes"];
    relationships?: definitions["ItemRelationships"];
    salesRanks?: definitions["ItemSalesRanks"];
    summaries?: definitions["ItemSummaries"];
    vendorDetails?: definitions["ItemVendorDetails"];
  };
  /** @description Amazon Standard Identification Number (ASIN) is the unique identifier for an item in the Amazon catalog. */
  ItemAsin: string;
  /** @description A JSON object that contains structured item attribute data keyed by attribute name. Catalog item attributes conform to the related product type definitions available in the Selling Partner API for Product Type Definitions. */
  ItemAttributes: { [key: string]: unknown };
  /** @description Classification (browse node) associated with an Amazon catalog item. */
  ItemBrowseClassification: {
    /** @description Display name for the classification. */
    displayName: string;
    /** @description Identifier of the classification (browse node identifier). */
    classificationId: string;
  };
  /** @description Individual contributor to the creation of an item, such as an author or actor. */
  ItemContributor: {
    role: definitions["ItemContributorRole"];
    /** @description Name of the contributor, such as Jane Austen. */
    value: string;
  };
  /** @description Role of an individual contributor in the creation of an item, such as author or actor. */
  ItemContributorRole: {
    /** @description Display name of the role in the requested locale, such as Author or Actor. */
    displayName?: string;
    /** @description Role value for the Amazon catalog item, such as author or actor. */
    value: string;
  };
  /** @description Individual dimension value of an Amazon catalog item or item package. */
  Dimension: {
    /** @description Measurement unit of the dimension value. */
    unit?: string;
    /** @description Numeric dimension value. */
    value?: number;
  };
  /** @description Dimensions of an Amazon catalog item or item in its packaging. */
  Dimensions: {
    /** @description Height of an item or item package. */
    height?: definitions["Dimension"];
    /** @description Length of an item or item package. */
    length?: definitions["Dimension"];
    /** @description Weight of an item or item package. */
    weight?: definitions["Dimension"];
    /** @description Width of an item or item package. */
    width?: definitions["Dimension"];
  };
  /** @description Array of dimensions associated with the item in the Amazon catalog by Amazon marketplace. */
  ItemDimensions: definitions["ItemDimensionsByMarketplace"][];
  /** @description Dimensions associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
  ItemDimensionsByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Dimensions of an Amazon catalog item. */
    item?: definitions["Dimensions"];
    /** @description Dimensions of an Amazon catalog item in its packaging. */
    package?: definitions["Dimensions"];
  };
  /** @description Identifiers associated with the item in the Amazon catalog, such as UPC and EAN identifiers. */
  ItemIdentifiers: definitions["ItemIdentifiersByMarketplace"][];
  /** @description Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
  ItemIdentifiersByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Identifiers associated with the item in the Amazon catalog for the indicated Amazon marketplace. */
    identifiers: definitions["ItemIdentifier"][];
  };
  /** @description Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier. */
  ItemIdentifier: {
    /** @description Type of identifier, such as UPC, EAN, or ISBN. */
    identifierType: string;
    /** @description Identifier. */
    identifier: string;
  };
  /** @description Images for an item in the Amazon catalog. */
  ItemImages: definitions["ItemImagesByMarketplace"][];
  /** @description Images for an item in the Amazon catalog for the indicated Amazon marketplace. */
  ItemImagesByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Images for an item in the Amazon catalog for the indicated Amazon marketplace. */
    images: definitions["ItemImage"][];
  };
  /** @description Image for an item in the Amazon catalog. */
  ItemImage: {
    /**
     * @description Variant of the image, such as `MAIN` or `PT01`.
     * @example MAIN
     */
    variant:
      | "MAIN"
      | "PT01"
      | "PT02"
      | "PT03"
      | "PT04"
      | "PT05"
      | "PT06"
      | "PT07"
      | "PT08"
      | "SWCH";
    /** @description Link, or URL, for the image. */
    link: string;
    /** @description Height of the image in pixels. */
    height: number;
    /** @description Width of the image in pixels. */
    width: number;
  };
  /** @description Product types associated with the Amazon catalog item. */
  ItemProductTypes: definitions["ItemProductTypeByMarketplace"][];
  /** @description Product type associated with the Amazon catalog item for the indicated Amazon marketplace. */
  ItemProductTypeByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId?: string;
    /**
     * @description Name of the product type associated with the Amazon catalog item.
     * @example LUGGAGE
     */
    productType?: string;
  };
  /** @description Sales ranks of an Amazon catalog item. */
  ItemSalesRanks: definitions["ItemSalesRanksByMarketplace"][];
  /** @description Sales ranks of an Amazon catalog item for the indicated Amazon marketplace. */
  ItemSalesRanksByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Sales ranks of an Amazon catalog item for an Amazon marketplace by classification. */
    classificationRanks?: definitions["ItemClassificationSalesRank"][];
    /** @description Sales ranks of an Amazon catalog item for an Amazon marketplace by website display group. */
    displayGroupRanks?: definitions["ItemDisplayGroupSalesRank"][];
  };
  /** @description Sales rank of an Amazon catalog item by classification. */
  ItemClassificationSalesRank: {
    /** @description Identifier of the classification associated with the sales rank. */
    classificationId: string;
    /** @description Title, or name, of the sales rank. */
    title: string;
    /** @description Corresponding Amazon retail website link, or URL, for the sales rank. */
    link?: string;
    /** @description Sales rank value. */
    rank: number;
  };
  /** @description Sales rank of an Amazon catalog item by website display group. */
  ItemDisplayGroupSalesRank: {
    /** @description Name of the website display group associated with the sales rank */
    websiteDisplayGroup: string;
    /** @description Title, or name, of the sales rank. */
    title: string;
    /** @description Corresponding Amazon retail website link, or URL, for the sales rank. */
    link?: string;
    /** @description Sales rank value. */
    rank: number;
  };
  /** @description Summary details of an Amazon catalog item. */
  ItemSummaries: definitions["ItemSummaryByMarketplace"][];
  /** @description Summary details of an Amazon catalog item for the indicated Amazon marketplace. */
  ItemSummaryByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Identifies an Amazon catalog item is intended for an adult audience or is sexual in nature. */
    adultProduct?: boolean;
    /** @description Identifies an Amazon catalog item is autographed by a player or celebrity. */
    autographed?: boolean;
    /** @description Name of the brand associated with an Amazon catalog item. */
    brand?: string;
    /** @description Classification (browse node) associated with an Amazon catalog item. */
    browseClassification?: definitions["ItemBrowseClassification"];
    /** @description Name of the color associated with an Amazon catalog item. */
    color?: string;
    /** @description Individual contributors to the creation of an item, such as the authors or actors. */
    contributors?: definitions["ItemContributor"][];
    /** @description Classification type associated with the Amazon catalog item. */
    itemClassification?:
      | "BASE_PRODUCT"
      | "OTHER"
      | "PRODUCT_BUNDLE"
      | "VARIATION_PARENT";
    /** @description Name, or title, associated with an Amazon catalog item. */
    itemName?: string;
    /** @description Name of the manufacturer associated with an Amazon catalog item. */
    manufacturer?: string;
    /** @description Identifies an Amazon catalog item is memorabilia valued for its connection with historical events, culture, or entertainment. */
    memorabilia?: boolean;
    /** @description Model number associated with an Amazon catalog item. */
    modelNumber?: string;
    /** @description Quantity of an Amazon catalog item in one package. */
    packageQuantity?: number;
    /** @description Part number associated with an Amazon catalog item. */
    partNumber?: string;
    /**
     * Format: date
     * @description First date on which an Amazon catalog item is shippable to customers.
     */
    releaseDate?: string;
    /** @description Name of the size associated with an Amazon catalog item. */
    size?: string;
    /** @description Name of the style associated with an Amazon catalog item. */
    style?: string;
    /** @description Identifies an Amazon catalog item is eligible for trade-in. */
    tradeInEligible?: boolean;
    /** @description Identifier of the website display group associated with an Amazon catalog item. */
    websiteDisplayGroup?: string;
    /** @description Display name of the website display group associated with an Amazon catalog item. */
    websiteDisplayGroupName?: string;
  };
  /** @description Variation theme indicating the combination of Amazon item catalog attributes that define the variation family. */
  ItemVariationTheme: {
    /** @description Names of the Amazon catalog item attributes associated with the variation theme. */
    attributes?: string[];
    /**
     * @description Variation theme indicating the combination of Amazon item catalog attributes that define the variation family.
     * @example COLOR_NAME/STYLE_NAME
     */
    theme?: string;
  };
  /** @description Relationships by marketplace for an Amazon catalog item (for example, variations). */
  ItemRelationships: definitions["ItemRelationshipsByMarketplace"][];
  /** @description Relationship details for the Amazon catalog item for the indicated Amazon marketplace. */
  ItemRelationshipsByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Relationships for the item. */
    relationships: definitions["ItemRelationship"][];
  };
  /** @description Relationship details for an Amazon catalog item. */
  ItemRelationship: {
    /** @description Identifiers (ASINs) of the related items that are children of this item. */
    childAsins?: string[];
    /** @description Identifiers (ASINs) of the related items that are parents of this item. */
    parentAsins?: string[];
    /** @description For "VARIATION" relationships, variation theme indicating the combination of Amazon item catalog attributes that define the variation family. */
    variationTheme?: definitions["ItemVariationTheme"];
    /**
     * @description Type of relationship.
     * @example VARIATION
     */
    type: "VARIATION" | "PACKAGE_HIERARCHY";
  };
  /** @description Product category or subcategory associated with an Amazon catalog item. */
  ItemVendorDetailsCategory: {
    /** @description Display name of the product category or subcategory */
    displayName?: string;
    /** @description Value (code) of the product category or subcategory. */
    value?: string;
  };
  /** @description Vendor details associated with an Amazon catalog item. Vendor details are available to vendors only. */
  ItemVendorDetails: definitions["ItemVendorDetailsByMarketplace"][];
  /** @description Vendor details associated with an Amazon catalog item for the indicated Amazon marketplace. */
  ItemVendorDetailsByMarketplace: {
    /** @description Amazon marketplace identifier. */
    marketplaceId: string;
    /** @description Brand code associated with an Amazon catalog item. */
    brandCode?: string;
    /** @description Manufacturer code associated with an Amazon catalog item. */
    manufacturerCode?: string;
    /** @description Parent vendor code of the manufacturer code. */
    manufacturerCodeParent?: string;
    /** @description Product category associated with an Amazon catalog item. */
    productCategory?: definitions["ItemVendorDetailsCategory"];
    /** @description Product group associated with an Amazon catalog item. */
    productGroup?: string;
    /** @description Product subcategory associated with an Amazon catalog item. */
    productSubcategory?: definitions["ItemVendorDetailsCategory"];
    /** @description Replenishment category associated with an Amazon catalog item. */
    replenishmentCategory?:
      | "ALLOCATED"
      | "BASIC_REPLENISHMENT"
      | "IN_SEASON"
      | "LIMITED_REPLENISHMENT"
      | "MANUFACTURER_OUT_OF_STOCK"
      | "NEW_PRODUCT"
      | "NON_REPLENISHABLE"
      | "NON_STOCKUPABLE"
      | "OBSOLETE"
      | "PLANNED_REPLENISHMENT";
  };
  /** @description Items in the Amazon catalog and search related metadata. */
  ItemSearchResults: {
    /**
     * @description For `identifiers`-based searches, the total number of Amazon catalog items found. For `keywords`-based searches, the estimated total number of Amazon catalog items matched by the search query (only results up to the page count limit will be returned per request regardless of the number found).
     *
     * Note: The maximum number of items (ASINs) that can be returned and paged through is 1000.
     */
    numberOfResults: number;
    /** @description If available, the `nextToken` and/or `previousToken` values required to return paginated results. */
    pagination: definitions["Pagination"];
    /** @description Search refinements for `keywords`-based searches. */
    refinements: definitions["Refinements"];
    /** @description A list of items from the Amazon catalog. */
    items: definitions["Item"][];
  };
  /** @description When a request produces a response that exceeds the `pageSize`, pagination occurs. This means the response is divided into individual pages. To retrieve the next page or the previous page, you must pass the `nextToken` value or the `previousToken` value as the `pageToken` parameter in the next request. When you receive the last page, there will be no `nextToken` key in the pagination object. */
  Pagination: {
    /** @description A token that can be used to fetch the next page. */
    nextToken?: string;
    /** @description A token that can be used to fetch the previous page. */
    previousToken?: string;
  };
  /** @description Search refinements. */
  Refinements: {
    /** @description Brand search refinements. */
    brands: definitions["BrandRefinement"][];
    /** @description Classification search refinements. */
    classifications: definitions["ClassificationRefinement"][];
  };
  /** @description Description of a brand that can be used to get more fine-grained search results. */
  BrandRefinement: {
    /** @description The estimated number of results that would still be returned if refinement key applied. */
    numberOfResults: number;
    /** @description Brand name. For display and can be used as a search refinement. */
    brandName: string;
  };
  /** @description Description of a classification that can be used to get more fine-grained search results. */
  ClassificationRefinement: {
    /** @description The estimated number of results that would still be returned if refinement key applied. */
    numberOfResults: number;
    /** @description Display name for the classification. */
    displayName: string;
    /** @description Identifier for the classification that can be used for search refinement purposes. */
    classificationId: string;
  };
}

export interface operations {
  /**
   * Search for and return a list of Amazon catalog items and associated information either by identifier or by keywords.
   *
   * **Usage Plans:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 5 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  searchCatalogItems: {
    parameters: {
      query: {
        /** A comma-delimited list of product identifiers to search the Amazon catalog for. **Note:** Cannot be used with `keywords`. */
        identifiers?: string[];
        /** Type of product identifiers to search the Amazon catalog for. **Note:** Required when `identifiers` are provided. */
        identifiersType?:
          | "ASIN"
          | "EAN"
          | "GTIN"
          | "ISBN"
          | "JAN"
          | "MINSAN"
          | "SKU"
          | "UPC";
        /** A comma-delimited list of Amazon marketplace identifiers for the request. */
        marketplaceIds: string[];
        /** A comma-delimited list of data sets to include in the response. Default: `summaries`. */
        includedData?: (
          | "attributes"
          | "dimensions"
          | "identifiers"
          | "images"
          | "productTypes"
          | "relationships"
          | "salesRanks"
          | "summaries"
          | "vendorDetails"
        )[];
        /** Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. */
        locale?: string;
        /** A selling partner identifier, such as a seller account or vendor code. **Note:** Required when `identifiersType` is `SKU`. */
        sellerId?: string;
        /** A comma-delimited list of words to search the Amazon catalog for. **Note:** Cannot be used with `identifiers`. */
        keywords?: string[];
        /** A comma-delimited list of brand names to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`. */
        brandNames?: string[];
        /** A comma-delimited list of classification identifiers to limit the search for `keywords`-based queries. **Note:** Cannot be used with `identifiers`. */
        classificationIds?: string[];
        /** Number of results to be returned per page. */
        pageSize?: number;
        /** A token to fetch a certain page when there are multiple pages worth of results. */
        pageToken?: string;
        /** The language of the keywords provided for `keywords`-based queries. Defaults to the primary locale of the marketplace. **Note:** Cannot be used with `identifiers`. */
        keywordsLocale?: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["ItemSearchResults"];
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
   * Retrieves details for an item in the Amazon catalog.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 5 | 5 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may observe higher rate and burst values than those shown here. For more information, refer to the [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  getCatalogItem: {
    parameters: {
      path: {
        /** The Amazon Standard Identification Number (ASIN) of the item. */
        asin: string;
      };
      query: {
        /** A comma-delimited list of Amazon marketplace identifiers. Data sets in the response contain data only for the specified marketplaces. */
        marketplaceIds: string[];
        /** A comma-delimited list of data sets to include in the response. Default: `summaries`. */
        includedData?: (
          | "attributes"
          | "dimensions"
          | "identifiers"
          | "images"
          | "productTypes"
          | "relationships"
          | "salesRanks"
          | "summaries"
          | "vendorDetails"
        )[];
        /** Locale for retrieving localized summaries. Defaults to the primary locale of the marketplace. */
        locale?: string;
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
}

export interface external {}
