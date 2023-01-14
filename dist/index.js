import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { listUnsorted, arrUnsorted, arrSorted, searchLog, arrIncludesClassic, } from "./utilitis.js";
const rl = readline.createInterface({ input, output });

const ask = async () => {
    const answerNumber = (await rl.question("Tell me what number you're looking for, I'll check if I have it\n")).toString();
    const answerSearch = parseInt(await rl.question("How do you prefer that I search?\n in array unsorted respons 1\n in array sorted, respons 2\n in  linked list unsorted, respons 3 \n in  linked list sorted, respons 4 \n"));
    if (answerSearch === 1) {
        console.log(arrIncludesClassic(arrUnsorted, parseInt(answerNumber)));
    }
    if (answerSearch == 2) {
        console.log(searchLog(arrSorted, parseInt(answerNumber)));
    }
    if (answerSearch == 3) {
        listUnsorted.find(parseInt(answerNumber)) !== false
            ? console.log(`yes the number ${answerSearch} is in the node ${listUnsorted.find(parseInt(answerNumber))} `)
            : console.log(`the number ${answerSearch} is not in the list`);
    }
    if (answerSearch == 4) {
        listUnsorted.find(parseInt(answerNumber)) !== false
            ? console.log(`yes the number ${answerSearch} is in the node ${listUnsorted.find(parseInt(answerNumber))} `)
            : console.log(`the number ${answerSearch} is not in the list`);
    }
    rl.close();
};
ask();
