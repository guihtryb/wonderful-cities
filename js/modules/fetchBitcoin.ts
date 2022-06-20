import getElement from "../../utils/getElement.js";

export default async function addDonationValue () {
  const bitcoinElement = getElement('.bitcoin-donation-value') as HTMLSpanElement;

  bitcoinElement.innerText = await getBitcoinDonationValue();
};

const getBitcoinDonationValue = async (): Promise<string> => {
  const bitcoinJSON = await (await fetch('https://blockchain.info/ticker')).json();

  const donationValue = (250 / bitcoinJSON.BRL.sell).toFixed(4);

  return donationValue;
};
