/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/catalog/v0/items": {
    /**
     * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.
     * _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
     */
    get: operations["listCatalogItems"];
  };
  "/catalog/v0/items/{asin}": {
    /**
     * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.
     * _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
     */
    get: operations["getCatalogItem"];
  };
  "/catalog/v0/categories": {
    /**
     * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1 | 2 |
     *
     * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     */
    get: operations["listCatalogCategories"];
  };
}

export interface definitions {
  ListCatalogItemsResponse: {
    /** @description The payload for the listCatalogItems operation. */
    payload?: definitions["ListMatchingItemsResponse"];
    /** @description One or more unexpected errors occurred during the listCatalogItems operation. */
    errors?: definitions["ErrorList"];
  };
  ListMatchingItemsResponse: {
    Items?: definitions["ItemList"];
  };
  /** @description A list of items. */
  ItemList: definitions["Item"][];
  GetCatalogItemResponse: {
    /** @description The payload for the getCatalogItem operation. */
    payload?: definitions["Item"];
    /** @description One or more unexpected errors occurred during the getCatalogItem operation. */
    errors?: definitions["ErrorList"];
  };
  /** @description An item in the Amazon catalog. */
  Item: {
    /** @description The identifiers that uniquely identify the item. */
    Identifiers: definitions["IdentifierType"];
    /** @description A list of attributes of the item. */
    AttributeSets?: definitions["AttributeSetList"];
    /** @description A list of variation relationship information for the item. */
    Relationships?: definitions["RelationshipList"];
    /** @description A list of sales rank information for the item by category. */
    SalesRankings?: definitions["SalesRankList"];
  };
  IdentifierType: {
    /** @description Indicates the item is identified by MarketPlaceId and ASIN. */
    MarketplaceASIN?: definitions["ASINIdentifier"];
    /** @description Indicates the item is identified by MarketPlaceId, SellerId, and SellerSKU. */
    SKUIdentifier?: definitions["SellerSKUIdentifier"];
  };
  ASINIdentifier: {
    /** @description A marketplace identifier. */
    MarketplaceId: string;
    /** @description The Amazon Standard Identification Number (ASIN) of the item. */
    ASIN: string;
  };
  SellerSKUIdentifier: {
    /** @description A marketplace identifier. */
    MarketplaceId: string;
    /** @description The seller identifier submitted for the operation. */
    SellerId: string;
    /** @description The seller stock keeping unit (SKU) of the item. */
    SellerSKU: string;
  };
  /** @description A list of attributes for the item. */
  AttributeSetList: definitions["AttributeSetListType"][];
  /** @description The attributes of the item. */
  AttributeSetListType: {
    /** @description The actor attributes of the item. */
    Actor?: string[];
    /** @description The artist attributes of the item. */
    Artist?: string[];
    /** @description The aspect ratio attribute of the item. */
    AspectRatio?: string;
    /** @description The audience rating attribute of the item. */
    AudienceRating?: string;
    /** @description The author attributes of the item. */
    Author?: string[];
    /** @description The back finding attribute of the item. */
    BackFinding?: string;
    /** @description The band material type attribute of the item. */
    BandMaterialType?: string;
    /** @description The binding attribute of the item. */
    Binding?: string;
    /** @description The Bluray region attribute of the item. */
    BlurayRegion?: string;
    /** @description The brand attribute of the item. */
    Brand?: string;
    /** @description The CERO age rating attribute of the item. */
    CeroAgeRating?: string;
    /** @description The chain type attribute of the item. */
    ChainType?: string;
    /** @description The clasp type attribute of the item. */
    ClaspType?: string;
    /** @description The color attribute of the item. */
    Color?: string;
    /** @description The CPU manufacturer attribute of the item. */
    CpuManufacturer?: string;
    /** @description The CPU speed attribute of the item. */
    CpuSpeed?: definitions["DecimalWithUnits"];
    /** @description The CPU type attribute of the item. */
    CpuType?: string;
    /** @description The creator attributes of the item. */
    Creator?: definitions["CreatorType"][];
    /** @description The department attribute of the item. */
    Department?: string;
    /** @description The director attributes of the item. */
    Director?: string[];
    /** @description The display size attribute of the item. */
    DisplaySize?: definitions["DecimalWithUnits"];
    /** @description The edition attribute of the item. */
    Edition?: string;
    /** @description The episode sequence attribute of the item. */
    EpisodeSequence?: string;
    /** @description The ESRB age rating attribute of the item. */
    EsrbAgeRating?: string;
    /** @description The feature attributes of the item */
    Feature?: string[];
    /** @description The flavor attribute of the item. */
    Flavor?: string;
    /** @description The format attributes of the item. */
    Format?: string[];
    /** @description The gem type attributes of the item. */
    GemType?: string[];
    /** @description The genre attribute of the item. */
    Genre?: string;
    /** @description The golf club flex attribute of the item. */
    GolfClubFlex?: string;
    /** @description The golf club loft attribute of the item. */
    GolfClubLoft?: definitions["DecimalWithUnits"];
    /** @description The hand orientation attribute of the item. */
    HandOrientation?: string;
    /** @description The hard disk interface attribute of the item. */
    HardDiskInterface?: string;
    /** @description The hard disk size attribute of the item. */
    HardDiskSize?: definitions["DecimalWithUnits"];
    /** @description The hardware platform attribute of the item. */
    HardwarePlatform?: string;
    /** @description The hazardous material type attribute of the item. */
    HazardousMaterialType?: string;
    /** @description The item dimensions attribute of the item. */
    ItemDimensions?: definitions["DimensionType"];
    /** @description The adult product attribute of the item. */
    IsAdultProduct?: boolean;
    /** @description The autographed attribute of the item. */
    IsAutographed?: boolean;
    /** @description The is eligible for trade in attribute of the item. */
    IsEligibleForTradeIn?: boolean;
    /** @description The is memorabilia attribute of the item. */
    IsMemorabilia?: boolean;
    /** @description The issues per year attribute of the item. */
    IssuesPerYear?: string;
    /** @description The item part number attribute of the item. */
    ItemPartNumber?: string;
    /** @description The label attribute of the item. */
    Label?: string;
    /** @description The languages attribute of the item. */
    Languages?: definitions["LanguageType"][];
    /** @description The legal disclaimer attribute of the item. */
    LegalDisclaimer?: string;
    /** @description The list price attribute of the item. */
    ListPrice?: definitions["Price"];
    /** @description The manufacturer attribute of the item. */
    Manufacturer?: string;
    /** @description The manufacturer maximum age attribute of the item. */
    ManufacturerMaximumAge?: definitions["DecimalWithUnits"];
    /** @description The manufacturer minimum age attribute of the item. */
    ManufacturerMinimumAge?: definitions["DecimalWithUnits"];
    /** @description The manufacturer parts warranty description attribute of the item. */
    ManufacturerPartsWarrantyDescription?: string;
    /** @description The material type attributes of the item. */
    MaterialType?: string[];
    /** @description The maximum resolution attribute of the item. */
    MaximumResolution?: definitions["DecimalWithUnits"];
    /** @description The media type attributes of the item. */
    MediaType?: string[];
    /** @description The metal stamp attribute of the item. */
    MetalStamp?: string;
    /** @description The metal type attribute of the item. */
    MetalType?: string;
    /** @description The model attribute of the item. */
    Model?: string;
    /** @description The number of discs attribute of the item. */
    NumberOfDiscs?: number;
    /** @description The number of issues attribute of the item. */
    NumberOfIssues?: number;
    /** @description The number of items attribute of the item. */
    NumberOfItems?: number;
    /** @description The number of pages attribute of the item. */
    NumberOfPages?: number;
    /** @description The number of tracks attribute of the item. */
    NumberOfTracks?: number;
    /** @description The operating system attributes of the item. */
    OperatingSystem?: string[];
    /** @description The optical zoom attribute of the item. */
    OpticalZoom?: definitions["DecimalWithUnits"];
    /** @description The package dimensions attribute of the item. */
    PackageDimensions?: definitions["DimensionType"];
    /** @description The package quantity attribute of the item. */
    PackageQuantity?: number;
    /** @description The part number attribute of the item. */
    PartNumber?: string;
    /** @description The PEGI rating attribute of the item. */
    PegiRating?: string;
    /** @description The platform attributes of the item. */
    Platform?: string[];
    /** @description The processor count attribute of the item. */
    ProcessorCount?: number;
    /** @description The product group attribute of the item. */
    ProductGroup?: string;
    /** @description The product type name attribute of the item. */
    ProductTypeName?: string;
    /** @description The product type subcategory attribute of the item. */
    ProductTypeSubcategory?: string;
    /** @description The publication date attribute of the item. */
    PublicationDate?: string;
    /** @description The publisher attribute of the item. */
    Publisher?: string;
    /** @description The region code attribute of the item. */
    RegionCode?: string;
    /** @description The release date attribute of the item. */
    ReleaseDate?: string;
    /** @description The ring size attribute of the item. */
    RingSize?: string;
    /** @description The running time attribute of the item. */
    RunningTime?: definitions["DecimalWithUnits"];
    /** @description The shaft material attribute of the item. */
    ShaftMaterial?: string;
    /** @description The scent attribute of the item. */
    Scent?: string;
    /** @description The season sequence attribute of the item. */
    SeasonSequence?: string;
    /** @description The Seikodo product code attribute of the item. */
    SeikodoProductCode?: string;
    /** @description The size attribute of the item. */
    Size?: string;
    /** @description The size per pearl attribute of the item. */
    SizePerPearl?: string;
    /** @description The small image attribute of the item. */
    SmallImage?: definitions["Image"];
    /** @description The studio attribute of the item. */
    Studio?: string;
    /** @description The subscription length attribute of the item. */
    SubscriptionLength?: definitions["DecimalWithUnits"];
    /** @description The system memory size attribute of the item. */
    SystemMemorySize?: definitions["DecimalWithUnits"];
    /** @description The system memory type attribute of the item. */
    SystemMemoryType?: string;
    /** @description The theatrical release date attribute of the item. */
    TheatricalReleaseDate?: string;
    /** @description The title attribute of the item. */
    Title?: string;
    /** @description The total diamond weight attribute of the item. */
    TotalDiamondWeight?: definitions["DecimalWithUnits"];
    /** @description The total gem weight attribute of the item. */
    TotalGemWeight?: definitions["DecimalWithUnits"];
    /** @description The warranty attribute of the item. */
    Warranty?: string;
    /** @description The WEEE tax value attribute of the item. */
    WeeeTaxValue?: definitions["Price"];
  };
  /** @description The decimal value and unit. */
  DecimalWithUnits: {
    /** @description The decimal value. */
    value?: number;
    /** @description The unit of the decimal value. */
    Units?: string;
  };
  /** @description The creator type attribute of an item. */
  CreatorType: {
    /** @description The value of the attribute. */
    value?: string;
    /** @description The role of the value. */
    Role?: string;
  };
  /** @description The dimension type attribute of an item. */
  DimensionType: {
    /** @description The height attribute of the dimension. */
    Height?: definitions["DecimalWithUnits"];
    /** @description The length attribute of the dimension. */
    Length?: definitions["DecimalWithUnits"];
    /** @description The width attribute of the dimension. */
    Width?: definitions["DecimalWithUnits"];
    /** @description The weight attribute of the dimension. */
    Weight?: definitions["DecimalWithUnits"];
  };
  /** @description The language type attribute of an item. */
  LanguageType: {
    /** @description The name attribute of the item. */
    Name?: string;
    /** @description The type attribute of the item. */
    Type?: string;
    /** @description The audio format attribute of the item. */
    AudioFormat?: string;
  };
  /** @description The image attribute of the item. */
  Image: {
    /** @description The image URL attribute of the item. */
    URL?: string;
    /** @description The image height attribute of the item. */
    Height?: definitions["DecimalWithUnits"];
    /** @description The image width attribute of the item. */
    Width?: definitions["DecimalWithUnits"];
  };
  /** @description The price attribute of the item. */
  Price: {
    /** @description The amount. */
    Amount?: number;
    /** @description The currency code of the amount. */
    CurrencyCode?: string;
  };
  /** @description A list of variation relationship information, if applicable for the item. */
  RelationshipList: definitions["RelationshipType"][];
  /** @description Specific variations of the item. */
  RelationshipType: {
    /** @description The identifiers that uniquely identify the item that is related. */
    Identifiers?: definitions["IdentifierType"];
    /** @description The color variation of the item. */
    Color?: string;
    /** @description The edition variation of the item. */
    Edition?: string;
    /** @description The flavor variation of the item. */
    Flavor?: string;
    /** @description The gem type variations of the item. */
    GemType?: string[];
    /** @description The golf club flex variation of an item. */
    GolfClubFlex?: string;
    /** @description The hand orientation variation of an item. */
    HandOrientation?: string;
    /** @description The hardware platform variation of an item. */
    HardwarePlatform?: string;
    /** @description The material type variations of an item. */
    MaterialType?: string[];
    /** @description The metal type variation of an item. */
    MetalType?: string;
    /** @description The model variation of an item. */
    Model?: string;
    /** @description The operating system variations of an item. */
    OperatingSystem?: string[];
    /** @description The product type subcategory variation of an item. */
    ProductTypeSubcategory?: string;
    /** @description The ring size variation of an item. */
    RingSize?: string;
    /** @description The shaft material variation of an item. */
    ShaftMaterial?: string;
    /** @description The scent variation of an item. */
    Scent?: string;
    /** @description The size variation of an item. */
    Size?: string;
    /** @description The size per pearl variation of an item. */
    SizePerPearl?: string;
    /** @description The golf club loft variation of an item. */
    GolfClubLoft?: definitions["DecimalWithUnits"];
    /** @description The total diamond weight variation of an item. */
    TotalDiamondWeight?: definitions["DecimalWithUnits"];
    /** @description The total gem weight variation of an item. */
    TotalGemWeight?: definitions["DecimalWithUnits"];
    /** @description The package quantity variation of an item. */
    PackageQuantity?: number;
    /** @description The item dimensions relationship of an item. */
    ItemDimensions?: definitions["DimensionType"];
  };
  /** @description A list of sales rank information for the item by category. */
  SalesRankList: definitions["SalesRankType"][];
  SalesRankType: {
    /** @description Identifies the item category from which the sales rank is taken. */
    ProductCategoryId: string;
    /**
     * Format: int32
     * @description The sales rank of the item within the item category.
     */
    Rank: number;
  };
  ListCatalogCategoriesResponse: {
    /** @description The payload for the listCatalogCategories operation. */
    payload?: definitions["ListOfCategories"];
    /** @description One or more unexpected errors occurred during the listCatalogCategories operation. */
    errors?: definitions["ErrorList"];
  };
  ListOfCategories: definitions["Categories"][];
  Categories: {
    /** @description The identifier for the product category (or browse node). */
    ProductCategoryId?: string;
    /** @description The name of the product category (or browse node). */
    ProductCategoryName?: string;
    /** @description The parent product category. */
    parent?: { [key: string]: unknown };
  };
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: definitions["Error"][];
  /** @description Error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition in a human-readable form. */
    message: string;
    /** @description Additional information that can help the caller understand or fix the issue. */
    details?: string;
  };
}

