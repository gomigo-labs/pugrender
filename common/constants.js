exports.httpConstants = {

    METHOD_TYPE: {
        POST: 'POST',
        GET: 'GET',
        PUT: 'PUT'
    },
    HEADER_TYPE: {
        URL_ENCODED: 'application/x-www-form-urlencoded',
        APPLICATION_JSON: 'application/json',
    },
    HEADER_KEYS: {
        DEVICE_TYPE: 'device-type',
        DEVICE_ID: 'device-id',
        SESSION_TOKEN: 'session-token',
        PUSH_TOKEN: 'push-token',
    },
    DEVICE_TYPE: {
        ANDROID: 'android',
        IOS: 'ios',
        WEB: 'web'
    },
    CONTENT_TYPE: {
        URL_ENCODE: 'application/x-www-form-urlencoded'
    },
    WEBSERVICE_PATH: {
        SYNC_ATTENDANCE: "sync-attendance/",
        GET_USER_PERMISSION: "/get-user-permission"
    },

    RESPONSE_STATUS: {
        SUCCESS: true,
        FAILURE: false
    },
    RESPONSE_CODES: {
        UNAUTHORIZED: 401,
        SERVER_ERROR: 500,
        NOT_FOUND: 404,
        OK: 200,
        NO_CONTENT_FOUND: 204,
        BAD_REQUEST: 400,
        FORBIDDEN: 403,
        GONE: 410,
        UNSUPPORTED_MEDIA_TYPE: 415,
        TOO_MANY_REQUEST: 429
    },
    LIMB_SVC_END_POINT: {

    },
    LOG_LEVEL_TYPE: {
        INFO: 'info',
        ERROR: 'error',
        WARN: 'warn',
        VERBOSE: 'verbose',
        DEBUG: 'debug',
        SILLY: 'silly',
        FUNCTIONAL: "functional",
        HTTP_REQUEST: 'http request'
    }
};

exports.stringConstants = {
};

exports.genericConstants = {
    DEVICE_TYPE: {
    },

};

exports.apiSuccessMessage = {
    ADD_SUCCESS: "Invoice added successfully",
    GET_SUCCESS: "Invoice get successfully",
    UPDATE_SUCCESS: "Invoice updated successfully",
};

exports.apiFailureMessage = {
    INVALID_PARAMS: 'Invalid Parameters',
    INVALID_REQUEST: 'Invalid Request',
    INVALID_SESSION_TOKEN: "Invalid session token",
    INTERNAL_SERVER_ERROR: "Internal server Error",
    BAD_REQUEST: "Bad Request!",
    DEVICE_ID_OR_SESSION_TOKEN_EMPTY: "Device id or session token can't be empty or null",
    SESSION_GENERATION: "Unable to generate session!",
    SESSION_EXPIRED: "Session Expired!",
    USER_NOT_FOUND: "User not found!",
    ADD_FAIL: "Unable to add invoice",
    GET_FAIL: "Unable to get invoice",
    UPDATE_FAIL: "Unable to update invoice"
};


exports.APMicroserviceapiEndPoints = {
    parseBill: '/parse-bill',
    UnprocessedBillInbox: '/unprocessed-bills-inbox',
    DeleteUnprocessedBillInbox: '/delete-unprocessed-bill',
    AddUnprocessedBill: '/add-unprocessed-bill',
    AddVendor: "/add-vendor",
    UpdateVendor:"/update-vendor",
    ListVendors: "/list-vendors",
    AddBill: "/add-bill",
    PayBill:'/pay-bill',
    getAllBills: "/get-bills",
    getBillsForVendor: "/get-vendor-bills",
    updateBillTxn:'/update-bill-txn',
    Approve_Bills:"/approve-bills",
    MarkAsPaid:"/mark-paid",
    Get_Approval_Bills:"/get-approval-bills"

}

exports.amqpConstants = {
    rabbitMqConst: {
        NO_CONNECTION: 'Server is not running. Restart your app',
        RABBITMQ_NOT_STARTED: 'Unable to start Rabbit Mq server',
        RABBITMQ_START: 'RabbitMq server successfully started'
    },
    queueType: {
        ONE_TO_ONE_QUEUE: 'one_to_one_queue',
        DISTRIBUTED_QUEUE: 'distributed_queue',
        PUBLISHER_SUBSCRIBER_QUEUE: 'publisher_subscriber_queue',
        ROUTING_QUEUE: 'routing_queue',
        TOPICS_QUEUE: 'topics_queue',
        REQUEST_REPLY_QUEUE: 'request_reply_queue',
    },
    AMQP_EXCHANGE_NAME: {
        ADD_ACTIVITY_EXCHANGE: "ap-add-activity-exchange",
        NOTIFICATION_EXCHANGE: "notification_exchange",
        ADD_INVOICE_EXCHANGE: "add-invoice_exchange"
    },
    AMQP_QUEUE_NAME: {
        ADD_ACTIVITY_QUEUE: "ap-add-activity-queue",
        NOTIFICATION_QUEUE: "notification_queue",
        ADD_INVOICE_QUEUE: "add-invoice_queue"
    },
    exchangeType: {
        FANOUT: 'fanout',
        TOPIC: 'topic'
    },


    AMQP_PAYLOAD_TYPE: {}
};


