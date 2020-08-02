// 널 병합 연산자(Null Coalescing Operator): ?? 
namespace NullCoalescing {
    let result = "";
    let message: string | null = "";

    message = null;
    result = message ?? "기본값";
    console.log(result); // 기본값

    message = "있는값";
    result = message ?? "기본값";
    console.log(result); // 있는값
}
