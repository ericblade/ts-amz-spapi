/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */
export interface paths {
    "/reports/2021-06-30/reports": {
        /**
         * Returns report details for the reports that match the filters that you specify.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        get: operations["getReports"];
        /**
         * Creates a report.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0167 | 15 |
         *
         * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        post: operations["createReport"];
        parameters: {};
    };
    "/reports/2021-06-30/reports/{reportId}": {
        /**
         * Returns report details (including the reportDocumentId, if available) for the report that you specify.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 2.0 | 15 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
         */
        get: operations["getReport"];
        /**
         * Cancels the report that you specify. Only reports with processingStatus=IN_QUEUE can be cancelled. Cancelled reports are returned in subsequent calls to the getReport and getReports operations.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
         */
        delete: operations["cancelReport"];
        parameters: {};
    };
    "/reports/2021-06-30/schedules": {
        /**
         * Returns report schedule details that match the filters that you specify.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
         */
        get: operations["getReportSchedules"];
        /**
         * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
         */
        post: operations["createReportSchedule"];
        parameters: {};
    };
    "/reports/2021-06-30/schedules/{reportScheduleId}": {
        /**
         * Returns report schedule details for the report schedule that you specify.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
         */
        get: operations["getReportSchedule"];
        /**
         * Cancels the report schedule that you specify.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0222 | 10 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
         */
        delete: operations["cancelReportSchedule"];
        parameters: {};
    };
    "/reports/2021-06-30/documents/{reportDocumentId}": {
        /**
         * Returns the information required for retrieving a report document's contents.
         *
         * **Usage Plan:**
         *
         * | Rate (requests per second) | Burst |
         * | ---- | ---- |
         * | 0.0167 | 15 |
         *
         * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api)in the Selling Partner API documentation.
         */
        get: operations["getReportDocument"];
    };
}
export interface definitions {
    /** @description A list of error responses returned when a request is unsuccessful. */
    ErrorList: {
        errors: definitions["Error"][];
    };
    /** @description Error response returned when the request is unsuccessful. */
    Error: {
        /** @description An error code that identifies the type of error that occurred. */
        code: string;
        /** @description A message that describes the error condition in a human-readable form. */
        message: string;
        /** @description Additional details that can help the caller understand or fix the issue. */
        details?: string;
    };
    /** @description Detailed information about the report. */
    Report: {
        /** @description A list of marketplace identifiers for the report. */
        marketplaceIds?: string[];
        /** @description The identifier for the report. This identifier is unique only in combination with a seller ID. */
        reportId: string;
        /** @description The report type. */
        reportType: string;
        /**
         * Format: date-time
         * @description The start of a date and time range used for selecting the data to report.
         */
        dataStartTime?: string;
        /**
         * Format: date-time
         * @description The end of a date and time range used for selecting the data to report.
         */
        dataEndTime?: string;
        /** @description The identifier of the report schedule that created this report (if any). This identifier is unique only in combination with a seller ID. */
        reportScheduleId?: string;
        /**
         * Format: date-time
         * @description The date and time when the report was created.
         */
        createdTime: string;
        /** @description The processing status of the report. */
        processingStatus: "CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE";
        /**
         * Format: date-time
         * @description The date and time when the report processing started, in ISO 8601 date time format.
         */
        processingStartTime?: string;
        /**
         * Format: date-time
         * @description The date and time when the report processing completed, in ISO 8601 date time format.
         */
        processingEndTime?: string;
        /** @description The identifier for the report document. Pass this into the getReportDocument operation to get the information you will need to retrieve the report document's contents. */
        reportDocumentId?: string;
    };
    /** @description A list of reports. */
    ReportList: definitions["Report"][];
    CreateReportScheduleSpecification: {
        /** @description The report type. */
        reportType: string;
        /** @description A list of marketplace identifiers for the report schedule. */
        marketplaceIds: string[];
        reportOptions?: definitions["ReportOptions"];
        /** @description One of a set of predefined ISO 8601 periods that specifies how often a report should be created. */
        period: "PT5M" | "PT15M" | "PT30M" | "PT1H" | "PT2H" | "PT4H" | "PT8H" | "PT12H" | "P1D" | "P2D" | "P3D" | "PT84H" | "P7D" | "P14D" | "P15D" | "P18D" | "P30D" | "P1M";
        /**
         * Format: date-time
         * @description The date and time when the schedule will create its next report, in ISO 8601 date time format.
         */
        nextReportCreationTime?: string;
    };
    /** @description Information required to create the report. */
    CreateReportSpecification: {
        reportOptions?: definitions["ReportOptions"];
        /** @description The report type. */
        reportType: string;
        /**
         * Format: date-time
         * @description The start of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
         */
        dataStartTime?: string;
        /**
         * Format: date-time
         * @description The end of a date and time range, in ISO 8601 date time format, used for selecting the data to report. The default is now. The value must be prior to or equal to the current date and time. Not all report types make use of this.
         */
        dataEndTime?: string;
        /** @description A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. */
        marketplaceIds: string[];
    };
    /** @description Additional information passed to reports. This varies by report type. */
    ReportOptions: {
        [key: string]: string;
    };
    /** @description Detailed information about a report schedule. */
    ReportSchedule: {
        /** @description The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
        reportScheduleId: string;
        /** @description The report type. */
        reportType: string;
        /** @description A list of marketplace identifiers. The report document's contents will contain data for all of the specified marketplaces, unless the report type indicates otherwise. */
        marketplaceIds?: string[];
        reportOptions?: definitions["ReportOptions"];
        /** @description An ISO 8601 period value that indicates how often a report should be created. */
        period: string;
        /**
         * Format: date-time
         * @description The date and time when the schedule will create its next report, in ISO 8601 date time format.
         */
        nextReportCreationTime?: string;
    };
    /** @description A list of report schedules. */
    ReportScheduleList: {
        reportSchedules: definitions["ReportSchedule"][];
    };
    /** @description Response schema. */
    CreateReportResponse: {
        /** @description The identifier for the report. This identifier is unique only in combination with a seller ID. */
        reportId: string;
    };
    /** @description The response for the getReports operation. */
    GetReportsResponse: {
        /** @description The reports. */
        reports: definitions["ReportList"];
        /** @description Returned when the number of results exceeds pageSize. To get the next page of results, call getReports with this token as the only parameter. */
        nextToken?: string;
    };
    /** @description Response schema. */
    CreateReportScheduleResponse: {
        /** @description The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
        reportScheduleId: string;
    };
    /** @description Information required for the report document. */
    ReportDocument: {
        /** @description The identifier for the report document. This identifier is unique only in combination with a seller ID. */
        reportDocumentId: string;
        /** @description A presigned URL for the report document. If `compressionAlgorithm` is not returned, you can download the report directly from this URL. This URL expires after 5 minutes. */
        url: string;
        /** @description If the report document contents have been compressed, the compression algorithm used is returned in this property and you must decompress the report when you download. Otherwise, you can download the report directly. Refer to [Step 2. Download the report](doc:reports-api-v2021-06-30-retrieve-a-report#step-2-download-the-report) in the use case guide, where sample code is provided. */
        compressionAlgorithm?: "GZIP";
    };
}
export interface operations {
    /**
     * Returns report details for the reports that match the filters that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    getReports: {
        parameters: {
            query: {
                /** A list of report types used to filter reports. When reportTypes is provided, the other filter parameters (processingStatuses, marketplaceIds, createdSince, createdUntil) and pageSize may also be provided. Either reportTypes or nextToken is required. */
                reportTypes?: string[];
                /** A list of processing statuses used to filter reports. */
                processingStatuses?: ("CANCELLED" | "DONE" | "FATAL" | "IN_PROGRESS" | "IN_QUEUE")[];
                /** A list of marketplace identifiers used to filter reports. The reports returned will match at least one of the marketplaces that you specify. */
                marketplaceIds?: string[];
                /** The maximum number of reports to return in a single call. */
                pageSize?: number;
                /** The earliest report creation date and time for reports to include in the response, in ISO 8601 date time format. The default is 90 days ago. Reports are retained for a maximum of 90 days. */
                createdSince?: string;
                /** The latest report creation date and time for reports to include in the response, in ISO 8601 date time format. The default is now. */
                createdUntil?: string;
                /** A string token returned in the response to your previous request. nextToken is returned when the number of results exceeds the specified pageSize value. To get the next page of results, call the getReports operation and include this token as the only parameter. Specifying nextToken with any other parameters will cause the request to fail. */
                nextToken?: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["GetReportsResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Creates a report.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0167 | 15 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    createReport: {
        parameters: {
            body: {
                body: definitions["CreateReportSpecification"];
            };
        };
        responses: {
            /** Success. */
            202: {
                headers: {};
                schema: definitions["CreateReportResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Returns report details (including the reportDocumentId, if available) for the report that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 2.0 | 15 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
     */
    getReport: {
        parameters: {
            path: {
                /** The identifier for the report. This identifier is unique only in combination with a seller ID. */
                reportId: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["Report"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Cancels the report that you specify. Only reports with processingStatus=IN_QUEUE can be cancelled. Cancelled reports are returned in subsequent calls to the getReport and getReports operations.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see "Usage Plans and Rate Limits" in the Selling Partner API documentation.
     */
    cancelReport: {
        parameters: {
            path: {
                /** The identifier for the report. This identifier is unique only in combination with a seller ID. */
                reportId: string;
            };
        };
        responses: {
            /** Success. */
            200: unknown;
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Returns report schedule details that match the filters that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
     */
    getReportSchedules: {
        parameters: {
            query: {
                /** A list of report types used to filter report schedules. */
                reportTypes: string[];
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["ReportScheduleList"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Creates a report schedule. If a report schedule with the same report type and marketplace IDs already exists, it will be cancelled and replaced with this one.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
     */
    createReportSchedule: {
        parameters: {
            body: {
                body: definitions["CreateReportScheduleSpecification"];
            };
        };
        responses: {
            /** Success. */
            201: {
                headers: {};
                schema: definitions["CreateReportScheduleResponse"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Returns report schedule details for the report schedule that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
     */
    getReportSchedule: {
        parameters: {
            path: {
                /** The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
                reportScheduleId: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["ReportSchedule"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Cancels the report schedule that you specify.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0222 | 10 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api) in the Selling Partner API documentation.
     */
    cancelReportSchedule: {
        parameters: {
            path: {
                /** The identifier for the report schedule. This identifier is unique only in combination with a seller ID. */
                reportScheduleId: string;
            };
        };
        responses: {
            /** Success. */
            200: unknown;
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates that access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
     * Returns the information required for retrieving a report document's contents.
     *
     * **Usage Plan:**
     *
     * | Rate (requests per second) | Burst |
     * | ---- | ---- |
     * | 0.0167 | 15 |
     *
     * For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api)in the Selling Partner API documentation.
     */
    getReportDocument: {
        parameters: {
            path: {
                /** The identifier for the report document. */
                reportDocumentId: string;
            };
        };
        responses: {
            /** Success. */
            200: {
                headers: {};
                schema: definitions["ReportDocument"];
            };
            /** Request has missing or invalid parameters and cannot be parsed. */
            400: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Authorization header is not formatted correctly or does not contain a valid token. */
            401: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** Indicates access to the resource is forbidden. Possible reasons include Access Denied, Unauthorized, Expired Token, or Invalid Signature. */
            403: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The specified resource does not exist. */
            404: {
                headers: {};
                schema: definitions["ErrorList"];
            };
            /** The request's Content-Type header is invalid. */
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
export interface external {
}