export interface operations {
  /**
   * Effective September 30, 2022, the `listCatalogItems` operation will no longer be available in the Selling Partner API for Catalog Items v0. As an alternative, `searchCatalogItems` is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on the `listCatalogItems` operation should migrate to the `searchCatalogItems`operation to avoid service disruption.
   * _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
   */
  listCatalogItems: {
    parameters: {
      query: {
        /** A marketplace identifier. Specifies the marketplace for which items are returned. */
        MarketplaceId: string;
        /** Keyword(s) to use to search for items in the catalog. Example: 'harry potter books'. */
        Query?: string;
        /** An identifier for the context within which the given search will be performed. A marketplace might provide mechanisms for constraining a search to a subset of potential items. For example, the retail marketplace allows queries to be constrained to a specific category. The QueryContextId parameter specifies such a subset. If it is omitted, the search will be performed using the default context for the marketplace, which will typically contain the largest set of items. */
        QueryContextId?: string;
        /** Used to identify an item in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
        SellerSKU?: string;
        /** A 12-digit bar code used for retail packaging. */
        UPC?: string;
        /** A European article number that uniquely identifies the catalog item, manufacturer, and its attributes. */
        EAN?: string;
        /** The unique commercial book identifier used to identify books internationally. */
        ISBN?: string;
        /** A Japanese article number that uniquely identifies the product, manufacturer, and its attributes. */
        JAN?: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ListCatalogItemsResponse"];
      };
    };
  };
  /**
   * Effective September 30, 2022, the `getCatalogItem` operation will no longer be available in the Selling Partner API for Catalog Items v0. This operation is available in the latest version of the [Selling Partner API for Catalog Items v2022-04-01](doc:catalog-items-api-v2022-04-01-reference). Integrations that rely on this operation should migrate to the latest version to avoid service disruption.
   * _Note:_ The [`listCatalogCategories`](#get-catalogv0categories) operation is not being deprecated and you can continue to make calls to it.
   */
  getCatalogItem: {
    parameters: {
      query: {
        /** A marketplace identifier. Specifies the marketplace for the item. */
        MarketplaceId: string;
      };
      path: {
        /** The Amazon Standard Identification Number (ASIN) of the item. */
        asin: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetCatalogItemResponse"];
      };
    };
  };
  /**
   * Returns the parent categories to which an item belongs, based on the specified ASIN or SellerSKU.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1 | 2 |
   *
   * The `x-amzn-RateLimit-Limit` response header returns the usage plan rate limits that were applied to the requested operation, when available. The table above indicates the default rate and burst values for this operation. Selling partners whose business demands require higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
   */
  listCatalogCategories: {
    parameters: {
      query: {
        /** A marketplace identifier. Specifies the marketplace for the item. */
        MarketplaceId: string;
        /** The Amazon Standard Identification Number (ASIN) of the item. */
        ASIN?: string;
        /** Used to identify items in the given marketplace. SellerSKU is qualified by the seller's SellerId, which is included with every operation that you submit. */
        SellerSKU?: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["ListCatalogCategoriesResponse"];
      };
    };
  };
}

export interface external {}
