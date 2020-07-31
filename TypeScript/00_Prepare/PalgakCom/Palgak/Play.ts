class Play {
    /**
     * 현재 플레이 중이면 true 그렇지 않으면 false
     */
    static IsPlay: boolean; 
    /**
     * 참이면, 공격중...
     */
    static IsOffensive: boolean;

    // 탐색 깊이
    static Depth: number;

    // 잘못된 클릭(파울)인지 확인: 아님(false)
    static IsFoul: boolean; 
}
