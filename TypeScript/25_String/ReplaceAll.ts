namespace ReplaceAll {
    const origin = "안녕하세요. 안녕하세요.";
    let result = "";

    result = origin.replace("안녕", "Hi");
    console.log(result); 

    result = origin.replace(/안녕/, "Hi");
    console.log(result); 

    result = origin.replace(/안녕/g, "Hi");
    console.log(result); 
}
