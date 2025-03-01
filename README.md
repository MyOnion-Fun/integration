# MyOnion.fun Smart Contract Documentation

## 📜 Overview

MyOnion.fun utilizes two primary smart contracts to power its decentralized token and trading ecosystem:

1. **OnionRouter**: Manages token swaps, ownership changes, and migration functionality.
2. **TokenLauncher**: Handles token creation, bonding curves, metadata updates, and decentralized exchange (DEX) pair creation.

This documentation provides a detailed overview of the events and methods for each contract to facilitate seamless integration and development.

---

## 🔗 API Documentation & Swagger UI

You can explore the MyOnion.fun API, which interacts with these contracts, using the Swagger UI:

[**Testnet**](https://api.testnet.myonion.fun/docs)

[**Mainnet**](https://api.mainnet.myonion.fun/docs)

---

# 1. 🍃 OnionRouter Contract

### 📘 Description

The **OnionRouter** is responsible for:
- Managing token swaps between bonding pairs and DEX pairs.
- Handling ownership changes and contract migration.
- Ensuring secure and efficient trading with fee structures for platform and royalty fees.

---

## 🔌 Deployments

**Testnet:** v3aindjTb8VeftHabD1BUrxp8KErwL77Esv5fBFAcEq5

**Mainnet:** 29c4EEH1aZr5HDumULCFp1eJN1bWftojCGepqTpovyQhd

---

## 📢 Events

### 1. `ChangeOwnerCommence`

Triggered when an ownership change is initiated.

- **Parameters:**
  - `owner (Address)`: Current owner's address.
  - `changeOwner (Address)`: Address of the new owner.

---

### 2. `ChangeOwnerApply`

Triggered when an ownership change is applied.

- **Parameters:**
  - `owner (Address)`: Previous owner's address.
  - `changeOwner (Address)`: Address of the new owner.

---

### 3. `MigrateCommence`

Triggered when a migration is initiated.

- **Parameters:**
  - `owner (Address)`: Owner's address.
  - `changeCode (ByteVec)`: New contract code to migrate to.

---

### 4. `MigrateApply`

Triggered when a migration is completed.

- **Parameters:**
  - `owner (Address)`: Owner's address.
  - `changeCode (ByteVec)`: Code of the new contract.

---

### 5. `MigrateWithFieldsApply`

Triggered when a migration with field updates is applied.

- **Parameters:**
  - `owner (Address)`: Owner's address.
  - `changeCode (ByteVec)`: New contract code.
  - `changeImmFieldsEncoded (ByteVec)`: Encoded immutable fields.
  - `changeMutFieldsEncoded (ByteVec)`: Encoded mutable fields.

---

### 6. `Trade`

Triggered when a token swap occurs.

- **Parameters:**
  - `tokenId (ByteVec)`: ID of the token being traded.
  - `caller (Address)`: Address of the user making the trade.
  - `tokenInId (ByteVec)`: ID of the input token.
  - `amountIn (U256)`: Amount of input tokens.
  - `amountOut (U256)`: Amount of output tokens.
  - `platformFeeAmount (U256)`: Platform fee charged.
  - `royaltyFeeAmount (U256)`: Royalty fee charged.
  - `royaltyRecipient (Address)`: Address receiving the royalty.

---

## 🔧 Methods

### 1. `swapExactTokenForToken`

Performs a token swap with exact input amount.

- **Parameters:**
  - `bondingPair (BondingPair)`: Bonding pair involved.
  - `dexPair (DexPair)`: DEX pair involved.
  - `tokenLauncher (TokenLauncher)`: Associated TokenLauncher contract.
  - `commentTracker (CommentTracker)`: Comment tracker.
  - `profileTracker (ProfileTracker)`: Profile tracker.
  - `caller (Address)`: Address of the user swapping tokens.
  - `tokenInId (ByteVec)`: Input token ID.
  - `amountIn (U256)`: Amount of input tokens.
  - `amountOutMin (U256)`: Minimum amount of output tokens.
  - `deadline (U256)`: Deadline for the swap.
  - `comment (ByteVec)`: Optional comment for the swap.
  - `referrer (Address)`: Referrer's address.

- **Returns:** 
  - `U256`: Amount of output tokens received.

---

### 2. `simulateSwapExactTokenForToken`

Simulates a token swap to estimate output amounts.

- **Parameters:**
  - `bondingPair (BondingPair)`: Bonding pair involved.
  - `dexPair (DexPair)`: DEX pair involved.
  - `tokenInId (ByteVec)`: Input token ID.
  - `amountIn (U256)`: Amount of input tokens.
  - `slippage (U256)`: Allowed slippage percentage.

- **Returns:**
  - `U256`: Estimated output amount.
  - `U256`: Platform fee estimate.
  - `U256`: Royalty fee estimate.
  - `U256`: Amount after all fees.

---

---

# 2. 🚀 TokenLauncher Contract

### 📘 Description

The **TokenLauncher** is designed for:
- Creating tokens with custom metadata.
- Launching bonding curves for dynamic pricing.
- Updating token metadata and creating DEX pairs.
- Ensuring upgradability with owner-controlled settings.

---

## 🔌 Deployments

**Testnet:** 243NXdSvhN4WfkvJsELXUb7cNYM9mWYXwk2t5NGK4HY7R

**Mainnet:** 28P3FfodKZqBQ9zGhgnd86WUfDqd4WLqSyZBmXFHgJFZq

---

## 📢 Events

### 1. `CreateToken`

Triggered when a new token is created.

- **Parameters:**
  - `tokenId (ByteVec)`: Unique identifier for the token.
  - `caller (Address)`: Address of the creator.
  - `symbol (ByteVec)`: Token symbol.
  - `name (ByteVec)`: Token name.
  - `decimals (U256)`: Number of decimals.
  - `totalSupply (U256)`: Total supply of the token.
  - `royaltyFeeCollector (ByteVec)`: Address for collecting royalties.

---

### 2. `CreateBondingCurve`

Triggered when a bonding curve is created for a token.

- **Parameters:**
  - `tokenId (ByteVec)`: ID of the token.
  - `caller (Address)`: Address of the creator.
  - `bpContract (ByteVec)`: Bonding pair contract address.

---

### 3. `UpdateTokenMeta`

Triggered when token metadata is updated.

- **Parameters:**
  - `tokenId (ByteVec)`: ID of the token.
  - `caller (Address)`: Address of the updater.
  - `logo (ByteVec)`: Updated logo URL.
  - `description (ByteVec)`: Updated token description.
  - `socials (ByteVec)`: Updated social media links.

---

### 4. `UpdateTokenBondingCurve`

Triggered when a token's bonding curve is updated.

- **Parameters:**
  - `tokenId (ByteVec)`: ID of the token.
  - `caller (Address)`: Address of the updater.
  - `bondingCurve (ByteVec)`: New bonding curve address.

---

### 5. `UpdateTokenDexPair`

Triggered when a token's DEX pair is updated.

- **Parameters:**
  - `tokenId (ByteVec)`: ID of the token.
  - `caller (Address)`: Address of the updater.
  - `dexPair (ByteVec)`: New DEX pair address.

---

## 🎨 Integration Use Cases

- Implementing token swaps with exact input amounts using `OnionRouter`.
- Creating and managing tokens, bonding curves, and DEX pairs with `TokenLauncher`.
- Simulating swaps for estimating fees and slippage.
- Updating token metadata for dynamic community engagement.

These contracts provide powerful and flexible tools for decentralized applications, meme tokens, and trading platforms on MyOnion.fun. Happy coding! 🚀
