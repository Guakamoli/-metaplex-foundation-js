import { PublicKey } from '@solana/web3.js';
import { BigNumber, DateTime, SolAmount, SplTokenAmount } from '../../types';
import { PurchaseReceiptAccount } from './accounts';
import { Option } from '../../utils';
import { AuctionHouse } from './AuctionHouse';
import { NftWithToken, SftWithToken } from '../nftModule';
export declare type Purchase = Readonly<{
    model: 'purchase';
    lazy: false;
    auctionHouse: AuctionHouse;
    asset: SftWithToken | NftWithToken;
    buyerAddress: PublicKey;
    sellerAddress: PublicKey;
    bookkeeperAddress: Option<PublicKey>;
    receiptAddress: Option<PublicKey>;
    price: SolAmount | SplTokenAmount;
    tokens: SplTokenAmount;
    createdAt: DateTime;
}>;
export declare const isPurchase: (value: any) => value is Readonly<{
    model: 'purchase';
    lazy: false;
    auctionHouse: AuctionHouse;
    asset: SftWithToken | NftWithToken;
    buyerAddress: PublicKey;
    sellerAddress: PublicKey;
    bookkeeperAddress: Option<PublicKey>;
    receiptAddress: Option<PublicKey>;
    price: SolAmount | SplTokenAmount;
    tokens: SplTokenAmount;
    createdAt: DateTime;
}>;
export declare function assertPurchase(value: any): asserts value is Purchase;
export declare const toPurchase: (account: PurchaseReceiptAccount, auctionHouseModel: AuctionHouse, asset: NftWithToken | SftWithToken) => Purchase;
export declare type LazyPurchase = Omit<Purchase, 'lazy' | 'asset' | 'tokens'> & Readonly<{
    lazy: true;
    metadataAddress: PublicKey;
    tokens: BigNumber;
}>;
export declare const isLazyPurchase: (value: any) => value is LazyPurchase;
export declare function assertLazyPurchase(value: any): asserts value is LazyPurchase;
export declare const toLazyPurchase: (account: PurchaseReceiptAccount, auctionHouseModel: AuctionHouse) => LazyPurchase;