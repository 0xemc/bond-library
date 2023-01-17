import { CHAIN_ID } from "../constants";
import { ProtocolDefinition } from "../public-types";

/* Protocol Template */
export default {
  name: "ResearchHub", // Your protocol's display name, formatted as it will appear in the BondProtocol dApp
  description: "The mission of ResearchHub is to accelerate the pace of science", // A short protocol description
  logoUrl: "https://your-dao.defi/your-protocol-logo.png",
  // Links to landing page, socials and docs
  links: {
    // telegram: "",
    // staking: "",
    governanceVote:
      "https://snapshot.org/#/researchhub.eth/proposal/0x1d6cc6feb0af985fcb56af73abdbb58754a19eb36c784f3e2aecf983a183cb96",
    twitter: "https://twitter.com/ResearchHub",
    github: "https://github.com/ResearchHub",
    medium: "https://medium.com/researchhub",
    homepage: "https://www.researchhub.com",
    discord: "https://discord.gg/researchhub",
  },
  /*
    The address that you will use to execute the create market transaction, and which will be allowed
    to spend your payout tokens. This can be a multisig or other contract, or a wallet.
  */
  issuerAddresses: {
    [CHAIN_ID.ETHEREUM_MAINNET]: ["0xc4cfa2bdae08416312faa0b72758e1f3750f81e3"],
    [CHAIN_ID.GOERLI_TESTNET]: ["0xc4cfa2bdae08416312faa0b72758e1f3750f81e3"],
  },
  /*
   Tokens specific to your protocol like your governance token or LPs can be added here.

   If you're looking to add a strategic asset, stablecoin or an otherwise common base please check the
   tokens directory to see if it exists already, if not, add it there rather than here.
  */
  tokens: [
    {
      name: "ResearchCoin",
      symbol: "RSC",
      logoUrl: "https://i.postimg.cc/NGntNWB3/Research-Hub-Logo.png",
      // Token contract addresses
      addresses: {
        [CHAIN_ID.ETHEREUM_MAINNET]: "0xd101dcc414f310268c37eeb4cd376ccfa507f571",
        [CHAIN_ID.GOERLI_TESTNET]: "0xd101dcc414f310268c37eeb4cd376ccfa507f571",
      },
      purchaseLinks: {
        [CHAIN_ID.ETHEREUM_MAINNET]:
          "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xd101dcc414f310268c37eeb4cd376ccfa507f571",
      }, // Where to acquire your token
      priceSources: [
        /*
           Check out our docs for supported price sources and their usage.
           Although custom price feeds are supported, some features such as bond price history charts
           do not currently support custom price feeds.
        */
        { source: "coingecko", apiId: "researchcoin" },
        /*
          If you need to add a custom price function please add it in ../custom-price-feeds.ts
          then uncomment the following line and refer to it using the name you set in the
          CUSTOM_PRICE_FEEDS enum
        */
        // { source: "custom", customPriceFunction: CUSTOM_PRICE_FEEDS.US_STABLE },
      ],
    },
  ],
} as ProtocolDefinition;
