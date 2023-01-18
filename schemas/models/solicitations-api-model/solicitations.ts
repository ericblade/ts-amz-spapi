/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/solicitations/v1/orders/{amazonOrderId}": {
    /**
     * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1 | 5 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    get: operations["getSolicitationActionsForOrder"];
  };
  "/solicitations/v1/orders/{amazonOrderId}/solicitations/productReviewAndSellerFeedback": {
    /**
     * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1 | 5 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    post: operations["createProductReviewAndSellerFeedbackSolicitation"];
  };
}

export interface definitions {
  /** @description A Link object. */
  LinkObject: {
    /** @description A URI for this object. */
    href: string;
    /** @description An identifier for this object. */
    name?: string;
  };
  /** @description A simple object containing the name of the template. */
  SolicitationsAction: {
    name: string;
  };
  /** @description A JSON schema document describing the expected payload of the action. This object can be validated against <a href=http://json-schema.org/draft-04/schema>http://json-schema.org/draft-04/schema</a>. */
  Schema: { [key: string]: unknown };
  /** @description The response schema for the getSolicitationActionsForOrder operation. */
  GetSolicitationActionsForOrderResponse: {
    _links?: {
      self: definitions["LinkObject"];
      /** @description Eligible actions for the specified amazonOrderId. */
      actions: definitions["LinkObject"][];
    };
    _embedded?: {
      actions: definitions["GetSolicitationActionResponse"][];
    };
    errors?: definitions["ErrorList"];
  };
  /** @description Describes a solicitation action that can be taken for an order. Provides a JSON Hypertext Application Language (HAL) link to the JSON schema document that describes the expected input. */
  GetSolicitationActionResponse: {
    _links?: {
      self: definitions["LinkObject"];
      schema: definitions["LinkObject"];
    };
    _embedded?: {
      schema?: definitions["GetSchemaResponse"];
    };
    payload?: definitions["SolicitationsAction"];
    errors?: definitions["ErrorList"];
  };
  GetSchemaResponse: {
    _links?: {
      self: definitions["LinkObject"];
    };
    payload?: definitions["Schema"];
    errors?: definitions["ErrorList"];
  };
  /** @description The response schema for the createProductReviewAndSellerFeedbackSolicitation operation. */
  CreateProductReviewAndSellerFeedbackSolicitationResponse: {
    errors?: definitions["ErrorList"];
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
   * Returns a list of solicitation types that are available for an order that you specify. A solicitation type is represented by an actions object, which contains a path and query parameter(s). You can use the path and parameter(s) to call an operation that sends a solicitation. Currently only the productReviewAndSellerFeedbackSolicitation solicitation type is available.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1 | 5 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  getSolicitationActionsForOrder: {
    parameters: {
      path: {
        /** An Amazon order identifier. This specifies the order for which you want a list of available solicitation types. */
        amazonOrderId: string;
      };
      query: {
        /** A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. */
        marketplaceIds: string[];
      };
    };
    responses: {
      /** Returns hypermedia links under the _links.actions key that specify which solicitation actions are allowed for the order. */
      200: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["GetSolicitationActionsForOrderResponse"];
      };
    };
  };
  /**
   * Sends a solicitation to a buyer asking for seller feedback and a product review for the specified order. Send only one productReviewAndSellerFeedback or free form proactive message per order.
   *
   * **Usage Plan:**
   *
   * | Rate (requests per second) | Burst |
   * | ---- | ---- |
   * | 1 | 5 |
   *
   * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
   */
  createProductReviewAndSellerFeedbackSolicitation: {
    parameters: {
      path: {
        /** An Amazon order identifier. This specifies the order for which a solicitation is sent. */
        amazonOrderId: string;
      };
      query: {
        /** A marketplace identifier. This specifies the marketplace in which the order was placed. Only one marketplace can be specified. */
        marketplaceIds: string[];
      };
    };
    responses: {
      /** The message was created for the order. */
      201: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["CreateProductReviewAndSellerFeedbackSolicitationResponse"];
      };
    };
  };
}

export interface external {}
