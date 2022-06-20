var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getElement from "../utils/getElement.js";
export default function addDonationValue() {
    return __awaiter(this, void 0, void 0, function* () {
        const bitcoinElement = getElement('.bitcoin-donation-value');
        bitcoinElement.innerText = yield getBitcoinDonationValue();
    });
}
;
const getBitcoinDonationValue = () => __awaiter(void 0, void 0, void 0, function* () {
    const bitcoinJSON = yield (yield fetch('https://blockchain.info/ticker')).json();
    const donationValue = (500 / bitcoinJSON.BRL.sell).toFixed(4);
    return donationValue;
});
