import Image from "next/image";
import { FaLink, FaGithub } from "react-icons/fa";
import kuberIDE from "../../public/kuberide.png";
import PriorityWallet from "../../public/priority.jpg";
import LinkedIcons from "./LinkedIcons";
const Projects = () => {
  return (
    <div className="grid justify-center gap-12 w-full sm:w-full lg:w-3/5 xl:w-3/5">
      <div className="grid gap-4">
        <div className="flex items-center gap-4">
          <h1 className="poppins-regular text-4xl font-bold">
            Projects and Contributions
          </h1>
          <h1 className="text-5xl lg:text-5xl sm:text-6xl">🧑🏻‍💻</h1>
        </div>
        <div className="grid items-start lg:grid-cols-2 gap-6">
          <div className="grid gap-6">
            <h1 className="poppins-thin text-3xl font-bold">Kuber IDE</h1>
            <div className="flex gap-4 text-2xl">
              <LinkedIcons icon={<FaGithub />} link="https://github.com/dQuadrant/kuber" />
              <LinkedIcons icon={<FaLink />} link="https://kuberide.com/" />
            </div>
            <p className="poppins-semibold leading-loose">
              Kuber is an online plyaground for composing transactions in
              Cardano. Cardano Users can make transactions conveniently such as
              sending Ada/token to multiple addresses, minting tokens, etc. It
              can used by developers for compiling script easily without having
              to configure plutus setup on their own device, developers can
              avoid the arduous work of fixing the dependencies and can have
              their script ready in just couple of minutes.
            </p>
          </div>
          <div className="justify-center">
            <Image
              src={kuberIDE}
              width={600}
              height={600}
              alt={"kuber-ide"}
              className="items-start"
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid items-start lg:grid-cols-2 gap-6">
          <div className="grid gap-6">
            <h1 className="poppins-thin text-3xl font-bold">Multi-Sig</h1>
            <div className="flex gap-4 text-2xl">
              <LinkedIcons icon={<FaLink />} link="https://multisig.cardanoapi.io/docs/" />
            </div>
            <p className="poppins-semibold leading-loose">
              Multi-Sig is a sophisticated multi-signature platform on the
              Cardano blockchain, leveraging Plutus for robust smart contract
              implementation. This platform integrates both on-chain and
              off-chain mechanisms for signature verification and fund
              withdrawal. Funds can be withdrawn once the required number of
              valid signatures meets the quorum threshold, ensuring secure and
              controlled transactions. The platform supports NFT minting,
              blockchain-based data storage, and verification. It utilizes
              ED25519 for signature verification and incorporates Bitcoin’s
              SECP256K1 Elliptic Curve Schnorr Signature protocols for advanced
              cryptographic security and efficient multi-signature management on
              Cardano.
            </p>
          </div>
          <div className="grid gap-6">
            <h1 className="poppins-thin text-3xl font-bold">DEx Matchmaker</h1>
            <div className="flex gap-4 text-2xl">
              <LinkedIcons icon={<FaGithub />} link="https://github.com/reeshavacharya/minswap-dex" />
            </div>
            <p className="poppins-semibold leading-loose">
              Decentralized exchange (DEX) matchmaker is designed to facilitate
              the exchange of tokens and NFTs within a liquidity pool. This
              system efficiently matches buy and sell orders by calculating and
              balancing the amounts of offered and requested tokens, ensuring
              fair and optimized transactions. By integrating seamlessly with
              the DEX, the matchmaker enhances liquidity and trading efficiency,
              providing users with a reliable and equitable platform for their
              token and NFT exchanges.
            </p>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid items-start lg:grid-cols-2 gap-6">
          <div className="justify-center">
            <Image
              src={PriorityWallet}
              width={600}
              height={600}
              alt={"kuber-ide"}
              className="items-start"
            />
          </div>
          <div className="grid gap-6">
            <h1 className="poppins-thin text-3xl font-bold">
              Cardano Priority Wallet
            </h1>
            <div className="flex gap-4 text-2xl">
              <LinkedIcons icon={<FaLink />} link="https://chromewebstore.google.com/detail/cardano-priority-wallet/olphehilbcklnaaeifndonaeadjgjlid" />
            </div>
            <p className="poppins-semibold leading-loose">
              The Cardano Priority Wallet is a Chrome extension developed to
              enhance transaction efficiency and fairness on the Cardano
              blockchain. It acts as a proxy for Cardano wallet extensions,
              leveraging Maximal Extractable Value (MEV) principles to optimize
              transaction parameters. This tool prioritizes transactions by
              analyzing fee structures and adjusting execution units, which
              accelerates minting processes and reduces overall fees. By
              dynamically managing transaction fees, the extension ensures
              prompt and equitable processing, improving user experience and
              transaction confirmation times on the Cardano network.
            </p>
          </div>
        </div>
      </div>
      <div className="grid justify-center gap-4">
        <p className="poppins-thin">
          Visit{" "}
          <a
            href="https://github.com/reeshavacharya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            my github
          </a>{" "}
          to know more.
        </p>
        &nbsp;
      </div>
    </div>
  );
};

export default Projects;
