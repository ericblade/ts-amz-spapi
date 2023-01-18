/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/uploads/2020-11-01/uploadDestinations/{resource}": {
    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | .1 | 5 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    post: operations["createUploadDestinationForResource"];
  };
}

export interface definitions {
  /** @description The response schema for the createUploadDestination operation. */
  CreateUploadDestinationResponse: {
    payload?: definitions["UploadDestination"];
    errors?: definitions["ErrorList"];
  };
  /** @description Information about an upload destination. */
  UploadDestination: {
    /** @description The unique identifier for the upload destination. */
    uploadDestinationId?: string;
    /** @description The URL for the upload destination. */
    url?: string;
    /** @description The headers to include in the upload request. */
    headers?: { [key: string]: unknown };
  };
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: definitions["Error"][];
  /** @description Error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition in a human-readable form. */
    message: string;
    /** @description Additional details that can help the caller understand or fix the issue. */
    details?: string;
  };
}

export interface operations {
  /**
   * Creates an upload destination, returning the information required to upload a file to the destination and to programmatically access the file.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | .1 | 5 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  createUploadDestinationForResource: {
    parameters: {
      query: {
        /** A list of marketplace identifiers. This specifies the marketplaces where the upload will be available. Only one marketplace can be specified. */
        marketplaceIds: string[];
        /** An MD5 hash of the content to be submitted to the upload destination. This value is used to determine if the data has been corrupted or tampered with during transit. */
        contentMD5: string;
        /** The content type of the file to be uploaded. */
        contentType?: string;
      };
      path: {
        /** The resource for the upload destination that you are creating. For example, if you are creating an upload destination for the createLegalDisclosure operation of the Messaging API, the `{resource}` would be `/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`, and the entire path would be `/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure`. If you are creating an upload destination for an Aplus content document, the `{resource}` would be `aplus/2020-11-01/contentDocuments` and the path would be `/uploads/v1/uploadDestinations/aplus/2020-11-01/contentDocuments`. */
        resource: string;
      };
    };
    responses: {
      /** Success. */
      201: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["CreateUploadDestinationResponse"];
      };
    };
  };
}

export interface external {}
