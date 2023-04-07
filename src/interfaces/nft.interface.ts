export interface NFTMetadataAttribute {
  value?: string;
  trait_type?: string;
  display_type?: string;
}

export interface NFTMetadata {
  name?: string;
  image?: string;
  attributes?: NFTMetadataAttribute[];
}

export interface NFT {
  tokenAddress: string;
  tokenID: string;
  tokenURI: string;
  meta: NFTMetadata | null;
  lastUpdateBlockNumber: number | null;
  blockNumber: string;
  ownerAddress: string;
  amount: string;
}
