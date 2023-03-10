declare module 'react-native-magnati-pos' {
  export interface IInitializeRequest {
    uuid: string;
    connectionTimeout?: number;
    transactionTimeout?: number;
    settlementTimeout?: number;
    enableTrace?: boolean;
  }

  export interface IMagnatiResponse {
    code: string;
    message: string;
    success: boolean;
  }
  export interface IMagnatiAuthResponseData {
    VFI_AdditionalInfo: string;
    VFI_ApprovalCode: string;
    VFI_AuthMode: string;
    VFI_Batch: string;
    VFI_CardNumber: string;
    VFI_CardSchemeName: string;
    VFI_CHName: string;
    VFI_CHVerification: string;
    VFI_DateTime: string;
    VFI_DeviceSerialNo: string;
    VFI_ECRNO: string;
    VFI_EMVAC: string;
    VFI_EMVAID: string;
    VFI_EMVCID: string;
    VFI_EMVLabel: string;
    VFI_EMVTSI: string;
    VFI_EMVTVR: string;
    VFI_Expiry: string;
    VFI_MESSNO: string;
    VFI_Mid: string;
    VFI_PayByMerchantOrderNo: string;
    VFI_PayByOrderNo: string;
    VFI_PYCAmount: string;
    VFI_PYCCurrencyCode: string;
    VFI_PYCCurrencyName: string;
    VFI_PYCExchangeRate: string;
    VFI_PYCMarkup: string;
    VFI_PYCOPTInOut: string;
    VFI_QRVoucherNo: string;
    VFI_QVEPS: string;
    VFI_RRN: string;
    VFI_TID: string;
    VFI_TransSource: string;
    VFI_TXNAMT: string;
    VFI_TXNTYPE: string;
  }

  export interface IMagnatiSettleResponseData {
    VFI_DBCount: string;
    VFI_CRCount: string;
    VFI_DBAmount: string;
    VFI_CRAmount: string;
    VFI_Batch: string;
    VFI_RRN: string;
  }

  export interface IMagnatiSettleResponse {
    data: IMagnatiSettleResponseData | {};
    code: string;
    message: string;
    success: boolean;
  }

  export interface IMagnatiTidMidResponseData {
    VFI_TID: string;
    VFI_Mid: string;
  }

  export interface IMagnatiTidMidResponse {
    data: IMagnatiTidMidResponseData | {};
    code: string;
    message: string;
    success: boolean;
  }

  export interface IMagnatiAuthResponse {
    data: IMagnatiAuthResponseData | {};
    code: string;
    message: string;
    success: boolean;
  }

  export interface IInitializePaymentRequest {
    amount: number;
    tid: string;
    receiptNo: string;
  }

  export function initializePOS(
    _options: IInitializeRequest
  ): Promise<IMagnatiResponse>;
  export function startTransactionMode(): Promise<IMagnatiResponse>;
  export function stopTransactionMode(): Promise<IMagnatiResponse>;
  export function getTID_MID(
    timeoutInSec: number
  ): Promise<IMagnatiTidMidResponse>;
  export function settleBatch(tid: string): Promise<IMagnatiSettleResponse>;
  export function initializePayment(
    amount: number,
    tid: string,
    receiptNumber: string,
    timeoutInSec: number
  ): Promise<IMagnatiAuthResponse>;
}
