import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const faqs = [
    {
      question: "How do I know the service is safe?",
      answer:
        "Caldera’s goal is to support growing networks by providing a safe automated system to allow growth outside of traditional liquidity pool exchanges. New networks often need to raise significant capital to become listed on traditional exchanges. This creates an unfair hurdle of funding that hurts coins since those resources should be spent elsewhere to benefit development. Caldera offers a safe way to increase the holders of any network without having to tie large amounts of the coins to liquidity pools. Users dictate value. This service further takes a third person out of the equation in completing an OTC trade, making it much safer for every part to complete the transaction that they desire. The transaction fees that Caldera charges cover operational costs and development for the security and peace of mind that we provide.",
    },
    {
      question: "What do I need to use Caldera?",
      answer:
        "All you need is a wallet containing the supported currency you would like to exchange, and a wallet for the supported currency you are looking to acquire. Beyond crypto, you simply need a Discord account so that you are able to interact with your fellow traders.",
    },
    {
      question:
        "Why did I receive less crypto than expected when we accepted our trade?",
      answer:
        "Caldera transaction fees are 2.5% which enable Caldera to absorb Transaction and Network Fees, and promote growing networks. This results in the desired amount stated in the original acceptance of the trade minus the protocol transaction fees (2.5%).",
    },
    {
      question: "What are the trading fees?",
      answer: `Trading fees are set at 2.5%. This supports the protocol to run safely and smoothly at all times.
      We are working hard to provide benefits back to the communities that you are building and supporting.`,
    },
    {
      question: "How long should it take for my whole trade to be complete?",
      answer:
        "The trade process is a pair of transactions through each network that is being swapped. The entire trade process should take slightly longer than twice the normal time of the network with the longest trade confirmation time. ¸For example, if Bitcoin typically takes 10 minutes for a complete confirmation of a transaction, then you should expect to see the final funds in 20 minutes; in contrast, Kaspa takes 20 seconds. Both of the incoming currencies need to be confirmed for the protocol to start the next set of transactions. This is to ensure the process is both smooth and secure.",
    },
    {
      question: "Why can’t I trade X amount of Y coin?",
      answer: `Currently we have transaction minimums in order for our 2.5% fee to cover all transaction and gas costs:
        BTC: 0.005
        BTSC: 5,000
        ETH: 0.1
        GEC: 5,000
        KAS: 250
        LTC: 0.05
        LTRM: 5,000
        SKY: 50,000
        SPACE: 1
        TRX: 50
        USDC (ERC-20): 150
        USDT (ERC-20): 150
        USDC (TRC-20): 35
        USDT (TRC-20): 80`,
    },
    {
      question: "What happens if there is a crash?",
      answer:
        "In case of a network going down in the middle of the trade, or the bot running into an issue, we temporarily store required information for the trade (User Identifiers, Wallet Addresses, Crypto Names & Amounts) privately and securely. This allows support to intervene in the rare case of an unforeseen issue. After a trade is complete, the data is set to be deleted after 7 days.",
    },
    {
      question: "What networks are currently supported?",
      answer:
        "We support Bitcoin (BTC), Bitfishcoin (BTSC), Ethereum (ETH), Geckocoin (GEC), Kaspa (KAS), Litecoin (LTC), Litoreum (LTRM), Skydoge (SKY), USD Coin (USDC), and Tether (USDT). There are many more networks in progress, and we are always looking for what networks our community would like added! Want your coin added here? Contact us in our discord, or just come and talk about some new innovative gems on the rise.",
    },
    {
      question: "How do I get a network supported by Caldera?",
      answer:
        "In the Caldera Discord Server, link below, we have a SUGGESTIONS forum that allows users to suggest their favorite networks that they would like to be a part of our network. If you are a part of a team that would like to be added, come talk to us directly and we will work to get your coin added as quickly as we can. Empowering the individual and the community is the biggest innovation we are seeing from crypto, and we want to foster that belief by being available for every network, no matter how new or small.",
    },
    // Add more FAQ items here
  ];

  return (
    <footer className="bg-custom-blue">
      <div className="container py-8 flex items-center justify-center">
        <div className="w-full md:max-w-xl">
          <div className="flex justify-center text-center mx-auto font-normal text-md text-white py-4">
            <Image
              className="h-8"
              width={60}
              height={40}
              src="/faq-image.png"
              alt=""
            />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="mb-8">
            {/* FAQs */}
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="w-full">
                    <Disclosure.Button className="flex w-full justify-between rounded-lg mx-auto py-1 text-left text-sm font-normal text-white focus:outline-none">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-2 pb-2 text-justify text-sm text-gray-300">
                      {faq.answer}
                    </Disclosure.Panel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>
          <div className="flex items-center justify-center">
            {/* Logo */}
            <Link href="/" className="-m-1.5 p-4">
              <CalderaLogo />
            </Link>
          </div>
          <div className="text-left text-sm md:text-md lg:text-md text-gray-200 pt-2 font-thin">
            <p className="text-center">
              © Caldera Trade 2022 All Rights Reserved When you visit or
              interact with our sites, services or tools, we, or our authorized
              service providers, may use cookies for storing information to help
              provide you with a better, faster and safer experience.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

function CalderaLogo() {
  return <Image width={80} height={80} src="/Caldera-logo.png" alt="" />;
}

export default Footer;
