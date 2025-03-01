/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  Asset,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
  SignExecuteContractMethodParams,
  SignExecuteScriptTxResult,
  signExecuteMethod,
  addStdIdToFields,
  encodeContractFields,
  Narrow,
} from "@alephium/web3";
import { default as FeeCollectorContractJson } from "../onion/FeeCollector.ral.json";
import { getContractByCodeHash } from "./contracts";
import {
  TokenLauncherSettings,
  TokenMetaData,
  UpgradableSettings,
  UserProfile,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace FeeCollectorTypes {
  export type Fields = {
    recipient: Address;
    tradeFeeCollected: bigint;
  };

  export type State = ContractState<Fields>;

  export type DepositFeeEvent = ContractEvent<{
    contractAddress: Address;
    user: Address;
    caller: Address;
    feeAmount: bigint;
  }>;
  export type HarvestFeeEvent = ContractEvent<{
    caller: Address;
    recipient: Address;
    feeAmount: bigint;
  }>;

  export interface CallMethodTable {
    depositFee: {
      params: CallContractParams<{
        contractAddress: Address;
        caller: Address;
        user: Address;
        feeAmount: bigint;
      }>;
      result: CallContractResult<null>;
    };
    harvest: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
  export type MulticallReturnType<Callss extends MultiCallParams[]> = {
    [index in keyof Callss]: MultiCallResults<Callss[index]>;
  };

  export interface SignExecuteMethodTable {
    depositFee: {
      params: SignExecuteContractMethodParams<{
        contractAddress: Address;
        caller: Address;
        user: Address;
        feeAmount: bigint;
      }>;
      result: SignExecuteScriptTxResult;
    };
    harvest: {
      params: Omit<SignExecuteContractMethodParams<{}>, "args">;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<
  FeeCollectorInstance,
  FeeCollectorTypes.Fields
> {
  encodeFields(fields: FeeCollectorTypes.Fields) {
    return encodeContractFields(
      addStdIdToFields(this.contract, fields),
      this.contract.fieldsSig,
      AllStructs
    );
  }

  eventIndex = { DepositFee: 0, HarvestFee: 1 };
  consts = { ErrorCodes: { Unauthorized: BigInt("1") } };

  at(address: string): FeeCollectorInstance {
    return new FeeCollectorInstance(address);
  }

  tests = {
    depositFee: async (
      params: TestContractParamsWithoutMaps<
        FeeCollectorTypes.Fields,
        {
          contractAddress: Address;
          caller: Address;
          user: Address;
          feeAmount: bigint;
        }
      >
    ): Promise<TestContractResultWithoutMaps<null>> => {
      return testMethod(this, "depositFee", params, getContractByCodeHash);
    },
    harvest: async (
      params: Omit<
        TestContractParamsWithoutMaps<FeeCollectorTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "harvest", params, getContractByCodeHash);
    },
  };

  stateForTest(
    initFields: FeeCollectorTypes.Fields,
    asset?: Asset,
    address?: string
  ) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const FeeCollector = new Factory(
  Contract.fromJson(
    FeeCollectorContractJson,
    "",
    "b9869938bde02e371b216765f4a248764f889af0bacac7204cbd397db01844f8",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class FeeCollectorInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FeeCollectorTypes.State> {
    return fetchContractState(FeeCollector, this);
  }

  async getContractEventsCurrentCount(): Promise<number> {
    return getContractEventsCurrentCount(this.address);
  }

  subscribeDepositFeeEvent(
    options: EventSubscribeOptions<FeeCollectorTypes.DepositFeeEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollector.contract,
      this,
      options,
      "DepositFee",
      fromCount
    );
  }

  subscribeHarvestFeeEvent(
    options: EventSubscribeOptions<FeeCollectorTypes.HarvestFeeEvent>,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvent(
      FeeCollector.contract,
      this,
      options,
      "HarvestFee",
      fromCount
    );
  }

  subscribeAllEvents(
    options: EventSubscribeOptions<
      FeeCollectorTypes.DepositFeeEvent | FeeCollectorTypes.HarvestFeeEvent
    >,
    fromCount?: number
  ): EventSubscription {
    return subscribeContractEvents(
      FeeCollector.contract,
      this,
      options,
      fromCount
    );
  }

  view = {
    depositFee: async (
      params: FeeCollectorTypes.CallMethodParams<"depositFee">
    ): Promise<FeeCollectorTypes.CallMethodResult<"depositFee">> => {
      return callMethod(
        FeeCollector,
        this,
        "depositFee",
        params,
        getContractByCodeHash
      );
    },
    harvest: async (
      params?: FeeCollectorTypes.CallMethodParams<"harvest">
    ): Promise<FeeCollectorTypes.CallMethodResult<"harvest">> => {
      return callMethod(
        FeeCollector,
        this,
        "harvest",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    depositFee: async (
      params: FeeCollectorTypes.SignExecuteMethodParams<"depositFee">
    ): Promise<FeeCollectorTypes.SignExecuteMethodResult<"depositFee">> => {
      return signExecuteMethod(FeeCollector, this, "depositFee", params);
    },
    harvest: async (
      params: FeeCollectorTypes.SignExecuteMethodParams<"harvest">
    ): Promise<FeeCollectorTypes.SignExecuteMethodResult<"harvest">> => {
      return signExecuteMethod(FeeCollector, this, "harvest", params);
    },
  };

  async multicall<Calls extends FeeCollectorTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FeeCollectorTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends FeeCollectorTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<FeeCollectorTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | FeeCollectorTypes.MultiCallParams
      | FeeCollectorTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      FeeCollector,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