exports.NanoNetsEndPoints = {
    NanoNets_API: `https://app.nanonets.com/api/v2`,
    model_type: {
        classification: "/ImageCategorization/Model/",
        objectdetection: "/ObjectDetection/Model/ ",
        multilabelclassification: "/MultiLabelClassification/Model/",
        ocr: "/OCR/Model/",
        Inferences: "/Inferences/Model/"
    },
    tenant: {
        "lupin-dev": "ea6009e3-7f34-4066-b6c1-348b8cb327ff",
        "default": "ea6009e3-7f34-4066-b6c1-348b8cb327ff"
    },
    auth: "Basic OG9iUWNJM2hGR0JNWVpxblNRa19tODAtdVJ1VTVyTEs6"
}

exports.Events = {

    'GM.AP.ADD_AUDIT_LOG_ACTIVITY': "GM.AP.ADD_AUDIT_LOG_ACTIVITY",
    'GM.PAYMENTS.UPDATE_BILL_TRANSACTION':"GM.PAYMENTS.UPDATE_BILL_TRANSACTION",
    "GM.RECEIVABLES.CREATE_NEW_INVOICE":"GM.RECEIVABLES.CREATE_NEW_INVOICE",
    'GM.RECEIVABLES.NEW_PAYMENT_IN':"GM.RECEIVABLES.NEW_PAYMENT_IN",
    'GM.PAYABLE.NEW_CREDIT_NOTE':'GM.PAYABLE.NEW_CREDIT_NOTE',
    'GM.STORES.NEW_ITEM_CREATED':'GM.STORES.NEW_ITEM_CREATED',
    'GM.STORES.ITEM_SALE':'GM.STORES.ITEM_SALE',
    'GM.STORES.ITEM_PURCHASE':'GM.STORES.ITEM_PURCHASE',
    'GM.STORES.ITEM_RETURN':'GM.STORES.ITEM_RETURN',
    'GM.STORES.ITEM_QUANTITY_ADJUST':'GM.STORES.ITEM_QUANTITY_ADJUST',
    'GM.STORES.ITEM_VALUE_ADJUST':'GM.STORES.ITEM_VALUE_ADJUST',
    'GM.PAYABLE.NEW_CUSTOMER_ADDED':'GM.PAYABLE.NEW_CUSTOMER_ADDED',
    'GM.RECEIVABLES.CANCEL_INVOICE':'GM.RECEIVABLES.CANCEL_INVOICE',
    'GM.PAYABLE.BILL_CANCELLED':'GM.PAYABLE.BILL_CANCELLED',
    'GM_PAYABLE_NEW_VENDOR_PAYMENT_OUT':'GM_PAYABLE_NEW_VENDOR_PAYMENT_OUT',
    'GM_PAYABLE_NEW_INVOICE_PAYMENT_OUT':'GM_PAYABLE_NEW_INVOICE_PAYMENT_OUT'


}


exports.eventRecord = {
    "GM.RECEIVABLES.CREATE_NEW_INVOICE":{description:"Sales Invoice",typeOfRecord: "debit"},
    "GM.RECEIVABLES.NEW_PAYMENT_IN":{description:"Payment In",typeOfRecord: "credit"},
    'GM.PAYABLE.NEW_CREDIT_NOTE':{description:"Credit Note",typeOfRecord:"credit"},
    'GM.RECEIVABLES.CANCEL_INVOICE':{description:"Invoice Cancelled",typeOfRecord: "credit"},
    'GM.STORES.NEW_ITEM_CREATED':{description:"Item Created"},
    'GM.STORES.ITEM_SALE':{description:"Sale"},
    'GM.STORES.ITEM_PURCHASE':{description:"Purchase"},
    'GM.STORES.ITEM_QUANTITY_ADJUST':{description:"Adjustment"},
    'GM.STORES.ITEM_VALUE_ADJUST':{description:"Adjustment"},
    'GM.STORES.ITEM_RETURN':{description:"Return"},
    'GM.PAYABLE.BILL_CANCELLED':{description:"Bill Cancelled",typeOfRecord: "credit"}
}


exports.paymentStatus={
    Processed:"Processed",
    Processing:"Processing",
    Failed:"Failed"
}

