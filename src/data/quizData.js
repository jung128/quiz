const quizData = {
  categories: ["향수 기초", "향수 종류 및 계열", "향수 브랜드 및 제품", "향수 사용 및 보관"],
  quizzes: [
    // 향수 기초 카테고리
    {
      id: 1,
      category: "향수 기초",
      difficulty: "쉬움",
      question: "향수를 구성하는 향료의 조합을 '노트(Note)'라고 합니다. 향수를 뿌린 후 가장 먼저 느껴지는 향을 무엇이라고 할까요?",
      choices: ["탑 노트 (Top Note)", "미들 노트 (Middle Note)", "베이스 노트 (Base Note)", "싱글 노트 (Single Note)"],
      correct: "탑 노트 (Top Note)"
    },
    {
      id: 2,
      category: "향수 기초",
      difficulty: "보통",
      question: "향수의 농도에 따라 지속 시간이 달라집니다. 일반적으로 가장 농도가 높아 지속 시간이 긴 종류는 무엇일까요?",
      choices: ["오 드 코롱 (Eau de Cologne)", "오 드 뚜왈렛 (Eau de Toilette)", "오 드 퍼퓸 (Eau de Parfum)", "퍼퓸 (Perfume)"],
      correct: "퍼퓸 (Perfume)"
    },
    {
      id: 3,
      category: "향수 기초",
      difficulty: "어려움",
      question: "향수를 뿌리고 시간이 지나면서 느껴지는 중간 단계의 향으로, 향수의 개성을 가장 잘 나타내는 노트는 무엇일까요?",
      choices: ["탑 노트 (Top Note)", "미들 노트 (Middle Note)", "베이스 노트 (Base Note)", "라스트 노트 (Last Note)"],
      correct: "미들 노트 (Middle Note)"
    },
    {
      id: 4,
      category: "향수 기초",
      difficulty: "쉬움",
      question: "향수의 농도가 가장 낮아 지속 시간이 짧고 가볍게 사용하기 좋은 종류는 무엇일까요?",
      choices: ["오 드 퍼퓸 (Eau de Parfum)", "오 드 뚜왈렛 (Eau de Toilette)", "오 드 코롱 (Eau de Cologne)", "퍼퓸 (Perfume)"],
      correct: "오 드 코롱 (Eau de Cologne)"
    },
    {
      id: 5,
      category: "향수 기초",
      difficulty: "보통",
      question: "향수를 뿌린 후 가장 마지막까지 남아 은은하게 지속되는 향으로, 잔향이라고도 불리는 노트는 무엇일까요?",
      choices: ["탑 노트 (Top Note)", "미들 노트 (Middle Note)", "베이스 노트 (Base Note)", "하트 노트 (Heart Note)"],
      correct: "베이스 노트 (Base Note)"
    },

    // 향수 종류 및 계열 카테고리
    {
      id: 6,
      category: "향수 종류 및 계열",
      difficulty: "쉬움",
      question: "달콤하고 부드러운 향으로, 특히 여성들에게 인기가 많은 향 계열은 무엇일까요?",
      choices: ["시트러스 (Citrus)", "우디 (Woody)", "플로럴 (Floral)", "오리엔탈 (Oriental)"],
      correct: "플로럴 (Floral)"
    },
    {
      id: 7,
      category: "향수 종류 및 계열",
      difficulty: "보통",
      question: "나무, 이끼, 흙 등 자연의 향을 연상시키며 차분하고 안정적인 느낌을 주는 향 계열은 무엇일까요?",
      choices: ["아쿠아틱 (Aquatic)", "프루티 (Fruity)", "우디 (Woody)", "스파이시 (Spicy)"],
      correct: "우디 (Woody)"
    },
    {
      id: 8,
      category: "향수 종류 및 계열",
      difficulty: "어려움",
      question: "바다, 비, 폭포 등 물과 관련된 시원하고 상쾌한 느낌을 주는 향 계열은 무엇일까요?",
      choices: ["그린 (Green)", "아쿠아틱 (Aquatic)", "알데하이드 (Aldehyde)", "푸제르 (Fougère)"],
      correct: "아쿠아틱 (Aquatic)"
    },
    {
      id: 9,
      category: "향수 종류 및 계열",
      difficulty: "쉬움",
      question: "레몬, 오렌지, 자몽 등 감귤류 과일의 상큼하고 활기찬 향을 특징으로 하는 계열은 무엇일까요?",
      choices: ["시트러스 (Citrus)", "구르망 (Gourmand)", "레더 (Leather)", "머스크 (Musk)"],
      correct: "시트러스 (Citrus)"
    },
    {
      id: 10,
      category: "향수 종류 및 계열",
      difficulty: "보통",
      question: "바닐라, 초콜릿, 캐러멜 등 달콤한 디저트나 음식 향을 연상시키는 향 계열은 무엇일까요?",
      choices: ["오리엔탈 (Oriental)", "구르망 (Gourmand)", "시프레 (Chypre)", "아로마틱 (Aromatic)"],
      correct: "구르망 (Gourmand)"
    },

    // 향수 브랜드 및 제품 카테고리
    {
      id: 11,
      category: "향수 브랜드 및 제품",
      difficulty: "쉬움",
      question: "다음 중 프랑스 명품 브랜드의 대표적인 향수는 무엇일까요?",
      choices: ["샤넬 N°5", "조 말론 런던 라임 바질 앤 만다린", "딥티크 롬브르 단 로", "바이레도 블랑쉬"],
      correct: "샤넬 N°5"
    },
    {
      id: 12,
      category: "향수 브랜드 및 제품",
      difficulty: "보통",
      question: "남성 향수로 유명하며, 특히 '어벤투스'라는 인기 라인을 가진 브랜드는 어디일까요?",
      choices: ["크리드 (Creed)", "톰 포드 (Tom Ford)", "딥티크 (Diptyque)", "바이레도 (Byredo)"],
      correct: "크리드 (Creed)"
    },
    {
      id: 13,
      category: "향수 브랜드 및 제품",
      difficulty: "어려움",
      question: "다음 향수 브랜드 중, 원래 양초와 디퓨저로 시작하여 향수 라인까지 확장한 것으로 유명한 브랜드는 어디일까요?",
      choices: ["조 말론 런던 (Jo Malone London)", "딥티크 (Diptyque)", "프레데릭 말 (Frederic Malle)", "르 라보 (Le Labo)"],
      correct: "딥티크 (Diptyque)"
    },
    {
      id: 14,
      category: "향수 브랜드 및 제품",
      difficulty: "쉬움",
      question: "영국 라이프스타일 브랜드로, 심플한 보틀 디자인과 다양한 향의 조합(레이어링)으로 유명한 브랜드는 어디일까요?",
      choices: ["디올 (Dior)", "구찌 (Gucci)", "조 말론 런던 (Jo Malone London)", "입생로랑 (Yves Saint Laurent)"],
      correct: "조 말론 런던 (Jo Malone London)"
    },
    {
      id: 15,
      category: "향수 브랜드 및 제품",
      difficulty: "보통",
      question: "스웨덴의 니치 향수 브랜드로, '블랑쉬', '모하비 고스트' 등의 인기 향수를 보유하고 있는 브랜드는 어디일까요?",
      choices: ["바이레도 (Byredo)", "메종 프란시스 커정 (Maison Francis Kurkdjian)", "킬리안 (Kilian)", "펜할리곤스 (Penhaligon's)"],
      correct: "바이레도 (Byredo)"
    },

    // 향수 사용 및 보관 카테고리
    {
      id: 16,
      category: "향수 사용 및 보관",
      difficulty: "쉬움",
      question: "향수의 발향을 돕고 지속력을 높이기 위해 향수를 뿌리기 좋은 신체 부위가 아닌 곳은 어디일까요?",
      choices: ["손목 안쪽", "귀 뒤", "옷", "무릎 뒤"],
      correct: "옷"
    },
    {
      id: 17,
      category: "향수 사용 및 보관",
      difficulty: "보통",
      question: "향수를 보관할 때 가장 피해야 할 환경은 무엇일까요?",
      choices: ["서늘하고 어두운 곳", "습기가 많은 욕실", "직사광선이 드는 창가", "온도 변화가 적은 곳"],
      correct: "직사광선이 드는 창가"
    },
    {
      id: 18,
      category: "향수 사용 및 보관",
      difficulty: "어려움",
      question: "향수를 뿌린 후 손목을 비비는 행동이 향수에 좋지 않은 이유는 무엇일까요?",
      choices: ["향이 빨리 날아가서", "향수 분자가 파괴되어서", "피부 자극을 유발해서", "향이 변질될 수 있어서"],
      correct: "향수 분자가 파괴되어서" // 마찰열로 인해 향수 분자가 깨져 향이 변질되거나 탑 노트가 빨리 사라질 수 있습니다.
    },
    {
      id: 19,
      category: "향수 사용 및 보관",
      difficulty: "쉬움",
      question: "향수를 뿌릴 때 피부에서 적절한 거리는 어느 정도가 좋을까요?",
      choices: ["밀착해서 뿌린다", "5cm 정도", "15~20cm 정도", "50cm 이상"],
      correct: "15~20cm 정도"
    },
    {
      id: 20,
      category: "향수 사용 및 보관",
      difficulty: "보통",
      question: "향수의 유통기한은 일반적으로 개봉 후 몇 년 정도일까요?",
      choices: ["6개월", "1년", "2~3년", "5년 이상"],
      correct: "2~3년" // 보관 상태에 따라 달라질 수 있지만, 일반적으로 개봉 후 2~3년 이내 사용을 권장합니다.
    }
  ]
};

export default quizData;
