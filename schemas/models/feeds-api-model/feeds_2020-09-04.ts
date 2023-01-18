/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/feeds/2020-09-04/feeds": {
    /**
     * Returns feed details for the feeds that match the filters that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    get: operations["getFeeds"];
    /**
     * Creates a feed. Encrypt and upload the contents of the feed document before calling this operation.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0083 | 15 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    post: operations["createFeed"];
  };
  "/feeds/2020-09-04/feeds/{feedId}": {
    /**
     * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 2.0 | 15 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    get: operations["getFeed"];
    /**
     * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    delete: operations["cancelFeed"];
  };
  "/feeds/2020-09-04/documents": {
    /**
     * Creates a feed document for the feed type that you specify. This operation returns encryption details for encrypting the contents of the document, as well as a presigned URL for uploading the encrypted feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0083 | 15 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    post: operations["createFeedDocument"];
  };
  "/feeds/2020-09-04/documents/{feedDocumentId}": {
    /**
     * Returns the information required for retrieving a feed document's contents. This includes a presigned URL for the feed document as well as the information required to decrypt the document's contents.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    get: operations["getFeedDocument"];
  };
}

export interface definitions {
  /** @description An error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition in a human-readable form. */
    message: string;
    /** @description Additional details that can help the caller understand or fix the issue. */
    details?: string;
  };
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: definitions["Error"][];
  /** @description Response schema. */
  CancelFeedResponse: {
    errors?: definitions["ErrorList"];
  };
  CreateFeedResult: {
    /** @description The identifier for the feed. This identifier is unique only in combination with a seller ID. */
    feedId: string;
  };
  Feed: {
    /** @description The identifier for the feed. This identifier is unique only in combination with a seller ID. */
    feedId: string;
    /** @description The feed type. */
    feedType: string;
    /** @description A list of identifiers for the marketplaces that the feed is applied to. */
    marketplaceIds?: string[];
    /**
     * Format: date-time
     * @description The date and time when the feed was created, in ISO 8601 date time format.
     */
    createdTime: string;
    /** @description The processing status of the feed. */
    processingStatus:
      | "CANCELLED"
      | "DONE"
      | "FATAL"
      | "IN_PROGRESS"
      | "IN_QUEUE";
    /**
     * Format: date-time
     * @description The date and time when feed processing started, in ISO 8601 date time format.
     */
    processingStartTime?: string;
    /**
     * Format: date-time
     * @description The date and time when feed processing completed, in ISO 8601 date time format.
     */
    processingEndTime?: string;
    /** @description The identifier for the feed document. This identifier is unique only in combination with a seller ID. */
    resultFeedDocumentId?: string;
  };
  FeedList: definitions["Feed"][];
  /** @description Response schema. */
  GetFeedsResponse: {
    payload?: definitions["FeedList"];
    /** @description Returned when the number of results exceeds pageSize. To get the next page of results, call the getFeeds operation with this token as the only parameter. */
    nextToken?: string;
    errors?: definitions["ErrorList"];
  };
  /** @description Response schema. */
  GetFeedResponse: {
    payload?: definitions["Feed"];
    errors?: definitions["ErrorList"];
  };
  /** @description Encryption details for required client-side encryption and decryption of document contents. */
  FeedDocumentEncryptionDetails: {
    /** @description The encryption standard required to encrypt or decrypt the document contents. */
    standard: "AES";
    /** @description The vector to encrypt or decrypt the document contents using Cipher Block Chaining (CBC). */
    initializationVector: string;
    /** @description The encryption key used to encrypt or decrypt the document contents. */
    key: string;
  };
  FeedDocument: {
    /** @description The identifier for the feed document. This identifier is unique only in combination with a seller ID. */
    feedDocumentId: string;
    /** @description A presigned URL for the feed document. If `compressionAlgorithm` is not returned, you can download the feed directly from this URL. This URL expires after 5 minutes. */
    url: string;
    encryptionDetails: definitions["FeedDocumentEncryptionDetails"];
    /** @description If the feed document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the feed when you download. Otherwise, you can download the feed directly. Refer to [Step 6. Download and decrypt the feed processing report](doc:feeds-api-v2020-09-04-use-case-guide#step-6-download-and-decrypt-the-feed-processing-report) in the use case guide, where sample code is provided. */
    compressionAlgorithm?: "GZIP";
  };
  /** @description Response schema. */
  GetFeedDocumentResponse: {
    payload?: definitions["FeedDocument"];
    errors?: definitions["ErrorList"];
  };
  /** @description Response schema. */
  CreateFeedResponse: {
    payload?: definitions["CreateFeedResult"];
    errors?: definitions["ErrorList"];
  };
  /** @description Additional options to control the feed. For feeds that use the feedOptions parameter, you can find the parameter values in the feed description in [feedType values](https://github.com/amzn/selling-partner-api-docs/blob/main/references/feeds-api/feedtype-values.md). */
  FeedOptions: { [key: string]: string };
  CreateFeedSpecification: {
    /** @description The feed type. */
    feedType: string;
    /** @description A list of identifiers for marketplaces that you want the feed to be applied to. */
    marketplaceIds: string[];
    /** @description The document identifier returned by the createFeedDocument operation. Encrypt and upload the feed document contents before calling the createFeed operation. */
    inputFeedDocumentId: string;
    feedOptions?: definitions["FeedOptions"];
  };
  CreateFeedDocumentSpecification: {
    /** @description The content type of the feed. */
    contentType: string;
  };
  /** @description The response for the createFeedDocument operation. */
  CreateFeedDocumentResponse: {
    payload?: definitions["CreateFeedDocumentResult"];
    errors?: definitions["ErrorList"];
  };
  /** @description Information required to encrypt and upload a feed document's contents. */
  CreateFeedDocumentResult: {
    /** @description The identifier of the feed document. */
    feedDocumentId: string;
    /** @description The presigned URL for uploading the feed contents. This URL expires after 5 minutes. */
    url: string;
    encryptionDetails: definitions["FeedDocumentEncryptionDetails"];
  };
}

