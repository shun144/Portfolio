import { WorkInfo } from "@/type";
import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
export const workList: WorkInfo[] = [
  {
    id: 1,
    title: "アンケート作成アプリ",
    explanation:
      "質問と回答を矢印でつなぎながら作成できるアンケート作成アプリ。集計した回答結果をグラフ表示する機能もあります。ユーザの管理やログの管理を行う、管理者画面も構築するためマルチログインも実装しています",
    techList: [
      {
        tecName: "React",
        // techIcon: FaHtml5,
      },
      {
        tecName: "CSS",
        // techIcon: FaCss3,
      },
    ],
    url: "https://qm.shun-studio.com/",
    capture:
      "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
  },
];
