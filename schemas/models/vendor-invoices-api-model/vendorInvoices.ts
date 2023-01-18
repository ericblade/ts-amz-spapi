/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/vendor/payments/v1/invoices": {
    /**
     * Submit new invoices to Amazon.
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
    post: operations["submitInvoices"];
  };
}

export interface definitions {
  /** @description The response schema for the submitInvoices operation. */
  SubmitInvoicesResponse: {
    /** @description The response payload for the submitInvoices operation. */
    payload?: definitions["TransactionId"];
    errors?: definitions["ErrorList"];
  };
  TransactionId: {
    /** @description GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
    transactionId?: string;
  };
  /** @description A list of error responses returned when a request is unsuccessful. */
  ErrorList: definitions["Error"][];
  /** @description Error response returned when the request is unsuccessful. */
  Error: {
    /** @description An error code that identifies the type of error that occurred. */
    code: string;
    /** @description A message that describes the error condition. */
    message: string;
    /** @description Additional details that can help the caller understand or fix the issue. */
    details?: string;
  };
  /** @description The request schema for the submitInvoices operation. */
  SubmitInvoicesRequest: {
    invoices?: definitions["Invoice"][];
  };
  Invoice: {
    /** @description Identifies the type of invoice. */
    invoiceType: "Invoice" | "CreditNote";
    /** @description Unique number relating to the charges defined in this document. This will be invoice number if the document type is Invoice or CreditNote number if the document type is Credit Note. Failure to provide this reference will result in a rejection. */
    id: string;
    /** @description An additional unique reference number used for regulatory or other purposes. */
    referenceNumber?: string;
    /** @description Date when the invoice/credit note information was generated in the origin's accounting system. The invoice date should be on or after the purchase order creation date. */
    date: definitions["DateTime"];
    /** @description Name, address and tax details of the party receiving the payment of this invoice. */
    remitToParty: definitions["PartyIdentification"];
    /** @description Name, address and tax details of the party receiving a shipment of products. */
    shipToParty?: definitions["PartyIdentification"];
    /** @description Name, address and tax details of the party sending a shipment of products. */
    shipFromParty?: definitions["PartyIdentification"];
    /** @description Name, address and tax details of the party to whom this invoice is issued. */
    billToParty?: definitions["PartyIdentification"];
    /** @description The payment terms for the invoice. */
    paymentTerms?: definitions["PaymentTerms"];
    /** @description Total monetary amount charged in the invoice or full value of credit note to be paid including all relevant taxes. It is the total amount of invoice (including charges, less allowances) before terms discount (if discount is applicable). */
    invoiceTotal: definitions["Money"];
    /** @description Total tax amount details for all line items. */
    taxDetails?: definitions["TaxDetails"][];
    /** @description Additional details provided by the selling party, for tax related or other purposes. */
    additionalDetails?: definitions["AdditionalDetails"][];
    /** @description Total charge amount details for all line items. */
    chargeDetails?: definitions["ChargeDetails"][];
    /** @description Total allowance amount details for all line items. */
    allowanceDetails?: definitions["AllowanceDetails"][];
    /** @description The list of invoice items. */
    items?: definitions["InvoiceItem"][];
  };
  PartyIdentification: {
    /** @description Assigned identification for the party. */
    partyId: string;
    /** @description Identification of the party by address. */
    address?: definitions["Address"];
    /** @description Tax registration details of the party. */
    taxRegistrationDetails?: definitions["TaxRegistrationDetails"][];
  };
  /** @description Tax registration details of the entity. */
  TaxRegistrationDetails: {
    /** @description The tax registration type for the entity. */
    taxRegistrationType: "VAT" | "GST";
    /** @description The tax registration number for the entity. For example, VAT ID. */
    taxRegistrationNumber: string;
  };
  /** @description A physical address. */
  Address: {
    /** @description The name of the person, business or institution at that address. */
    name: string;
    /** @description First line of street address. */
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
    stateOrRegion?: string;
    /** @description The postal or zip code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
    postalOrZipCode?: string;
    /** @description The two digit country code. In ISO 3166-1 alpha-2 format. */
    countryCode: string;
    /** @description The phone number of the person, business or institution located at that address. */
    phone?: string;
  };
  /** @description Details of the item being invoiced. */
  InvoiceItem: {
    /** @description Unique number related to this line item. */
    itemSequenceNumber: number;
    /** @description Amazon Standard Identification Number (ASIN) of an item. */
    amazonProductIdentifier?: string;
    /** @description The vendor selected product identifier of the item. Should be the same as was provided in the purchase order. */
    vendorProductIdentifier?: string;
    /** @description Invoiced quantity of this item. Quantity must be greater than zero. */
    invoicedQuantity: definitions["ItemQuantity"];
    /** @description The item cost to Amazon, which should match the cost on the order. Price information should not be zero or negative. It indicates net unit price. Net cost means VAT is not included in cost. */
    netCost: definitions["Money"];
    /** @description The Amazon purchase order number for this invoiced line item. Formatting Notes: 8-character alpha-numeric code. This value is mandatory only when invoiceType is Invoice, and is not required when invoiceType is CreditNote. */
    purchaseOrderNumber?: string;
    /** @description HSN Tax code. The HSN number cannot contain alphabets. */
    hsnCode?: string;
    /** @description Details required in order to process a credit note. This information is required only if invoiceType is CreditNote. */
    creditNoteDetails?: definitions["CreditNoteDetails"];
    /** @description Individual tax details per line item. */
    taxDetails?: definitions["TaxDetails"][];
    /** @description Individual charge details per line item. */
    chargeDetails?: definitions["ChargeDetails"][];
    /** @description Individual allowance details per line item. */
    allowanceDetails?: definitions["AllowanceDetails"][];
  };
  /** @description Details of tax amount applied. */
  TaxDetails: {
    /** @description Type of the tax applied. */
    taxType:
      | "CGST"
      | "SGST"
      | "CESS"
      | "UTGST"
      | "IGST"
      | "MwSt."
      | "PST"
      | "TVA"
      | "VAT"
      | "GST"
      | "ST"
      | "Consumption"
      | "MutuallyDefined"
      | "DomesticVAT";
    /** @description Tax percentage applied. Percentage must be expressed in decimal. */
    taxRate?: definitions["Decimal"];
    /** @description Total tax amount applied on invoice total or an item total. */
    taxAmount: definitions["Money"];
    /** @description The invoice amount that is taxable at the rate specified in the tax rate field. */
    taxableAmount?: definitions["Money"];
  };
  /** @description An amount of money, including units in the form of currency. */
  Money: {
    /** @description Three-digit currency code in ISO 4217 format. */
    currencyCode?: string;
    amount?: definitions["Decimal"];
  };
  /** @description Additional information provided by the selling party for tax-related or any other purpose. */
  AdditionalDetails: {
    /** @description The type of the additional information provided by the selling party. */
    type: "SUR" | "OCR" | "CartonCount";
    /** @description The detail of the additional information provided by the selling party. */
    detail: string;
    /** @description The language code of the additional information detail. */
    languageCode?: string;
  };
  /** @description Monetary and tax details of the charge. */
  ChargeDetails: {
    /** @description Type of the charge applied. */
    type:
      | "Freight"
      | "Packing"
      | "Duty"
      | "Service"
      | "SmallOrder"
      | "InsurancePlacementCost"
      | "InsuranceFee"
      | "SpecialHandlingService"
      | "CollectionAndRecyclingService"
      | "EnvironmentalProtectionService"
      | "TaxCollectedAtSource";
    /** @description Description of the charge. */
    description?: string;
    /** @description Total monetary amount related to this charge. */
    chargeAmount: definitions["Money"];
    /** @description Tax amount details applied on this charge. */
    taxDetails?: definitions["TaxDetails"][];
  };
  /** @description Monetary and tax details of the allowance. */
  AllowanceDetails: {
    /** @description Type of the allowance applied. */
    type:
      | "Discount"
      | "DiscountIncentive"
      | "Defective"
      | "Promotional"
      | "UnsaleableMerchandise"
      | "Special";
    /** @description Description of the allowance. */
    description?: string;
    /** @description Total monetary amount related to this allowance. */
    allowanceAmount: definitions["Money"];
    /** @description Tax amount details applied on this allowance. */
    taxDetails?: definitions["TaxDetails"][];
  };
  /** @description Terms of the payment for the invoice. The basis of the payment terms is the invoice date. */
  PaymentTerms: {
    /** @description The payment term type for the invoice. */
    type?:
      | "Basic"
      | "EndOfMonth"
      | "FixedDate"
      | "Proximo"
      | "PaymentDueUponReceiptOfInvoice"
      | "LetterofCredit";
    /** @description The discount percent value, which is good until the discount due date. */
    discountPercent?: definitions["Decimal"];
    /** @description The number of calendar days from the Base date (Invoice date) until the discount is no longer valid. */
    discountDueDays?: number;
    /** @description The number of calendar days from the base date (invoice date) until the total amount on the invoice is due. */
    netDueDays?: number;
  };
  /** @description References required in order to process a credit note. This information is required only if InvoiceType is CreditNote. */
  CreditNoteDetails: {
    /** @description Original Invoice Number when sending a credit note relating to an existing invoice. One Invoice only to be processed per Credit Note. This is mandatory for AP Credit Notes. */
    referenceInvoiceNumber?: string;
    /** @description Debit Note Number as generated by Amazon. Recommended for Returns and COOP Credit Notes. */
    debitNoteNumber?: string;
    /** @description Identifies the Returns Notice Number. Mandatory for all Returns Credit Notes. */
    returnsReferenceNumber?: string;
    /** @description Date that a return is received by the vendor. It is mandatory for Returns Credit Note. */
    goodsReturnDate?: definitions["DateTime"];
    /** @description Identifies the Returned Merchandise Authorization ID, if generated. */
    rmaId?: string;
    /** @description Identifies the COOP reference used for COOP agreement. Failure to provide the COOP reference number or the Debit Note number may lead to a rejection of the Credit Note. */
    coopReferenceNumber?: string;
    /** @description Identifies the consignor reference number (VRET number), if generated by Amazon. */
    consignorsReferenceNumber?: string;
  };
  /** @description Details of quantity. */
  ItemQuantity: {
    /** @description Quantity of an item. This value should not be zero. */
    amount: number;
    /** @description Unit of measure for the quantity. */
    unitOfMeasure: "Cases" | "Eaches";
    /** @description The case size, if the unit of measure value is Cases. */
    unitSize?: number;
  };
  /** @description A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation. <br>**Pattern** : `^-?(0|([1-9]\d*))(\.\d+)?([eE][+-]?\d+)?$`. */
  Decimal: string;
  /**
   * Format: date-time
   * @description Defines a date and time according to ISO8601.
   */
  DateTime: string;
}

export interface operations {
  /**
   * Submit new invoices to Amazon.
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
  submitInvoices: {
    parameters: {
      body: {
        body: definitions["SubmitInvoicesRequest"];
      };
    };
    responses: {
      /** Success. */
      202: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** Request has missing or invalid parameters and cannot be parsed. */
      400: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
      403: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** The resource specified does not exist. */
      404: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** The request size exceeded the maximum accepted size. */
      413: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** The request payload is in an unsupported format. */
      415: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** The frequency of requests was greater than allowed. */
      429: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** An unexpected condition occurred that prevented the server from fulfilling the request. */
      500: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
      /** Temporary overloading or maintenance of the server. */
      503: {
        headers: {};
        schema: definitions["SubmitInvoicesResponse"];
      };
    };
  };
}

export interface external {}
