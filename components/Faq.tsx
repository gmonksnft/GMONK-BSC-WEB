export default function Faq() {
  return (
    <>
<div id="faq" className="bg-gray-800 py-16">
    <div className="sm:text-xl max-w-prose mx-auto px-4">
        <h2 className="text-5xl text-pink-500 mb-4 font-VT323">FAQ</h2>
        <div className="space-y-6">
            <div className="space-y-2">
                <h3>Where can I find the GMONKS BSC collection?</h3>
                <p>All the minted MONKS can be seen on <a href="https://tofunft.com/user/0xBE364cc7182d90C1C0C16c8c34212C474be8B736/" rel="noopener noreferrer" target="_blank">tofuNFT</a>.</p>
            </div>
            <div className="space-y-2">
                <h3>Where are the original images stored?</h3>
                <p>GMONKS images and metadata are securely stored on <a href="https://ipfs.io/" rel="noopener noreferrer" target="_blank">IPFS</a>.</p>
            </div>
            <div className="space-y-2">
                <h3>Are GMONKS BEP721 tokens?</h3>
                <p>Yes. MONKS is compliant with the latest <a href="https://openzeppelin.com/" rel="noopener noreferrer" target="_blank">OpenZeppelin</a> implementation of <a href="https://academy.binance.com/en/glossary/bep-721" rel="noopener noreferrer"
                        target="_blank">BEP721</a>.</p>
            </div>
        </div>
    </div>
</div>
    </>
  );
}