exports.invoicePaymentStatus={
    Paid:"Paid",
    Unpaid:"Unpaid",
    Partially_Paid:"Partially Paid",
    Cancelled:"Cancelled"
}

exports.approvalStatus={
    Approved :"approved",
    Unassigned : "unassigned",
    Pending:"pending",
    Assigned:"assigned"

}


exports.roles={
    Approver:"approver",
    Administrator:"admin",
    Clerk:"clerk"
}

exports.approverStatus ={
    approved:"approved",
    denied:"denied"
}

exports.ARMicroserviceapiEndPoints={
    addItem:'/add-item',
    listItems:'/list-items',
    AdjustItem:"/adjust-item",
    addInvoice:'/add-invoice',
    deleteInvoice:"/delete-invoice",
    editInvoice:"/edit-invoice",
    billDeleteItem:"/items/bill-delete",
    AddPurchaseItem:'/item-purchase-update',
    AddDebitNoteItem:'/item-debitnote-update',
    EditItem:'/edit-item',
    ItemHistory:'/item-history/:itemId',
    ItemPnl:'/stock/pnl',
    listDeliveryChallan:'/list-delivery-challan',
    addDeliveryChallan:'/add-delivery-challan',
    listInvoices:'/list-invoices',
    addPaymentIn:'/add-payment-in',
    listPaymentIn:'/list-payment-in',
    saveInvoice:'/save-invoice',
    addCustomer:'/add-customer',
    getCustomer:'/customer/:customerId',
    updateCustomer:'/update-customer',
    listCustomers:'/list-customers',
    getInvoicesForCustomer:'/invoices-for-customer',
    paymentInForCustomer:"/payments-for-customer",
    reportsGstr1:"/report-gstr1",
    AddCreditNote:'/add-credit-note',
    ListCreditNotes:"/list-credit-notes",
    AddCompositeItem:'/item/add-composite-item',
    ListCompositeItems:'/item/list-composite-items',
    GetCompositeItem:'/item/composite-item/:itemId',
    UpdateCompositeItem:'/item/edit-composite-item',
    TakenInvoiceNumbers:"/invoice/taken-invoice-numbers",
    ListDoctors:'/list-doctors'
}

exports.ItemAdjustment ={
    QuantityAdjustment: 0,
    ValueAdjustment :1
}
exports.stateCode={

    "01":"JAMMU AND KASHMIR",
    "02":"HIMACHAL PRADESH",
    "03": "PUNJAB",
    "04": "CHANDIGARH",
    "05": "UTTARAKHAND",
    "06": "HARYANA",
    "07": "DELHI",
    "08": "RAJASTHAN",
    "09": "UTTAR PRADESH",
    "10": "BIHAR",
    "11": "SIKKIM",
    "12": "ARUNACHAL PRADESH",
    "13": "NAGALAND",
    "14": "MANIPUR",
    "15": "MIZORAM",
    "16": "TRIPURA",
    "17": "MEGHALAYA",
    "18": "ASSAM",
    "19": "WEST BENGAL",
    "20": "JHARKHAND",
    "21": "ODISHA",
    "22": "CHATTISGARH",
    "23": "MADHYA PRADESH",
    "24": "GUJARAT",
    "25": "DADRA AND NAGAR HAVELI",
    "26": "DAMAN AND DIU ",
    "27": "MAHARASHTRA",
    "28": "ANDHRA PRADESH",
    "29": "",
    "30": "GOA",
    "31": "LAKSHADWEEP",
    "32": "KERALA",
    "33": "TAMIL NADU",
    "34": "PUDUCHERRY",
    "35": "ANDAMAN AND NICOBAR ISLANDS",
    "36": "TELANGANA",
    "37": "ANDHRA PRADESH",
    "38": "LADAKH",
    "-": "-"
}
exports.typeOfNotification = {
    EMAIL:"email"
}
exports.eventNotification={
    'GM.PAYABLE.NEW_CUSTOMER_ADDED':{description:" has registered you as a new customer through Gomigo. You will get notified of your invoices and transactions with this account",subject:"has added you as a new customer through Gomigo"},
    "GM.PAYABLE.NEW_PAYMENT_OUT":{description:"has registered you as a new vendor with the following details",subject:"Payment against Bill No 20-21/2345 from Skull Medico"},
}

exports.invoiceSetting={
    "0":"views/stylishInvoice.pug",
    "1":"views/pharmaInvoice.pug"
}
exports.invoicePageFormat={
    "0":{pageFormat:"A4",landscape:false},
    "1":{pageFormat:"A5",landscape:true}
}

exports.itemTypes={
    PRODUCT:"product",
    SERVICE:"service",
    COMPOSITE:"composite"
}