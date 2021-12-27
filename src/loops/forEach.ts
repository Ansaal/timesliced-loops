import timeslice from "../timeslice";

export default async function tsForEach<T>(arr:Array<T>,callbackfn: (value: T, index: number, array: T[]) => void): Promise<void> {
    return new Promise(((resolve, reject) => {
        timeslice(function* () {
            try {
                for (let i = 0; i < arr.length; i++) {
                    const arrElement = arr[i];
                    yield callbackfn(arrElement, i, arr);
                }
                resolve();
            }catch (err:any) {
                reject(err);
            }
        })();
    }))

};

