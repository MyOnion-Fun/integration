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
import { default as FixedPointMathTestContractJson } from "../dummy/FixedPointMathTest.ral.json";
import { getContractByCodeHash } from "./contracts";
import {
  TokenLauncherSettings,
  TokenMetaData,
  UpgradableSettings,
  UserProfile,
  AllStructs,
} from "./types";

// Custom types for the contract
export namespace FixedPointMathTestTypes {
  export type State = Omit<ContractState<any>, "fields">;

  export interface CallMethodTable {
    to64x64: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
    from64x64: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
    exp: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
    exp_2: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
    ln: {
      params: CallContractParams<{ x: bigint }>;
      result: CallContractResult<bigint>;
    };
    log_2: {
      params: CallContractParams<{ x: bigint }>;
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
    to64x64: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    from64x64: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    exp: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    exp_2: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    ln: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
    log_2: {
      params: SignExecuteContractMethodParams<{ x: bigint }>;
      result: SignExecuteScriptTxResult;
    };
  }
  export type SignExecuteMethodParams<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["params"];
  export type SignExecuteMethodResult<T extends keyof SignExecuteMethodTable> =
    SignExecuteMethodTable[T]["result"];
}

class Factory extends ContractFactory<FixedPointMathTestInstance, {}> {
  encodeFields() {
    return encodeContractFields({}, this.contract.fieldsSig, AllStructs);
  }

  consts = {
    SCALE_64: BigInt("18446744073709551616"),
    SCALE_18: BigInt("1000000000000000000"),
    LN2: BigInt("235865763225513294137944142764154484399"),
    FixedPointMathErrorCodes: {
      INVALID_INPUT: BigInt("100000"),
      OVERFLOW: BigInt("100001"),
    },
  };

  at(address: string): FixedPointMathTestInstance {
    return new FixedPointMathTestInstance(address);
  }

  tests = {
    to64x64: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "to64x64", params, getContractByCodeHash);
    },
    from64x64: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "from64x64", params, getContractByCodeHash);
    },
    exp: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "exp", params, getContractByCodeHash);
    },
    exp_2: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "exp_2", params, getContractByCodeHash);
    },
    ln: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "ln", params, getContractByCodeHash);
    },
    log_2: async (
      params: Omit<
        TestContractParamsWithoutMaps<never, { x: bigint }>,
        "initialFields"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "log_2", params, getContractByCodeHash);
    },
  };

  stateForTest(initFields: {}, asset?: Asset, address?: string) {
    return this.stateForTest_(initFields, asset, address, undefined);
  }
}

// Use this object to test and deploy the contract
export const FixedPointMathTest = new Factory(
  Contract.fromJson(
    FixedPointMathTestContractJson,
    "",
    "4fe0925e4611c2822212b5bd470ceec16b6e2eb357771b8b7e6f2852735d9fed",
    AllStructs
  )
);

// Use this class to interact with the blockchain
export class FixedPointMathTestInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<FixedPointMathTestTypes.State> {
    return fetchContractState(FixedPointMathTest, this);
  }

  view = {
    to64x64: async (
      params: FixedPointMathTestTypes.CallMethodParams<"to64x64">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"to64x64">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "to64x64",
        params,
        getContractByCodeHash
      );
    },
    from64x64: async (
      params: FixedPointMathTestTypes.CallMethodParams<"from64x64">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"from64x64">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "from64x64",
        params,
        getContractByCodeHash
      );
    },
    exp: async (
      params: FixedPointMathTestTypes.CallMethodParams<"exp">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"exp">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "exp",
        params,
        getContractByCodeHash
      );
    },
    exp_2: async (
      params: FixedPointMathTestTypes.CallMethodParams<"exp_2">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"exp_2">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "exp_2",
        params,
        getContractByCodeHash
      );
    },
    ln: async (
      params: FixedPointMathTestTypes.CallMethodParams<"ln">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"ln">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "ln",
        params,
        getContractByCodeHash
      );
    },
    log_2: async (
      params: FixedPointMathTestTypes.CallMethodParams<"log_2">
    ): Promise<FixedPointMathTestTypes.CallMethodResult<"log_2">> => {
      return callMethod(
        FixedPointMathTest,
        this,
        "log_2",
        params,
        getContractByCodeHash
      );
    },
  };

  transact = {
    to64x64: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"to64x64">
    ): Promise<FixedPointMathTestTypes.SignExecuteMethodResult<"to64x64">> => {
      return signExecuteMethod(FixedPointMathTest, this, "to64x64", params);
    },
    from64x64: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"from64x64">
    ): Promise<
      FixedPointMathTestTypes.SignExecuteMethodResult<"from64x64">
    > => {
      return signExecuteMethod(FixedPointMathTest, this, "from64x64", params);
    },
    exp: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"exp">
    ): Promise<FixedPointMathTestTypes.SignExecuteMethodResult<"exp">> => {
      return signExecuteMethod(FixedPointMathTest, this, "exp", params);
    },
    exp_2: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"exp_2">
    ): Promise<FixedPointMathTestTypes.SignExecuteMethodResult<"exp_2">> => {
      return signExecuteMethod(FixedPointMathTest, this, "exp_2", params);
    },
    ln: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"ln">
    ): Promise<FixedPointMathTestTypes.SignExecuteMethodResult<"ln">> => {
      return signExecuteMethod(FixedPointMathTest, this, "ln", params);
    },
    log_2: async (
      params: FixedPointMathTestTypes.SignExecuteMethodParams<"log_2">
    ): Promise<FixedPointMathTestTypes.SignExecuteMethodResult<"log_2">> => {
      return signExecuteMethod(FixedPointMathTest, this, "log_2", params);
    },
  };

  async multicall<Calls extends FixedPointMathTestTypes.MultiCallParams>(
    calls: Calls
  ): Promise<FixedPointMathTestTypes.MultiCallResults<Calls>>;
  async multicall<Callss extends FixedPointMathTestTypes.MultiCallParams[]>(
    callss: Narrow<Callss>
  ): Promise<FixedPointMathTestTypes.MulticallReturnType<Callss>>;
  async multicall<
    Callss extends
      | FixedPointMathTestTypes.MultiCallParams
      | FixedPointMathTestTypes.MultiCallParams[]
  >(callss: Callss): Promise<unknown> {
    return await multicallMethods(
      FixedPointMathTest,
      this,
      callss,
      getContractByCodeHash
    );
  }
}
