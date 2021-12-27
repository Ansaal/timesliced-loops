var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import timeslice from "../timeslice";
export default function tsForEach(arr, callbackfn) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(((resolve, reject) => {
            timeslice(function* () {
                try {
                    for (let i = 0; i < arr.length; i++) {
                        const arrElement = arr[i];
                        yield callbackfn(arrElement, i, arr);
                    }
                    resolve();
                }
                catch (err) {
                    reject(err);
                }
            })();
        }));
    });
}
;
