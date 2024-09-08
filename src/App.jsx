import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/EthWallet";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  const createMnemonic = async () => {
    const mn = generateMnemonic();
    setMnemonic(mn);
  };

  return (
    <>
      <NavBar />
      <button onClick={createMnemonic}>Create Seed Phrase</button>
      <input type="text" value={mnemonic} readOnly></input>
      {mnemonic && (
        <>
          <SolanaWallet mnemonic={mnemonic} />
          <EthWallet mnemonic={mnemonic} />
        </>
      )}
    </>
  );
}

export default App;