export interface operations {
  /**
   * Returns feed details for the feeds that match the filters that you specify.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 0.0222 | 10 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  getFeeds: {
    parameters: {
      query: {
        /** A list of feed types used to filter feeds. When feedTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either feedTypes or nextToken is required. */
        feedTypes?: string[];
        /** A list of marketplace identifiers used to filter feeds. The feeds returned will match at least one of the marketplaces that you specify. */
        marketplaceIds?: string[];
        /** The maximum number of feeds to return in a single call. */
        pageSize?: number;
        /** A list of processing statuses used to filter feeds. */
        processingStatuses?: (
          | "CANCELLED"
          | "DONE"
          | "FATAL"
          | "IN_PROGRESS"
          | "IN_QUEUE"
        )[];
        /** The earliest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is 90 days ago. Feeds are retained for a maximum of 90 days. */
        createdSince?: string;
        /** The latest feed creation date and time for feeds included in the response, in ISO 8601 format. The default is now. */
        createdUntil?: string;
        /** A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getFeeds operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. */
        nextToken?: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** The request's Content-Type header is invalid. */
      415: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetFeedsResponse"];
      };
    };
  };
  /**
   * Creates a feed. Encrypt and upload the contents of the feed document before calling this operation.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 0.0083 | 15 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  createFeed: {
    parameters: {
      body: {
        body: definitions["CreateFeedSpecification"];
      };
    };
    responses: {
      /** Success. */
      202: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** The request's Content-Type header is invalid. */
      415: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["CreateFeedResponse"];
      };
    };
  };
  /**
   * Returns feed details (including the resultDocumentId, if available) for the feed that you specify.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 2.0 | 15 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  getFeed: {
    parameters: {
      path: {
        /** The identifier for the feed. This identifier is unique only in combination with a seller ID. */
        feedId: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** The request's Content-Type header is invalid. */
      415: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetFeedResponse"];
      };
    };
  };
  /**
   * Cancels the feed that you specify. Only feeds with processingStatus=IN_QUEUE can be cancelled. Cancelled feeds are returned in subsequent calls to the getFeed and getFeeds operations.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 0.0222 | 10 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  cancelFeed: {
    parameters: {
      path: {
        /** The identifier for the feed. This identifier is unique only in combination with a seller ID. */
        feedId: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** The request's Content-Type header is invalid. */
      415: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["CancelFeedResponse"];
      };
    };
  };
  /**
   * Creates a feed document for the feed type that you specify. This operation returns encryption details for encrypting the contents of the document, as well as a presigned URL for uploading the encrypted feed document contents. It also returns a feedDocumentId value that you can pass in with a subsequent call to the createFeed operation.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 0.0083 | 15 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  createFeedDocument: {
    parameters: {
      body: {
        body: definitions["CreateFeedDocumentSpecification"];
      };
    };
    responses: {
      /** Successfully created a feed document that is ready to receive contents. */
      201: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["CreateFeedDocumentResponse"];
      };
    };
  };
  /**
   * Returns the information required for retrieving a feed document's contents. This includes a presigned URL for the feed document as well as the information required to decrypt the document's contents.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 0.0222 | 10 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  getFeedDocument: {
    parameters: {
      path: {
        /** The identifier of the feed document. */
        feedDocumentId: string;
      };
    };
    responses: {
      /** Success. */
      200: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
      401: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** The specified resource does not exist. */
      404: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** The request's Content-Type header is invalid. */
      415: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetFeedDocumentResponse"];
      };
    };
  };
}

export interface external {}
