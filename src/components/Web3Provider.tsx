import {
    connectorsForWallets,
    RainbowKitProvider,
  } from "@rainbow-me/rainbowkit";
  import "@rainbow-me/rainbowkit/styles.css";
  import {
    argentWallet,
    braveWallet,
    coinbaseWallet,
    imTokenWallet,
    injectedWallet,
    metaMaskWallet,
    omniWallet,
    rainbowWallet,
    trustWallet,
    walletConnectWallet,
  } from "@rainbow-me/rainbowkit/wallets";
  import { configureChains, createConfig, WagmiConfig } from "wagmi";
  import { mainnet } from "wagmi/chains";
  import { publicProvider } from "wagmi/providers/public";
  const projectId = import.meta.env.VITE_APP_API_projectId
  export function MyWeb3Provider({ children }: any) {
    const { chains, publicClient } = configureChains(
      [mainnet],
      [
        // infuraProvider({ apiKey: process.env.INFURA_KEY as string }),
        publicProvider(),
      ]
    );
  
    const connectors = connectorsForWallets([
      {
        groupName: "Suggested",
        wallets: [
          injectedWallet({ chains,  projectId }),
          coinbaseWallet({ chains, appName: "Coinbase" }),
          metaMaskWallet({ chains, projectId }),
          trustWallet({ chains, projectId }),
          imTokenWallet({ chains, projectId }),
          walletConnectWallet({ chains, projectId }),
        ],
      },
      {
        groupName: "More",
        wallets: [
          rainbowWallet({ chains,  projectId  }),
          argentWallet({ chains, projectId }),
          braveWallet({ chains, projectId }),
          omniWallet({ chains, projectId }),
        ],
      },
    ]);
  
    const config = createConfig({
      autoConnect: true,
      connectors,
      publicClient,
    });
  
    return (
      <WagmiConfig config={config}>
        <RainbowKitProvider chains={chains} coolMode>
          {children}
        </RainbowKitProvider>
      </WagmiConfig>
    );
  }
  