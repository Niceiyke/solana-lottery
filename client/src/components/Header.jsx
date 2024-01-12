import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Header = () => {
  return (
    <div className=''>
      <div className=''>Lottery DAPP 💰</div>
      <WalletMultiButton />
    </div>
  );
};

export default Header;