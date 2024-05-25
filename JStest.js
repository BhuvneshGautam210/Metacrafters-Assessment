// create a variable to hold your NFT's

let student_nfts_wallet = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (student_name, age, gender, city, height, weight) {
    const new_student = {
        student_name: student_name,
        age: age,
        gender: gender,
        city: city,
        height: height,
        weight: weight
    };
    student_nfts_wallet.push(new_student);
    console.log("Minted: " + student_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\n");
    for (let i = 0; i<student_nfts_wallet.length; i++){
        const nft = student_nfts_wallet[i];
        console.log(`student_name: ${nft.name}`);
        console.log(`age: ${nft.age}`);
        console.log(`gender: ${nft.gender}`);
        console.log(`city: ${nft.city}`);
        console.log(`height: ${nft.height} centimeters`);
        console.log(`weight: ${nft.weight} kg`)
        console.log("\n")
    }
}

// print the total number of NFTs we have minted to the console
function getTotalStudents() {
    return student_nfts_wallet.length;
}

// call your functions below this line

mintNFT("Bhuvnesh Gautam", 18, "Male", "Mathura-UP", 182, 85);
mintNFT("Devansh Sehgal", 20, "Male", "Meerut-UP", 185, 78);
mintNFT("Nishant Sarawagi", 21, "Male", "Sitamari-Bihar", 180, 70);
mintNFT("Aryan Ved", 19, "Male", "Bokaro-Jharkhand", 182, 83);
mintNFT("Saharsh kumar", 20, "Male", "Mujjarfpur-Bihar", 179, 73);
mintNFT("Hrishikesh", 19, "Female", "Assam", 175, 65);
mintNFT("Aditya Murti", 20, "Male", "Bijnor-UP", 176, 70);
mintNFT("Aryan", 18, "Male", "Himachal", 170, 65);
mintNFT("Prem Sundari", 20, "Female", "Bihar", 175, 70);


listNFTs();

const totalNFTs = getTotalStudents();
console.log("Total Students: " + totalNFTs);
