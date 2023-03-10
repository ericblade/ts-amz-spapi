/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    "/authorization/v1/authorizationCode": {
        /**
         * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller's behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 1 | 5 |
         *
         * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        get: operations["getAuthorizationCode"];
    };
}
export interface definitions {
    /** @description The response schema for the GetAuthorizationCode operation. */
    GetAuthorizationCodeResponse: {
        payload?: definitions["AuthorizationCode"];
        errors?: definitions["ErrorList"];
    };
    /** @description A Login with Amazon (LWA) authorization code. */
    AuthorizationCode: {
        /** @description A Login with Amazon (LWA) authorization code that can be exchanged for a refresh token and access token that authorize you to make calls to a Selling Partner API. */
        authorizationCode?: string;
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
     * With the getAuthorizationCode operation, you can request a Login With Amazon (LWA) authorization code that will allow you to call a Selling Partner API on behalf of a seller who has already authorized you to call Amazon Marketplace Web Service (Amazon MWS). You specify a developer ID, an MWS auth token, and a seller ID. Taken together, these represent the Amazon MWS authorization that the seller previously granted you. The operation returns an LWA authorization code that can be exchanged for a refresh token and access token representing authorization to call the Selling Partner API on the seller's behalf. By using this API, sellers who have already authorized you for Amazon MWS do not need to re-authorize you for the Selling Partner API.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 1 | 5 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    getAuthorizationCode: {
        parameters: {
            query: {
                /** The seller ID of the seller for whom you are requesting Selling Partner API authorization. This must be the seller ID of the seller who authorized your application on the Marketplace Appstore. */
                sellingPartnerId: string;
                /** Your developer ID. This must be one of the developer ID values that you provided when you registered your application in Developer Central. */
                developerId: string;
                /** The MWS Auth Token that was generated when the seller authorized your application on the Marketplace Appstore. */
                mwsAuthToken: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** The resource specified does not exist. */
            404: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** The request size exceeded the maximum accepted size. */
            413: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** The request payload is in an unsupported format. */
            415: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** The frequency of requests was greater than allowed. */
            429: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** An unexpected condition occurred that prevented the server from fulfilling the request. */
            500: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
            /** Temporary overloading or maintenance of the server. */
            503: {
                headers: {};
                schema: definitions["GetAuthorizationCodeResponse"];
            };
        };
    };
}
export interface external {
}
