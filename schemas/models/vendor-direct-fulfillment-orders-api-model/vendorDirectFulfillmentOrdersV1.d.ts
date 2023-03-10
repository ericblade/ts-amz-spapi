/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    "/vendor/directFulfillment/orders/v1/purchaseOrders": {
        /**
         * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.
         *
         * **Usage Plans:**
         *
         * | Plan type | Rate (requests per second) | Burst |
         * | ---- | ---- | ---- |
         * |Default| 10 | 10 |
         * |Selling partner specific| Variable | Variable |
         *
         * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        get: operations["getOrders"];
    };
    "/vendor/directFulfillment/orders/v1/purchaseOrders/{purchaseOrderNumber}": {
        /**
         * Returns purchase order information for the purchaseOrderNumber that you specify.
         *
         * **Usage Plans:**
         *
         * | Plan type | Rate (requests per second) | Burst |
         * | ---- | ---- | ---- |
         * |Default| 10 | 10 |
         * |Selling partner specific| Variable | Variable |
         *
         * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        get: operations["getOrder"];
    };
    "/vendor/directFulfillment/orders/v1/acknowledgements": {
        /**
         * Submits acknowledgements for one or more purchase orders.
         *
         * **Usage Plans:**
         *
         * | Plan type | Rate (requests per second) | Burst |
         * | ---- | ---- | ---- |
         * |Default| 10 | 10 |
         * |Selling partner specific| Variable | Variable |
         *
         * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        post: operations["submitAcknowledgement"];
    };
}
export interface definitions {
    /** @description The response schema for the getOrders operation. */
    GetOrdersResponse: {
        /** @description A list of purchase orders. */
        payload?: definitions["OrderList"];
        errors?: definitions["ErrorList"];
    };
    /** @description The response schema for the getOrder operation. */
    GetOrderResponse: {
        /** @description The payload for the getOrder operation. */
        payload?: definitions["Order"];
        errors?: definitions["ErrorList"];
    };
    OrderList: {
        pagination?: definitions["Pagination"];
        orders?: definitions["Order"][];
    };
    Pagination: {
        /** @description A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return. */
        nextToken?: string;
    };
    Order: {
        /** @description The purchase order number for this order. Formatting Notes: alpha-numeric code. */
        purchaseOrderNumber: string;
        /** @description Purchase order details. */
        orderDetails?: definitions["OrderDetails"];
    };
    /** @description Details of an order. */
    OrderDetails: {
        /** @description The customer order number. */
        customerOrderNumber: string;
        /**
         * Format: date-time
         * @description The date the order was placed. This field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.
         */
        orderDate: string;
        /** @description Current status of the order. */
        orderStatus?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
        shipmentDetails: definitions["ShipmentDetails"];
        taxTotal?: {
            /** @description Tax details. */
            taxLineItem?: definitions["TaxLineItem"];
        };
        /** @description PartyID of vendor code. */
        sellingParty: definitions["PartyIdentification"];
        /** @description PartyID of vendor's warehouse. */
        shipFromParty: definitions["PartyIdentification"];
        /** @description Name/Address and tax details of the ship to party. */
        shipToParty: definitions["Address"];
        /** @description Name/Address and tax details of the bill to party. */
        billToParty: definitions["PartyIdentification"];
        /** @description A list of items in this purchase order. */
        items: definitions["OrderItem"][];
    };
    PartyIdentification: {
        /** @description Assigned identification for the party. For example, warehouse code or vendor code. Please refer to specific party for more details. */
        partyId: string;
        /** @description Address details of the party. */
        address?: definitions["Address"];
        /** @description Tax registration details of the entity. */
        taxInfo?: definitions["TaxRegistrationDetails"];
    };
    /** @description Tax registration details of the entity. */
    TaxRegistrationDetails: {
        /** @description Tax registration type for the entity. */
        taxRegistrationType?: "VAT" | "GST";
        /** @description Tax registration number for the party. For example, VAT ID. */
        taxRegistrationNumber: string;
        /** @description Address associated with the tax registration number. */
        taxRegistrationAddress?: definitions["Address"];
        /** @description Tax registration message that can be used for additional tax related details. */
        taxRegistrationMessages?: string;
    };
    /** @description Address of the party. */
    Address: {
        /** @description The name of the person, business or institution at that address. */
        name: string;
        /** @description The attention name of the person at that address. */
        attention?: string;
        /** @description First line of the address. */
        addressLine1: string;
        /** @description Additional address information, if required. */
        addressLine2?: string;
        /** @description Additional address information, if required. */
        addressLine3?: string;
        /** @description The city where the person, business or institution is located. */
        city?: string;
        /** @description The county where person, business or institution is located. */
        county?: string;
        /** @description The district where person, business or institution is located. */
        district?: string;
        /** @description The state or region where person, business or institution is located. */
        stateOrRegion: string;
        /** @description The postal code of that address. It conatins a series of letters or digits or both, sometimes including spaces or punctuation. */
        postalCode?: string;
        /** @description The two digit country code. In ISO 3166-1 alpha-2 format. */
        countryCode: string;
        /** @description The phone number of the person, business or institution located at that address. */
        phone?: string;
    };
    OrderItem: {
        /** @description Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on. */
        itemSequenceNumber: string;
        /** @description Buyer's standard identification number (ASIN) of an item. */
        buyerProductIdentifier?: string;
        /** @description The vendor selected product identification of the item. */
        vendorProductIdentifier?: string;
        /** @description Title for the item. */
        title?: string;
        /** @description Item quantity ordered. */
        orderedQuantity: definitions["ItemQuantity"];
        /** @description Details for the scheduled delivery shipment. */
        scheduledDeliveryShipment?: definitions["ScheduledDeliveryShipment"];
        /** @description Gift message and wrapId details. */
        giftDetails?: definitions["GiftDetails"];
        /** @description Net price (before tax) to vendor with currency details. */
        netPrice: definitions["Money"];
        /** @description Total tax details for the line item. */
        taxDetails?: {
            /** @description Tax details. */
            taxLineItem?: definitions["TaxLineItem"];
        };
        /** @description The price to Amazon each (cost). */
        totalPrice?: definitions["Money"];
    };
    /** @description An amount of money, including units in the form of currency. */
    Money: {
        /** @description Three digit currency code in ISO 4217 format. String of length 3. */
        currencyCode?: string;
        amount?: definitions["Decimal"];
    };
    /** @description A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. */
    Decimal: string;
    /** @description The response schema for the submitAcknowledgement operation. */
    SubmitAcknowledgementResponse: {
        /** @description The payload for the submitAcknowledgement operation. */
        payload?: definitions["TransactionId"];
        errors?: definitions["ErrorList"];
    };
    TransactionId: {
        /** @description GUID assigned by Amazon to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
        transactionId?: string;
    };
    /** @description A list of error responses returned when a request is unsuccessful. */
    ErrorList: definitions["Error"][];
    /** @description The request schema for the submitAcknowledgement operation. */
    SubmitAcknowledgementRequest: {
        /** @description A list of one or more purchase orders. */
        orderAcknowledgements?: definitions["OrderAcknowledgementItem"][];
    };
    /** @description Details of an individual order being acknowledged. */
    OrderAcknowledgementItem: {
        /** @description The purchase order number for this order. Formatting Notes: alpha-numeric code. */
        purchaseOrderNumber: string;
        /** @description The vendor's order number for this order. */
        vendorOrderNumber: string;
        /**
         * Format: date-time
         * @description The date and time when the order is acknowledged, in ISO-8601 date/time format. For example: 2018-07-16T23:00:00Z / 2018-07-16T23:00:00-05:00 / 2018-07-16T23:00:00-08:00.
         */
        acknowledgementDate: string;
        /** @description Status of acknowledgement. */
        acknowledgementStatus: definitions["AcknowledgementStatus"];
        /** @description PartyID as vendor code. */
        sellingParty: definitions["PartyIdentification"];
        /** @description PartyID as the vendor's warehouseId. */
        shipFromParty: definitions["PartyIdentification"];
        /** @description Item details including acknowledged quantity. */
        itemAcknowledgements: definitions["OrderItemAcknowledgement"][];
    };
    OrderItemAcknowledgement: {
        /** @description Line item sequence number for the item. */
        itemSequenceNumber: string;
        /** @description Buyer's standard identification number (ASIN) of an item. */
        buyerProductIdentifier?: string;
        /** @description The vendor selected product identification of the item. Should be the same as was provided in the purchase order. */
        vendorProductIdentifier?: string;
        /** @description Details of quantity acknowledged with the above acknowledgement code. */
        acknowledgedQuantity: definitions["ItemQuantity"];
    };
    /** @description Details of quantity ordered. */
    ItemQuantity: {
        /** @description Acknowledged quantity. This value should not be zero. */
        amount?: number;
        /** @description Unit of measure for the acknowledged quantity. */
        unitOfMeasure?: "Each";
    };
    /** @description A list of tax line items. */
    TaxLineItem: definitions["TaxDetails"][];
    TaxDetails: {
        taxRate?: definitions["Decimal"];
        taxAmount: definitions["Money"];
        taxableAmount?: definitions["Money"];
        /** @description Tax type. */
        type?: "CONSUMPTION" | "GST" | "MwSt." | "PST" | "TOTAL" | "TVA" | "VAT";
    };
    /** @description Status of acknowledgement. */
    AcknowledgementStatus: {
        /** @description Acknowledgement code is a unique two digit value which indicates the status of the acknowledgement. For a list of acknowledgement codes that Amazon supports, see the Vendor Direct Fulfillment APIs Use Case Guide. */
        code?: string;
        /** @description Reason for the acknowledgement code. */
        description?: string;
    };
    /** @description Error response returned when the request is unsuccessful. */
    Error: {
        /** @description An error code that identifies the type of error that occurred. */
        code: string;
        /** @description A message that describes the error condition. */
        message: string;
        /** @description Additional details that can help the caller understand or fix the issue. */
        details?: string;
    };
    /** @description Shipment details required for the shipment. */
    ShipmentDetails: {
        /** @description When true, this is a priority shipment. */
        isPriorityShipment: boolean;
        /** @description When true, this order is part of a scheduled delivery program. */
        isScheduledDeliveryShipment?: boolean;
        /** @description When true, a packing slip is required to be sent to the customer. */
        isPslipRequired: boolean;
        /** @description When true, the order contain a gift. Include the gift message and gift wrap information. */
        isGift?: boolean;
        /** @description Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the 'Help' section on Vendor Central for 'ship methods'. */
        shipMethod: string;
        shipmentDates: definitions["ShipmentDates"];
        /** @description Message to customer for order status. */
        messageToCustomer: string;
    };
    /** @description Shipment dates. */
    ShipmentDates: {
        /**
         * Format: date-time
         * @description Time by which the vendor is required to ship the order.
         */
        requiredShipDate: string;
        /**
         * Format: date-time
         * @description Delivery date promised to the Amazon customer.
         */
        promisedDeliveryDate?: string;
    };
    /** @description Dates for the scheduled delivery shipments. */
    ScheduledDeliveryShipment: {
        /** @description Scheduled delivery service type. */
        scheduledDeliveryServiceType?: string;
        /**
         * Format: date-time
         * @description Earliest nominated delivery date for the scheduled delivery.
         */
        earliestNominatedDeliveryDate?: string;
        /**
         * Format: date-time
         * @description Latest nominated delivery date for the scheduled delivery.
         */
        latestNominatedDeliveryDate?: string;
    };
    /** @description Gift details for the item. */
    GiftDetails: {
        /** @description Gift message to be printed in shipment. */
        giftMessage?: string;
        /** @description Gift wrap identifier for the gift wrapping, if any. */
        giftWrapId?: string;
    };
}
export interface operations {
    /**
     * Returns a list of purchase orders created during the time frame that you specify. You define the time frame using the createdAfter and createdBefore parameters. You must use both parameters. You can choose to get only the purchase order numbers by setting the includeDetails parameter to false. In that case, the operation returns a list of purchase order numbers. You can then call the getOrder operation to return the details of a specific order.
     *
     * **Usage Plans:**
     *
     * | Plan type | Rate (requests per second) | Burst |
     * | ---- | ---- | ---- |
     * |Default| 10 | 10 |
     * |Selling partner specific| Variable | Variable |
     *
     * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    getOrders: {
        parameters: {
            query: {
                /** The vendor warehouse identifier for the fulfillment warehouse. If not specified, the result will contain orders for all warehouses. */
                shipFromPartyId?: string;
                /** Returns only the purchase orders that match the specified status. If not specified, the result will contain orders that match any status. */
                status?: "NEW" | "SHIPPED" | "ACCEPTED" | "CANCELLED";
                /** The limit to the number of purchase orders returned. */
                limit?: number;
                /** Purchase orders that became available after this date and time will be included in the result. Must be in ISO-8601 date/time format. */
                createdAfter: string;
                /** Purchase orders that became available before this date and time will be included in the result. Must be in ISO-8601 date/time format. */
                createdBefore: string;
                /** Sort the list in ascending or descending order by order creation date. */
                sortOrder?: "ASC" | "DESC";
                /** Used for pagination when there are more orders than the specified result size limit. The token value is returned in the previous API call. */
                nextToken?: string;
                /** When true, returns the complete purchase order details. Otherwise, only purchase order numbers are returned. */
                includeDetails?: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** The resource specified does not exist. */
            404: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** The request payload is in an unsupported format. */
            415: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** The frequency of requests was greater than allowed. */
            429: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** An unexpected condition occurred that prevented the server from fulfilling the request. */
            500: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
            /** Temporary overloading or maintenance of the server. */
            503: {
                headers: {};
                schema: definitions["GetOrdersResponse"];
            };
        };
    };
    /**
     * Returns purchase order information for the purchaseOrderNumber that you specify.
     *
     * **Usage Plans:**
     *
     * | Plan type | Rate (requests per second) | Burst |
     * | ---- | ---- | ---- |
     * |Default| 10 | 10 |
     * |Selling partner specific| Variable | Variable |
     *
     * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    getOrder: {
        parameters: {
            path: {
                /** The order identifier for the purchase order that you want. Formatting Notes: alpha-numeric code. */
                purchaseOrderNumber: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** The resource specified does not exist. */
            404: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** The request payload is in an unsupported format. */
            415: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** The frequency of requests was greater than allowed. */
            429: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** An unexpected condition occurred that prevented the server from fulfilling the request. */
            500: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
            /** Temporary overloading or maintenance of the server. */
            503: {
                headers: {};
                schema: definitions["GetOrderResponse"];
            };
        };
    };
    /**
     * Submits acknowledgements for one or more purchase orders.
     *
     * **Usage Plans:**
     *
     * | Plan type | Rate (requests per second) | Burst |
     * | ---- | ---- | ---- |
     * |Default| 10 | 10 |
     * |Selling partner specific| Variable | Variable |
     *
     * The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    submitAcknowledgement: {
        parameters: {
            body: {
                body: definitions["SubmitAcknowledgementRequest"];
            };
        };
        responses: {
            /** Success. */
            202: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** The resource specified does not exist. */
            404: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** The request size exceeded the maximum accepted size. */
            413: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** The request payload is in an unsupported format. */
            415: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** The frequency of requests was greater than allowed. */
            429: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** An unexpected condition occurred that prevented the server from fulfilling the request. */
            500: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
            /** Temporary overloading or maintenance of the server. */
            503: {
                headers: {};
                schema: definitions["SubmitAcknowledgementResponse"];
            };
        };
    };
}
export interface external {
}
